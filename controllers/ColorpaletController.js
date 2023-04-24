const db=require('../models');

const Colorpalet= db.colorpalet
const { QueryTypes } = require('sequelize');


const addColorpalet =async(req , res)=>{
    const jane= await Colorpalet.build({Name:req.body.Name , Color:req.body.Color})
      jane.save();

    res.status(200).json(jane.toJSON());

}


const getColorPalet = async(req , res)=>{
       const data=await Colorpalet.findAll();
        return res.status(200).json(data);
}



const getSingleColorPalet=async(req , res)=>{
    const data=await Colorpalet.findOne({where:{id:req?.params.id}})
     res.status(200).send(data);
}


const updateColorPalet = async(req , res)=>{
    const data=await Colorpalet.update(req.body,{where:{id:req?.params.id}})    
    res.status(200).send(data);

}

const deleteColorPalet = async(req , res)=>{
    const data=await Colorpalet.destroy({where:{id:req?.params?.id}})
    res.status(200).send("Color palet deleted successfully")
}


const searchColorPalet=async(req ,res)=>{
    const search=req.params.search;

    var data= await db.sequelize.query(
      'SELECT * FROM colorpalets WHERE Name LIKE :search_name',
      {
        replacements: { search_name: '%'+search+'%' },
        type: QueryTypes.SELECT
      }
    );

    return res.status(200).json(data);
}


const bulkDelete=(req, res)=>{
    const ids= JSON.parse(req.body.ids);
    var data=Colorpalet.destroy(
    {
      where: {
        id: ids
      }
    })
    return res.status(200).json(data);
}

module.exports={
    addColorpalet,
    getColorPalet,
    getSingleColorPalet,
    updateColorPalet,
    deleteColorPalet,
    searchColorPalet,
    bulkDelete
}