const db=require('../models');
const { QueryTypes } = require('sequelize');
const ShapeCategory=db.shapecategories

const addShapeCategory = async (req,res)=>{

    const file=req.files.Image;

    file.mv('./uploads/'+file.name , function (err, data){
        if(err){
            throw err;
        }
    })

    const jane=await ShapeCategory.build({Name:req.body.Name ,Position:req.body.Position , Statue:req.body.Status, Image:req.protocol + '://' + req.get('host') +'/uploads/'+file.name})
    jane.save();
    res.status(200).json(jane.toJSON());

}



const getShapeCategory=  async (req , res)=>{
    var data=await ShapeCategory.findAll();
    return res.status(200).json(data);
}   

const getSingleShapeCategory =async(req , res)=>{
      const id=req.params.id;
      var data=await ShapeCategory.findOne({where:{id:id}})
      res.status(200).send(data);
}


const updateShapeCategory =async(req , res)=>{
    const id=req.params.id;
     const file=req.files?.Image;


let img;
     if(file!='' && file!=null && file !=undefined){
    file.mv('./uploads/'+file.name , function (err, data){
        if(err){
            throw err;
        } 
    })
    img=req.protocol + '://' + req.get('host') +'/uploads/'+file.name
}else{
    let data=ShapeCategory.findOne({where:{id:id}})
    img=data.Image
} 
     var data=await ShapeCategory.update(
        { Name:req.body.Name,
         Position:req.body.Position,
         Status:req.body.Status,
         Image:img
       },{where:{id:id}})

     res.status(200).send(data)
}


const deleteShapeCategory=async(req , res)=>{
     const id=req.params.id;
     var data=await ShapeCategory.destroy({where:{id:id}})
     res.status(200).send('Clipaet category deleted successfully')
}


const searchShapeCategory=async(req ,res)=>{
    const search=req.params.search;

    var data= await db.sequelize.query(
      'SELECT * FROM shapecatgoaries WHERE Name LIKE :search_name',
      {
        replacements: { search_name: '%'+search+'%' },
        type: QueryTypes.SELECT
      }
    );

    return res.status(200).json(data);
}


const bulkDelete=(req, res)=>{
    const ids= JSON.parse(req.body.ids);
    var data=ShapeCategory.destroy(
    {
      where: {
        id: ids
      }
    })
    return res.status(200).json(data);
}




module.exports={
    addShapeCategory,
    getShapeCategory,
    getSingleShapeCategory,
    updateShapeCategory,
    deleteShapeCategory,
    searchShapeCategory,
    bulkDelete
}