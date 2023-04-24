const { where } = require('sequelize')
const db =require('../models')
const Clipart=db.clipart
const ClipartCategory=db.clipartcategories
const Image=db.image
const ImageCategory=db.imagecategories
const Background=db.background
const BackgroundCategory=db.backgroundcategories
const Template=db.template
const TemplateCategory=db.templatecategories
const Layout=db.layout
const LayoutCategory=db.layoutcategories
const Shape =db.shape
const ShapeCategory=db.shapecategories
const Colorpalet=db.colorpalet
const Color=db.color


// For clipart category

const getClipartCategory= async(req , res)=>{
        var data=await ClipartCategory.findAll({
            attributes: ['id', 'name' , 'image']
        })

        if(data!=null && data !== undefined && data !=''){
             var categoryData={}
             categoryData.categoryData=data
            return res.status(200).json(categoryData);
        }else{
            return res.status(400).message("something went wrong");
        }
}


const getClipart= async(req , res)=>{
  
       
    var data=await Clipart.findAll({
        attributes: ['id','Name','Category_id', 'Image'],
        where:{Category_id:req?.body?.id}
    })

    var clipartData={}
   

    if(data!=null && data !== undefined && data !=''){
        clipartData.clipartData=data
        return res.status(200).json(clipartData);
    }else{
        clipartData.clipartData=[]
        return res.status(200).json(clipartData);
    }
}

const getShapeCategory= async(req , res)=>{
   
   try{
    var data=await ShapeCategory.findAll({
        attributes: ['id','Name', 'Image']
    }).then(d=>{
          return res.status(200).json({shapescategories:d})
    })
}catch(err){
    return res.status(200).json('not found')
}
    

     
}

const getShape= async(req , res)=>{

    try{
        console.log(req?.body?.id)
    var data=await Shape.findAll({
        attributes: ['id','Name','Category_id', 'Image'],
        
        where:{Category_id:req?.body?.id}
    }).then(d=>{
       
        return res.status(200).json({shapeData:d})
    })
}catch(err){
    return res.status(400).json('Not found')
}
    
    
}
const getImageCategory = async(req , res)=>{
   
   try{
    var data=await ImageCategory.findAll({
        attributes: ['id' ,'Name' , 'Image']
    }).then(d=>{
        return res.status(200).json({imagesCategoryData:d})
    })
}catch(err){
    return res.status(400).json('Not found')
}
       
}

const getImage= async(req , res)=>{

    try{
    var data=await Image.findAll({
        attributes: ['id' ,'Name','Category_id', 'Image'],
        where:{Category_id:req?.body?.id}
    }).then(d=>{
         

        
        return res.status(200).json({imagesbyCategoryData:d});
    })
    
    
  }catch(err){
    return res.status(200).json('not found');
  } 
     

    
}

const getBackgroundCategory= async(req , res)=>{
    
    try{
        var data=await BackgroundCategory.findAll({
            attributes: ['id','Name', 'Image']
        }).then(d=>{
             return res.status(200).json({backgroundCategoryData:d})
        })
    }catch(err){
         return res.status(200).json({err})     
    }
     
}

const getBackground= async(req , res)=>{
    try{
        var data=await Background.findAll({
            attributes: ['id','Name','Category_id', 'Image'],
            where:{Category_id:req?.body?.id}
        }).then(d=>{
            return res.status(200).json({backgroundData:d})
        })
    }catch(err){
        return res.status(400).json({err})
    }

     
}


const getTemplateCategory= async(req , res)=>{
   
  try{ 
    var data=await TemplateCategory.findAll({
        attributes: ['id','Name','Image']
    }).then(d=>{
         return res.status(200).json({templatecategories:d})
    })
    }catch(err){
        return res.status(400).json({err})
    }
    
}

const getTemplate= async(req , res)=>{
   try{ 
    var data=await Template.findAll({
        attributes: ['id','Name','Template_id', 'Width' , 'Height','No_of_side','Margin','Unit','Is_photobook','SKU'],        
        where:{Template_id:req?.body?.id}
    }).then(d=>{
        return res.status(200).json({templateData:d})
    })
        }catch(err){
            return res.status(400).json({err})
        }
         
}



const getLayoutCategory= async(req , res)=>{
      try{   
        var data=await LayoutCategory.findAll({
            attributes: ['id','Name','Image']
        }).then(d=>{
              return res.status().json({})
        })
    }catch(err){
        return res.status().json({err})
    }
     
}

const getLayout= async(req , res)=>{
    var data=await Layout.findAll({
        attributes: ['id','Name','Category_id', 'Width' , 'Height','Unit','Margin']
    })


    const dataObject = data.reduce((obj, item) => {
        obj[item.id] = item;
        return obj;
      }, {});

    if(dataObject!=null && dataObject !== undefined && dataObject !=''){

        return res.status(200).json(dataObject);
    }else{
        return res.status(400).message("something went wrong");
    }
}


const getProduct =(req, res)=>{

    var data={}
    var productData ={}
    data.id="2212"
    data.product_name="Testing node js"
    data.product_type="is_canvas"
    data.width=400
    data.height=400
    data.no_of_side=4 
    productData.productData=data;  
    return res.status(200).json(productData);

}

const getSetting=(req , res)=>{
    var data={}
    var settings={}    

    data.admin=1
    data.use_global_settings=1
    data.enable_text=1
    data.enable_art=1
    data.enable_image=1
    data.enable_shape=1
    data.enable_upload=1
    data.enable_background=1
    data.enable_template=1
    data.enable_grid=1
    data.enable_safe_margin=1
    data.enable_cut_margin=1
    data.is_canvas_or_merchandise=1
    
    settings.settings=data;

    return res.status(200).json(settings);
}
 

const getColorPalet=async(req, res)=>{
    try{   
        var data=await Colorpalet.findAll({
            attributes: ['id','Name','Color']
        }).then(d=>{
              return res.status(200).json({colorpalet:d})
        })
    }catch(err){
        return res.status(200).json({err})
    }

}

const getColor=async(req, res)=>{

    try{
         
    var data=await Color.findAll({
        attributes: ['id','Name','Color_palet', 'Color'],
        
        where:{Color_palet:req?.body?.id}
    }).then(d=>{
       
        return res.status(200).json({colors:d})
    })
}catch(err){
    return res.status(400).json('Not found')
}

}

module.exports={
    getClipartCategory,
    getClipart,
    getShapeCategory,
    getShape,
    getImageCategory,
    getImage,
    getBackgroundCategory,
    getBackground,
    getTemplateCategory,
    getTemplate,
    getLayoutCategory,
    getLayout,
    getProduct,
    getSetting,
    getColorPalet,
    getColor
}





