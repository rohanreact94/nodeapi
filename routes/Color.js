const express=require('express');

const router=express.Router();

const ColorController=require('../controllers/ColorController');

router.post('/',ColorController.addColor);
router.get('/',ColorController.getColor);
router.get('/:id',ColorController.getSingleColor);
router.put('/:id', ColorController.updateColor);
router.delete('/:id', ColorController.deleteColor);
router.get('/search/:search',ColorController.searchColor);
router.post('/bulkdelete', ColorController.bulkDelete);
module.exports =router;