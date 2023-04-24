const db=require('../models');
const { QueryTypes } = require('sequelize');
const Clipart=db.clipart

 
    const addClipart= async (req, res)=>{
          const file=req.files.Image;

        file.mv('./uploads/'+file.name , function (err, data){
            if(err){
                throw err;
            }
        })
        const jane= await Clipart.create({Name:req.body.Name,Category_id:req.body.Category_id,Position:req.body.Position , Statue:req.body.Status, Image:req.protocol + '://' + req.get('host') +'/uploads/'+file.name})
         jane.save();
        res.status(200).json(jane.toJSON());
    }


    const getClipart =  async (req , res)=>{
        var data=await Clipart.findAll();
        return res.status(200).json(data);
    }   
    
    const getSignleClipart =async(req , res)=>{
          const id=req.params.id;
          var data=await Clipart.findOne({where:{id:id}})
          res.status(200).send(data);
    }


    const updateClipart  =async(req , res)=>{
        const id=req.params.id;
        
        const file=req.files?.Image;
        let img;
       if(file != null && file !='' && file!=undefined){
        file.mv('./uploads/'+file.name , function (err, data){
            if(err){
                throw err;
            } 
        })
        img=req.protocol + '://' + req.get('host') +'/uploads/'+file.name
    }else{
        var data=await Clipart.findOne({where:{id:id}})
         img=data.Image;
    } 
     
         var data=await Clipart.update(
             { Name:req.body.Name,
                Category_id:req.body.Category_id,
             Position:req.body.Position,
             Status:req.body.Status,
             Image:img
           },{where:{id:id}})

         res.status(200).send(data)
  }


  const deleteClipart =async(req , res)=>{
         const id=req.params.id;
         var data=await Clipart.destroy({where:{id:id}})
         res.status(200).send('Clipart deleted successfully')
  }


  const searchClipart=async(req ,res)=>{
    const search=req.params.search;

    var data= await db.sequelize.query(
      'SELECT * FROM cliparts WHERE Name LIKE :search_name',
      {
        replacements: { search_name: '%'+search+'%' },
        type: QueryTypes.SELECT
      }
    );

    return res.status(200).json(data);
}

const bulkDelete=(req, res)=>{
    const ids= JSON.parse(req.body.ids);
    var data=Clipart.destroy(
    {
      where: {
        id: ids
      }
    })
    return res.status(200).json(data);
}

module.exports={
    addClipart,
    getClipart,
    getSignleClipart,
    updateClipart,
    deleteClipart,
    searchClipart,
    bulkDelete

}


