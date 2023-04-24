const db=require('../models');
const { QueryTypes } = require('sequelize');
const Background=db.background

 
    const addBackground= async(req, res)=>{


         const file=req.files.Image;

        file.mv('./uploads/'+file.name , function (err, data){
            if(err){
                throw err;
            }
        })

        const jane=await Background.build({Name:req.body.Name,Category_id:req.body.Category_id ,Position:req.body.Position , Statue:req.body.Status, Image:req.protocol + '://' + req.get('host') +'/uploads/'+file.name})
        jane.save();
        res.status(200).json(jane.toJSON());
    }


    const getBackground=  async (req , res)=>{
        var data=await Background.findAll();
        return res.status(200).json(data);
    }   
    
    const getSignleBackground =async(req , res)=>{
          const id=req.params.id;
          var data=await Background.findOne({where:{id:id}})
          res.status(200).send(data);
    }


    const updateBackground =async(req , res)=>{
        const id=req.params.id;
         const file=req.files?.Image;
         let img;
      if(file!='' && file!=null && file!=undefined){
        file.mv('./uploads/'+file.name , function (err, data){
            if(err){
                throw err;
            } 
        })
        img=req.protocol + '://' + req.get('host') +'/uploads/'+file.name
      }else{
        var data=await Background.findOne({where:{id:id}})
        img=data.Image
      }
         
         var data=await Background.update(
            { Name:req.body.Name,
              Category_id:req.body.Category_id,
              Position:req.body.Position,
              Status:req.body.Status,
              Image:img
           },{where:{id:id}})

         res.status(200).send(data)
  }


  const deleteBackground=async(req , res)=>{
         const id=req.params.id;
         var data=await Background.destroy({where:{id:id}})
         res.status(200).send('Background image deleted successfully')
  }

  const searchBackground=async(req ,res)=>{
    const search=req.params.search;

    var data= await db.sequelize.query(
      'SELECT * FROM backgrounds WHERE Name LIKE :search_name',
      {
        replacements: { search_name: '%'+search+'%' },
        type: QueryTypes.SELECT
      }
    );

    return res.status(200).json(data);
}


const bulkDelete=(req, res)=>{
    const ids= JSON.parse(req.body.ids);
    var data=Background.destroy(
    {
      where: {
        id: ids
      }
    })
    return res.status(200).json(data);
}



module.exports={
    addBackground,
    getBackground,
    getSignleBackground,
    updateBackground,
    deleteBackground,
    searchBackground,
    bulkDelete
}