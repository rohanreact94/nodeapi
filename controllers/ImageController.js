const db=require('../models');
const { QueryTypes } = require('sequelize');
const Image=db.image;

const addImage=async(req,res)=>{

    const file=req.files.Image;

    file.mv('./uploads/'+file.name,function(err ,data){
       if(err){
        throw err;
       }
    })
  
    const jane=await Image.create({Name:req.body.Name ,Category_id:req.body.Category_id,Position:req.body.Position,Status:req.body.Status,Image:req.protocol + '://' + req.get('host') +'/uploads/'+file.name})
    jane.save();
    res.status(200).send(jane.toJSON());
}


const getImages =async(req,res)=>{
    var data=await Image.findAll();
    return res.status(200).json(data);
}


const getSingleImage=async (req,res)=>{
     const id=req.params.id;
     var data=await Image.findOne({where:{id:id}})
     res.status(200).send(data)
}


const updateImage=async(req,res)=>{
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
    let data=Image.findOne({where:{id:id}})
    img=data.Image
}  





    var data=await Image.update(
        {Name:req.body.Name,
         Category_id:req.body.Category_id,   
        Position:req.body.Position,
        Status:req.body.Status,
        Image:img
     },{where:{id:id}})

     res.status(200).send(data);
}

const deleteImage=async ()=>{
    const id=req.params.id;
    var data=await Image.desttroy({where:{id:id}})
    res.status(200).send('Image deleted successfully')
}


const searchImage=async(req ,res)=>{
    const search=req.params.search;

    var data= await db.sequelize.query(
      'SELECT * FROM images WHERE Name LIKE :search_name',
      {
        replacements: { search_name: '%'+search+'%' },
        type: QueryTypes.SELECT
      }
    );

    return res.status(200).json(data);
}

const bulkDelete=(req, res)=>{
    const ids= JSON.parse(req.body.ids);
    var data=Image.destroy(
    {
      where: {
        id: ids
      }
    })
    return res.status(200).json(data);
}


module.exports={
    addImage,
    getImages,
    getSingleImage,
    updateImage,
    deleteImage,
    searchImage,
    bulkDelete
}