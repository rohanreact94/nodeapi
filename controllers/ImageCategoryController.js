const db=require('../models');
const { QueryTypes } = require('sequelize');
const ImageCategory=db.imagecategories



    const addImageCategory= async (req, res)=>{
         
         
        const file=req.files.Image;

        file.mv('./uploads/'+file.name , function (err, data){
            if(err){
                throw err;
            }
        })
        const jane= await ImageCategory.build({Name:req.body.Name ,Position:req.body.Position , Status:req.body.Status, Image:req.protocol + '://' + req.get('host') +'/uploads/'+file.name})
        jane.save();

          

        res.status(200).json(jane.toJSON());
    }


    const getImageCategory=  async (req , res)=>{
        var data=await ImageCategory.findAll();
        return res.status(200).json(data);
    }   
    
    const getSignleImageCategory =async(req , res)=>{
          const id=req.params.id;
          var data=await ImageCategory.findOne({where:{id:id}})
          res.status(200).send(data);
    }


    const updateImageCategory =async(req , res)=>{
        
        const id=req.params.id;
        
        const file=req.files?.Image;

        let img;
      if(file!='' && file!=null && file !=undefined){
        file.mv('./uploads/'+file.name , function (err, data){
            if(err){
                throw err;
            } 
        })
       img=req.protocol + '://' + req.get('host') +'/uploads/'+file.name;
    }else{
        let data=ImageCategory.findOne({where:{id:id}})
        img=data.Image
    }  
        //  var data=await ImageCategory.update(req.body,{where:{id:id}})

        var data=await ImageCategory.update(
           { Name:req.body.Name,
             Position:req.body.Position,
             Status:req.body.Status,
             Image:img
           }
            ,{where:{id:id}})

         res.status(200).send(data)
  }


  const deleteImageCategory=async(req , res)=>{
         const id=req.params.id;
         var data=await ImageCategory.destroy({where:{id:id}})
         res.status(200).send('Image category deleted successfully')
  }


  const searchImageCategory=async(req ,res)=>{
    const search=req.params.search;

    var data= await db.sequelize.query(
      'SELECT * FROM imagecategories WHERE Name LIKE :search_name',
      {
        replacements: { search_name: '%'+search+'%' },
        type: QueryTypes.SELECT
      }
    );

    return res.status(200).json(data);
}

const bulkDelete=(req, res)=>{
    const ids= JSON.parse(req.body.ids);
    var data=ImageCategory.destroy(
    {
      where: {
        id: ids
      }
    })
    return res.status(200).json(data);
}

module.exports={
    addImageCategory,
    getImageCategory,
    getSignleImageCategory,
    updateImageCategory,
    deleteImageCategory,
    searchImageCategory,
    bulkDelete
}