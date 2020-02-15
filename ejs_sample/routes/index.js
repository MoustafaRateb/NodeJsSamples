
const express = require('express');
const usersData =require('../data/usersData');

const router = express.Router();

router.get('/',(req,res,next)=>{
    res.render('home',{pageTitle:'Service centers',users:usersData.users});
});

module.exports = router;