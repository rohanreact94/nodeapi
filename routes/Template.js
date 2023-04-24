const express=require('express');

const router=express.Router();

const TemplateController=require('../controllers/TemplateController');

 
router.post('/',TemplateController.addTemplate);
router.get('/', TemplateController.getTemplate);
router.get('/:id',TemplateController.getSignleTemplate);
router.put('/:id', TemplateController. updateTemplate);
router.delete('/:id', TemplateController.deleteTemplate);
router.get('/search/:search',TemplateController.searchTemplate);
router.post('/bulkdelete', TemplateController.bulkDelete);
module.exports =router;