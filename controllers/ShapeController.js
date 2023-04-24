const db=require('../models');
const { QueryTypes } = require('sequelize');
const Shape=db.shape;

const addShape=async(req,res)=>{

    const file=req.files.Image;

    file.mv('./uploads/'+file.name,function(err ,data){
       if(err){
        throw err;
       }
    })
  
    const jane=await Shape.create({Name:req.body.Name ,Category_id:req.body.Category_id,Position:req.body.Position,Status:req.body.Status,Image:req.protocol + '://' + req.get('host') +'/uploads/'+file.name})
    jane.save();
    res.status(200).send(jane.toJSON());
}


const getShapes =async(req,res)=>{
    var data=await Shape.findAll();
    return res.status(200).json(data);
}


const getSingleShape=async (req,res)=>{
     const id=req.params.id;
     var data=await Shape.findOne({where:{id:id}})
     res.status(200).send(data)
}


const updateShape=async(req,res)=>{
    const id=req.params.id;

    const file=req.files?.Image;
    let img;
    if(file != null && file !='' && file!=undefined){
    file.mv('./uploads/'+file.name,function(err ,data){
       if(err){
        throw err;
       }
    })
       img=req.protocol + '://' + req.get('host') +'/uploads/'+file.name
     
    }else{
         var data=await Shape.findOne({where:{id:id}})
         img=data.Image;
    }
    var data=await Shape.update(
        {Name:req.body.Name,
         Category_id:req.body.Category_id,   
        Position:req.body.Position,
        Status:req.body.Status,
        Image:img
     },{where:{id:id}})

     res.status(200).send(data);
}

const deleteShape=async (req, res)=>{
    const id=req.params.id;
    var data=await Shape.destroy({where:{id:id}})
    res.status(200).send('Image deleted successfully')
}


const searchShape=async(req ,res)=>{
    const search=req.params.search;

    var data= await db.sequelize.query(
      'SELECT * FROM shapes WHERE Name LIKE :search_name',
      {
        replacements: { search_name: '%'+search+'%' },
        type: QueryTypes.SELECT
      }
    );

    return res.status(200).json(data);
}


const bulkDelete=(req, res)=>{
    const ids= JSON.parse(req.body.ids);
    var data=Shape.destroy(
    {
      where: {
        id: ids
      }
    })
    return res.status(200).json(data);
}

module.exports={
    addShape,
    getShapes,
    getSingleShape,
    updateShape,
    deleteShape,
    searchShape,
    bulkDelete
}