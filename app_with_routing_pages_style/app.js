const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home');
const userRouter = require('./routes/users');

const app = express();

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname,'public')));
app.use(homeRouter);
app.use('/user',userRouter);
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});
app.listen(4000);
