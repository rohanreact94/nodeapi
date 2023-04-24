const express=require('express');

const router=express.Router();

const FrontendApiController=require('../controllers/FrontendApiController');
router.post('/clipartcategory',FrontendApiController.getClipartCategory);
router.post('/clipart',FrontendApiController.getClipart);
router.post('/shapecategory',FrontendApiController.getShapeCategory);
router.post('/shape',FrontendApiController.getShape);
router.post('/imagecategory',FrontendApiController.getImageCategory);
router.post('/image',FrontendApiController.getImage);
router.post('/backgroundcategory',FrontendApiController.getBackgroundCategory);
router.post('/background',FrontendApiController.getBackground);
router.post('/templatecategory',FrontendApiController.getTemplateCategory);
router.post('/template',FrontendApiController.getTemplate);
router.post('/layoutcategory',FrontendApiController.getLayoutCategory);
router.post('/layout',FrontendApiController.getLayout);
router.post('/product',FrontendApiController.getProduct);
router.post('/settings',FrontendApiController.getSetting);
router.post('/colorpalet',FrontendApiController.getColorPalet);
router.post('/color',FrontendApiController.getColor);
module.exports =router;
