const express=require('express');

const router=express.Router();

const LayoutCategoryController=require('../controllers/LayoutCategoryController');

router.post('/', LayoutCategoryController.addLayoutCategory);
router.get('/', LayoutCategoryController.getLayoutCategory);
router.get('/:id', LayoutCategoryController.getSingleLayoutCategory);
router.put('/:id',  LayoutCategoryController.updateLayoutCategory);
router.delete('/:id',  LayoutCategoryController.deleteLayoutCategory);
router.get('/search/:search', LayoutCategoryController.searchLayoutCategory);
router.post('/bulkdelete', LayoutCategoryController.bulkDelete);
module.exports =router;