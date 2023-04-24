const db=require('../models');
const { QueryTypes } = require('sequelize');
const Layout=db.layout

const addLayout= async(req, res)=>{
   

    const jane=await Layout.build(req.body)
    jane.save();
    res.status(200).json(jane.toJSON());
}


const getLayout= async (req , res)=>{
    var data=await Layout.findAll();
    return res.status(200).json(data);
}   

const getSingleLayout =async(req , res)=>{
      const id=req.params.id;
      var data=await Layout.findOne({where:{id:id}})
      res.status(200).send(data);
}


const updateLayout =async(req , res)=>{
    const id=req.params.id;
    
     var data=await Layout.update(
        { Name:req.body.Name,
          Category_id:req.body.Category_id,
          Status:req.body.Status,
          
          Unit:req.body.Unit,
          Width:req.body.Width,
          Hight:req.body.Height,
          Margin:req.body.Margin,
           
       },{where:{id:id}})

     res.status(200).send(data)
}


const deleteLayout=async(req , res)=>{
     const id=req.params.id;
     var data=await Layout.destroy({where:{id:id}})
     res.status(200).send('Layout deleted successfully')
}


const searchLayout=async(req ,res)=>{
      const search=req.params.search;

      var data= await db.sequelize.query(
        'SELECT * FROM layouts WHERE Name LIKE :search_name',
        {
          replacements: { search_name: '%'+search+'%' },
          type: QueryTypes.SELECT
        }
      );

      return res.status(200).json(data);
}



const bulkDelete=(req, res)=>{
  const ids= JSON.parse(req.body.ids);
  var data=Layout.destroy(
  {
    where: {
      id: ids
    }
  })
  return res.status(200).json(data);
}


module.exports={
    addLayout,
    getLayout,
    getSingleLayout,
    updateLayout,
    deleteLayout,
    searchLayout,
    bulkDelete
}