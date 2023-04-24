const express=require('express');

const router=express.Router();

const BackgroundCategoryController=require('../controllers/BackgroundCategoryController');

 
router.post('/',BackgroundCategoryController.addBackgroundCategory);
router.get('/', BackgroundCategoryController.getBackgroundCategory);
router.get('/:id',BackgroundCategoryController.getSignleBackgroundCategory);
router.put('/:id', BackgroundCategoryController. updateBackgroundCategory);
router.delete('/:id', BackgroundCategoryController.deleteBackgroundCategory);
router.get('/search/:search',BackgroundCategoryController.searchBackgroundCategory);
router.post('/bulkdelete', BackgroundCategoryController.bulkDelete);
 
module.exports =router;