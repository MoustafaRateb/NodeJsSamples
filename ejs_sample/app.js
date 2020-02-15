const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const homeRouter = require('./routes/index');
const usersRouter = require("./routes/users");

const app = express();
app.set("view engine","ejs");
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.urlencoded({extended:false}));
app.use(homeRouter);
app.use('/user',usersRouter);
app.listen(4000);

// const usersData = require('./data/usersData');

// usersData.users.push({userName:'m',password:'n'});
// usersData.users.push({userName:'m',password:'g'});
// usersData.users.push({userName:'a',password:'b'});
// console.log(usersData.users);
// console.log(usersData.isValidUser({userName:'m',password:'g'}));