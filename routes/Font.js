const express=require('express');

const router=express.Router();
const FontController=require('../controllers/FontController');

router.post('/',FontController.addFont);

module.exports =router;