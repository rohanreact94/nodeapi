const db=require('../models');
const { QueryTypes } = require('sequelize');
const Template=db.template

const addTemplate= async(req, res)=>{
   

    const jane=await Template.build(req.body)
    jane.save();
    res.status(200).json(jane.toJSON());
}


const getTemplate= async (req , res)=>{
    var data=await Template.findAll();
    return res.status(200).json(data);
}   

const getSignleTemplate =async(req , res)=>{
      const id=req.params.id;
      var data=await Template.findOne({where:{id:id}})
      res.status(200).send(data);
}


const updateTemplate =async(req , res)=>{
    const id=req.params.id;
    
     var data=await Template.update(
        { Name:req.body.Name,
          Template_id:req.body.Template_id,
          Status:req.body.Status,
          Product:req.body.product,
          No_of_side:req.body.No_of_side,
          Unit:req.body.Unit,
          Width:req.body.Width,
          Hight:req.body.Height,
          Margin:req.body.Margin,
          Is_photobook:req.body.Is_photobook,
          Output_type:req.body.Output_type,
          SKU:req.body.SKU
       },{where:{id:id}})

     res.status(200).send(data)
}


const deleteTemplate=async(req , res)=>{
     const id=req.params.id;
     var data=await Template.destroy({where:{id:id}})
     res.status(200).send('Template deleted successfully')
}


const searchTemplate=async(req ,res)=>{
      const search=req.params.search;

      var data= await db.sequelize.query(
        'SELECT * FROM templates WHERE Name LIKE :search_name',
        {
          replacements: { search_name: '%'+search+'%' },
          type: QueryTypes.SELECT
        }
      );

      return res.status(200).json(data);
}

const bulkDelete=(req, res)=>{
  const ids= JSON.parse(req.body.ids);
  var data=Template.destroy(
  {
    where: {
      id: ids
    }
  })
  return res.status(200).json(data);
}


module.exports={
    addTemplate,
    getTemplate,
    getSignleTemplate,
    updateTemplate,
    deleteTemplate,
    searchTemplate,
    bulkDelete  
}