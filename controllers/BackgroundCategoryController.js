const db=require('../models');
const { QueryTypes } = require('sequelize');
const BackgroundCategory=db.backgroundcategories

 
    const addBackgroundCategory= async(req, res)=>{


         const file=req.files.Image;

        file.mv('./uploads/'+file.name , function (err, data){
            if(err){
                throw err;
            }
        })

        const jane=await BackgroundCategory.build({Name:req.body.Name ,Position:req.body.Position , Statue:req.body.Status, Image:req.protocol + '://' + req.get('host') +'/uploads/'+file.name})
        jane.save();
        res.status(200).json(jane.toJSON());
    }


    const getBackgroundCategory=  async (req , res)=>{
        var data=await BackgroundCategory.findAll();
        return res.status(200).json(data);
    }   
    
    const getSignleBackgroundCategory =async(req , res)=>{
          const id=req.params.id;
          var data=await BackgroundCategory.findOne({where:{id:id}})
          res.status(200).send(data);
    }


    const updateBackgroundCategory =async(req , res)=>{
        const id=req.params.id;
         const file=req.files?.Image;
let img ;

   if(file!=null && file !='' && file !=undefined){
        file.mv('./uploads/'+file.name , function (err, data){
            if(err){
                throw err;
            }
             img=req.protocol + '://' + req.get('host') +'/uploads/'+file.name
        })
        }else{
            var data=await BackgroundCategory.findOne({where:{id:id}})
            img=data.Image;
        }  
         var data=await BackgroundCategory.update(
            { Name:req.body.Name,
             Position:req.body.Position,
             Status:req.body.Status,
             Image:img
           },{where:{id:id}})

         res.status(200).send(data)
          
  }


  const deleteBackgroundCategory=async(req , res)=>{
         const id=req.params.id;
         var data=await BackgroundCategory.destroy({where:{id:id}})
         res.status(200).send('Clipaet category deleted successfully')
  }


  const searchBackgroundCategory=async(req ,res)=>{
    const search=req.params.search;

    var data= await db.sequelize.query(
      'SELECT * FROM backgroundcatgoaries WHERE Name LIKE :search_name',
      {
        replacements: { search_name: '%'+search+'%' },
        type: QueryTypes.SELECT
      }
    );

    return res.status(200).json(data);
}


const bulkDelete=(req, res)=>{
    const ids= JSON.parse(req.body.ids);
    var data=BackgroundCategory.destroy(
    {
      where: {
        id: ids
      }
    })
    return res.status(200).json(data);
}




module.exports={
    addBackgroundCategory,
    getBackgroundCategory,
    getSignleBackgroundCategory,
    updateBackgroundCategory,
    deleteBackgroundCategory,
    searchBackgroundCategory,
    bulkDelete
}