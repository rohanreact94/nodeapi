const express=require('express');

const router=express.Router();

const ColorpaletController=require('../controllers/ColorpaletController');

router.post('/',ColorpaletController.addColorpalet);
router.get('/',ColorpaletController.getColorPalet);
router.get('/:id',ColorpaletController.getSingleColorPalet);
router.put('/:id', ColorpaletController.updateColorPalet);
router.delete('/:id', ColorpaletController.deleteColorPalet);
router.get('/search/:search',ColorpaletController.searchColorPalet);
router.post('/bulkdelete', ColorpaletController.bulkDelete);
module.exports =router;