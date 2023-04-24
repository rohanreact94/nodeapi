const db=require('../models');
const { QueryTypes } = require('sequelize');
const ClipartCategory=db.clipartcategories

 
    const addClipartCategory= async(req, res)=>{
         
        

         const file=req.files.Image;

        file.mv('./uploads/'+file.name , function (err, data){
            if(err){
                throw err;
            }
        })

        const jane=await ClipartCategory.build({name:req.body.Name ,position:req.body.position , statue:req.body.status, image:req.protocol + '://' + req.get('host') +'/uploads/'+file.name})
        jane.save();
        res.status(200).json(jane.toJSON());
    }


    const getClipartCategory=  async (req , res)=>{
        var data=await ClipartCategory.findAll();
        return res.status(200).json(data);
    }   
    
    const getSignleClipartCategory =async(req , res)=>{
          const id=req.params.id;
          var data=await ClipartCategory.findOne({where:{id:id}})
          res.status(200).send(data);
    }


    const updateClipartCategory =async(req , res)=>{
         
        const id=req.params.id;
         
         const file=req.files?.image;
       let img;
       if(file != null && file !='' && file!=undefined){
        file.mv('./uploads/'+file.name , function (err, data){
            if(err){
                throw err;
            } 
        })
        img=req.protocol + '://' + req.get('host') +'/uploads/'+file.name
    }else{
        var data=await Shape.findOne({where:{id:id}})
         img=data.Image;
    } 
         var data=await ClipartCategory.update(
            { name:req.body.name,
                 position:req.body.position,
             status:req.body.status,
             image:img
           },{where:{id:id}})
            
         res.status(200).send(data)
  }


  const deleteClipartCategory=async(req , res)=>{
         const id=req.params.id;
         var data=await ClipartCategory.destroy({where:{id:id}})
         res.status(200).send('Clipaet category deleted successfully')
  }

  const searchClipartCategory=async(req ,res)=>{
    const search=req.params.search;

    var data= await db.sequelize.query(
      'SELECT * FROM clipartcategories WHERE Name LIKE :search_name',
      {
        replacements: { search_name: '%'+search+'%' },
        type: QueryTypes.SELECT
      }
    );

    return res.status(200).json(data);
}


const bulkDelete=(req, res)=>{
    const ids= JSON.parse(req.body.ids);
    var data=ClipartCategory.destroy(
    {
      where: {
        id: ids
      }
    })
    return res.status(200).json(data);
}



module.exports={
    addClipartCategory,
    getClipartCategory,
    getSignleClipartCategory,
    updateClipartCategory,
    deleteClipartCategory,
    searchClipartCategory,
    bulkDelete
}