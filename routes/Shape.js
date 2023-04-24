const express=require('express');

const router=express.Router();

const ShapeController=require('../controllers/ShapeController');

router.post('/',ShapeController.addShape);
router.get('/',ShapeController.getShapes);
router.get('/:id',ShapeController.getSingleShape);
router.put('/:id', ShapeController.updateShape);
router.delete('/:id', ShapeController.deleteShape);
router.get('/search/:search',ShapeController.searchShape);
router.post('/bulkdelete', ShapeController.bulkDelete);
module.exports =router;