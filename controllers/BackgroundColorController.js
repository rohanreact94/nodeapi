const db=require('../models');

const BackgroundColor=db.backgroundcolor

 
    const addBackgroundColor= async(req, res)=>{

 

        const jane=await BackgroundColor.build({Name:req.body.Name, Color_code:req.body.Color_code ,Position:req.body.Position , Status:req.body.Status})
        jane.save();
        res.status(200).json(jane.toJSON());
    }


    const getBackgroundColor=  async (req , res)=>{
        var data=await BackgroundColor.findAll();
        return res.status(200).json(data);
    }   
    
    const getSignleBackgroundColor =async(req , res)=>{
          const id=req.params.id;
          var data=await BackgroundColor.findOne({where:{id:id}})
          res.status(200).send(data);
    }


    const updateBackgroundColor =async(req , res)=>{
        const id=req.params.id;
         
         var data=await BackgroundColor.update(
             res.body,{where:{id:id}})

         res.status(200).send(data)
  }


  const deleteBackgroundColor=async(req , res)=>{
         const id=req.params.id;
         var data=await BackgroundColor.destroy({where:{id:id}})
         res.status(200).send('Background color deleted successfully')
  }




module.exports={
    addBackgroundColor,
    getBackgroundColor,
    getSignleBackgroundColor,
    updateBackgroundColor,
    deleteBackgroundColor
}