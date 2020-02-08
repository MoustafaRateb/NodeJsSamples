const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router = express.Router();

router.get('/login',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','login.html'));
});
router.get('/register',(req,res,next)=>{
    res.sendFile(path.join(rootDir,'views','register.html'));
});

router.post('/login',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});
router.post('/register',(req,res,next)=>{
    console.log(req.body);
    res.redirect('/');
});

module.exports = router;