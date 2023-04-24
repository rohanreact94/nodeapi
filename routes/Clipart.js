const express=require('express');

const router=express.Router();

const ClipartController=require('../controllers/ClipartController');

 
router.post('/',ClipartController.addClipart);
router.get('/', ClipartController.getClipart);
router.get('/:id',ClipartController.getSignleClipart);
router.put('/:id', ClipartController. updateClipart);
router.delete('/:id', ClipartController.deleteClipart);
router.get('/search/:search', ClipartController.searchClipart);
router.post('/bulkdelete', ClipartController.bulkDelete);

module.exports =router;