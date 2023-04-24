const db=require('../models');

const LayoutCategory=db.layoutcategories
const { QueryTypes } = require('sequelize');
const addLayoutCategory= async(req ,res)=>{
    const file=req.files.Image;

    file.mv('./uploads/'+file.name , function (err, data){
        if(err){
            throw err;
        }
    })

    const jane=await LayoutCategory.build({Name:req.body.Name ,Position:req.body.Position , Statue:req.body.Status, Image:req.protocol + '://' + req.get('host') +'/uploads/'+file.name})
    jane.save();
    res.status(200).json(jane.toJSON());
}


const getLayoutCategory=  async (req , res)=>{
    var data=await LayoutCategory.findAll();
    return res.status(200).json(data);
}   

const getSingleLayoutCategory =async(req , res)=>{
      const id=req.params.id;
      var data=await LayoutCategory.findOne({where:{id:id}})
      res.status(200).send(data);
}


const updateLayoutCategory =async(req , res)=>{
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
     
    var data=await LayoutCategory.findOne({where:{id:id}});
    img=data.Image;
} 
     var data=await LayoutCategory.update(
        { Name:req.body.Name,
         Position:req.body.Position,
         Status:req.body.Status,
         Image:img
       },{where:{id:id}})

     res.status(200).send(data)
}


const deleteLayoutCategory=async(req , res)=>{
     const id=req.params.id;
     var data=await LayoutCategory.destroy({where:{id:id}})
     res.status(200).send('Layout category deleted successfully')
}


const searchLayoutCategory=async(req ,res)=>{
    const search=req.params.search;

    var data= await db.sequelize.query(
      'SELECT * FROM layoutcategories WHERE Name LIKE :search_name',
      {
        replacements: { search_name: '%'+search+'%' },
        type: QueryTypes.SELECT
      }
    );

    return res.status(200).json(data);
}

const bulkDelete=(req, res)=>{
      const ids= JSON.parse(req.body.ids);
      var data=LayoutCategory.destroy(
      {
        where: {
          id: ids
        }
      })
      return res.status(200).json(data);
}



module.exports={
    addLayoutCategory,
    getLayoutCategory,
    getSingleLayoutCategory,
    updateLayoutCategory,
    deleteLayoutCategory,
    searchLayoutCategory,
    bulkDelete
}