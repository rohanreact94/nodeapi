const express=require('express')

const bodyParser = require('body-parser')
const fileupload = require('express-fileupload');
const app=express();
const path = require('path');
const cors = require('cors');
app.use(fileupload());

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));


app.use(cors({
    origin: '*'
  }));


const port=process.env.PORT ||5000;



const clipartCategoryroute=require('./routes/Clipartcategory');
const clipartroute=require('./routes/Clipart');
const imageCategoryroute=require('./routes/ImageCategory');
const imageRoute=require('./routes/Image');
const shapeRoute=require('./routes/Shape');
const shapeCategoryroute=require('./routes/ShapeCategory');
const backgroundCategoryroute=require('./routes/Backgroundcategory');
const backgroundImgroute=require('./routes/Background');
const templatecategoriesroute=require('./routes/Templatecategory');
const templateroute=require('./routes/Template')
const layoutcategoriesroute=require('./routes/Layoutcategory')
const layoutroute=require('./routes/Layout')
const colorpaletroute=require('./routes/Colorpalet')
const colorroute=require('./routes/Color')
const fontroute=require('./routes/Font')


const frontendapiroute=require('./routes/Frontend')


 

app.use(express.static("dashboard/build"));



app.use('/api/clipartcategories',clipartCategoryroute);
app.use('/api/clipart',clipartroute);
app.use('/api/imagecategories',imageCategoryroute);
app.use('/api/image',imageRoute);
app.use('/api/shape',shapeRoute);
app.use('/api/shapecategories',shapeCategoryroute);
app.use('/api/backgroundcategories',backgroundCategoryroute);
app.use('/api/backgroundimg',backgroundImgroute);
app.use('/api/templatecategories',templatecategoriesroute);
app.use('/api/template',templateroute);
app.use('/api/layoutcategories',layoutcategoriesroute);
app.use('/api/layout',layoutroute);
app.use('/api/colorpalet',colorpaletroute);
app.use('/api/color',colorroute);
app.use('/api/font',fontroute);


app.use('/api/tool',frontendapiroute);


app.listen(port,()=>{
    console.log('Server is running at port'+port);
});