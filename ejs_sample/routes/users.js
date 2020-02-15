
const express = require('express');

const usersData =require('../data/usersData');

const router = express.Router();
router.get('/login',(req,res,next)=>{
    res.render('sign-in',{pageTitle:'Service centers Login page'})
});
router.get('/register',(req,res,next)=>{
    res.render('register',{pageTitle:'Service centers Register page'})
});

router.post('/login',(req,res,next)=>{
    res.redirect('/');
});
router.post('/register',(req,res,next)=>{
    usersData.users.push(req.body);
    res.redirect('/');
});

module.exports = router;