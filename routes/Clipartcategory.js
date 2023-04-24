const express=require('express');

const router=express.Router();

const CliparCategoryController=require('../controllers/ClipartCategoryController');

 
router.post('/',CliparCategoryController.addClipartCategory);
router.get('/', CliparCategoryController.getClipartCategory);
router.get('/:id',CliparCategoryController.getSignleClipartCategory);
router.put('/:id', CliparCategoryController. updateClipartCategory);
router.delete('/:id', CliparCategoryController.deleteClipartCategory);
router.get('/search/:search', CliparCategoryController.searchClipartCategory);
router.post('/bulkdelete',CliparCategoryController.bulkDelete);
module.exports =router;