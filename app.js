const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

var url = 'mongodb://localhost/awru'
mongoose.connect(url, (err, result)=>{
  if(err){
    console.log('something wrong while connect to database', err);
  }
  console.log('database connected!');
})

var record = require('../routes/record');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/api', record);

module.exports = app;
