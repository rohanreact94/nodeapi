const express=require('express');

const router=express.Router();

const ShapeCategoryController=require('../controllers/ShapeCategoryController');
 
router.post('/',ShapeCategoryController.addShapeCategory);
router.get('/', ShapeCategoryController.getShapeCategory);
router.get('/:id',ShapeCategoryController.getSingleShapeCategory);
router.put('/:id', ShapeCategoryController. updateShapeCategory);
router.delete('/:id', ShapeCategoryController.deleteShapeCategory);
router.get('/search/:search',ShapeCategoryController.searchShapeCategory);
router.post('/bulkdelete', ShapeCategoryController.bulkDelete);
module.exports =router;