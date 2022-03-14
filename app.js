const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

const mongodb = 'mongodb+srv://Yineth:Bobitonindo08@yincluster.cggdv.mongodb.net/' +
  'gamerbd?retryWrites=true&w=majority';
mongoose.connect(mongodb, {useNewUrlParser: true, useUnifiedTopology:true})
    .then(() => console.log('MongoDB connected Ome'))
    .catch(err => console.log(err));

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', require('./routes/index'));
app.use('/', require('./routes/gamers'));
app.use('/gamer', require('./routes/create-gamer'));
app.use('/gamer', require('./routes/delete-gamer'));
app.use('/gamer', require('./routes/total-change-gamer'));
app.use('/gamer', require('./routes/partial-change-gamer'));

module.exports = app;
