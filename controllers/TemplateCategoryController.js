const db=require('../models');

const TemplateCategory=db.templatecategories
const { QueryTypes } = require('sequelize');
const addTemplateCategory= async(req ,res)=>{
    const file=req.files.Image;

    file.mv('./uploads/'+file.name , function (err, data){
        if(err){
            throw err;
        }
    })

    const jane=await TemplateCategory.build({Name:req.body.Name ,Position:req.body.Position , Statue:req.body.Status, Image:req.protocol + '://' + req.get('host') +'/uploads/'+file.name})
    jane.save();
    res.status(200).json(jane.toJSON());
}


const getTemplateCategory=  async (req , res)=>{
    var data=await TemplateCategory.findAll();
    return res.status(200).json(data);
}   

const getSignleTemplateCategory =async(req , res)=>{
      const id=req.params.id;
      var data=await TemplateCategory.findOne({where:{id:id}})
      res.status(200).send(data);
}


const updateTemplateCategory =async(req , res)=>{
    const id=req.params.id;
     const file=req.files?.Image;
     let img;
     if(file != null && file !='' && file!=undefined){
            file.mv('./uploads/'+file.name , function (err, data){
                if(err){
                    throw err;
                } 
            })
            img=req.protocol + '://' + req.get('host') +'/uploads/'+file.name;
        }else{
            var data=await TemplateCategory.findOne({where:{id:id}})
            img=data.Image;
        }
     var data=await TemplateCategory.update(
        { Name:req.body.Name,
         Position:req.body.Position,
         Status:req.body.Status,
         Image:img
       },{where:{id:id}})

     res.status(200).send(data)
}


const deleteTemplateCategory=async(req , res)=>{
     const id=req.params.id;
     var data=await TemplateCategory.destroy({where:{id:id}})
     res.status(200).send('Template category deleted successfully')
}


const searchTemplateCategory=async(req ,res)=>{
    const search=req.params.search;

    var data= await db.sequelize.query(
      'SELECT * FROM templatecategories WHERE Name LIKE :search_name',
      {
        replacements: { search_name: '%'+search+'%' },
        type: QueryTypes.SELECT
      }
    );

    return res.status(200).json(data);
}


const bulkDelete=(req, res)=>{
      const ids= JSON.parse(req.body.ids);
      var data=TemplateCategory.destroy(
      {
        where: {
          id: ids
        }
      })
      return res.status(200).json(data);
}


module.exports={
    addTemplateCategory,
    getTemplateCategory,
    getSignleTemplateCategory,
    updateTemplateCategory,
    deleteTemplateCategory,
    searchTemplateCategory,
    bulkDelete   
}