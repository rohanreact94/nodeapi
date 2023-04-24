const express=require('express');

const router=express.Router();

const ImageController=require('../controllers/ImageController');

router.post('/',ImageController.addImage);
router.get('/',ImageController.getImages);
router.get('/:id',ImageController.getSingleImage);
router.put('/:id', ImageController.updateImage);
router.delete('/:id', ImageController.deleteImage);
router.get('/search/:search',ImageController.searchImage);
router.post('/bulkdelete', ImageController.bulkDelete);
module.exports =router;