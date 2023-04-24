const express=require('express');

const router=express.Router();

const TemplateCategoryController=require('../controllers/TemplateCategoryController');

 
router.post('/',TemplateCategoryController.addTemplateCategory);
router.get('/', TemplateCategoryController.getTemplateCategory);
router.get('/:id',TemplateCategoryController.getSignleTemplateCategory);
router.put('/:id', TemplateCategoryController. updateTemplateCategory);
router.delete('/:id', TemplateCategoryController.deleteTemplateCategory);
router.get('/search/:search', TemplateCategoryController.searchTemplateCategory);
router.post('/bulkdelete', TemplateCategoryController.bulkDelete);



module.exports =router;