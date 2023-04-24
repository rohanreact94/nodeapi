const express=require('express');

const router=express.Router();

const LayoutController=require('../controllers/LayoutController');

router.post('/', LayoutController.addLayout);
router.get('/', LayoutController.getLayout);
router.get('/:id', LayoutController.getSingleLayout);
router.put('/:id',  LayoutController.updateLayout);
router.delete('/:id',  LayoutController.deleteLayout);
router.get('/search/:search', LayoutController.searchLayout);
router.post('/bulkdelete', LayoutController.bulkDelete);
module.exports =router;