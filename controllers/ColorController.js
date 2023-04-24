const db=require('../models');

const Color= db.color

const { QueryTypes } = require('sequelize');

const addColor =async(req , res)=>{
    const jane= await Color.build({Name:req.body.Name,Color_palet:req.body.Color_palet,Color:req.body.Color})
      jane.save();

    res.status(200).json(jane.toJSON());

}


const getColor = async(req , res)=>{
       const data=await Color.findAll();
        return res.status(200).json(data);
}



const getSingleColor
=async(req , res)=>{
    const data=await Color.findOne({where:{id:req?.params.id}})
     res.status(200).send(data);
}


const updateColor
 = async(req , res)=>{
    const data=await Color.update(req.body,{where:{id:req?.params.id}})    
    res.status(200).send(data);

}

const deleteColor
 = async(req , res)=>{
    const data=await Color.destroy({where:{id:req?.params.id}})
    res.status(200).send("Color palet deleted successfully")
}


const searchColor=async(req ,res)=>{
    const search=req.params.search;

    var data= await db.sequelize.query(
      'SELECT * FROM colors WHERE Name LIKE :search_name',
      {
        replacements: { search_name: '%'+search+'%' },
        type: QueryTypes.SELECT
      }
    );

    return res.status(200).json(data);
}


const bulkDelete=(req, res)=>{
    const ids= JSON.parse(req.body.ids);
    var data=Color.destroy(
    {
      where: {
        id: ids
      }
    })
    return res.status(200).json(data);
}

module.exports={
    addColor,
    getColor,
    getSingleColor,
    updateColor,
    deleteColor,
    searchColor,
    bulkDelete
}