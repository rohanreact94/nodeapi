const express=require('express');

const router=express.Router();

const ImageCategoryController=require('../controllers/ImageCategoryController');

 
router.post('/',ImageCategoryController.addImageCategory);
router.get('/', ImageCategoryController.getImageCategory);
router.get('/:id',ImageCategoryController.getSignleImageCategory);
router.put('/:id', ImageCategoryController. updateImageCategory);
router.delete('/:id', ImageCategoryController.deleteImageCategory);
router.get('/search/:search',ImageCategoryController.searchImageCategory);
router.post('/bulkdelete', ImageCategoryController.bulkDelete);
module.exports =router;