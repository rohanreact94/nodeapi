const express=require('express');

const router=express.Router();

const BackgroundController=require('../controllers/BackgroundController');

 
router.post('/',BackgroundController.addBackground);
router.get('/', BackgroundController.getBackground);
router.get('/:id',BackgroundController.getSignleBackground);
router.put('/:id', BackgroundController. updateBackground);
router.delete('/:id', BackgroundController.deleteBackground);
router.get('/search/:search',BackgroundController.searchBackground);
router.post('/bulkdelete', BackgroundController.bulkDelete);


module.exports =router;