const express=require('express');

const router=express.Router();

const BackgroundColorController=require('../controllers/BackgroundColorController');

 
router.post('/',BackgroundColorController.addBackgroundColor);
router.get('/', BackgroundColorController.getBackgroundColor);
router.get('/:id',BackgroundColorController.getSignleBackgroundColor);
router.put('/:id', BackgroundColorController. updateBackgroundColor);
router.delete('/:id', BackgroundColorController.deleteBackgroundColor);
module.exports =router;