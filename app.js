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

var record = require('./routes/record');
var twitter = require('./routes/twitter');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors());

app.use('/api', record);
app.use('/api/twitter', twitter);

app.listen(3000, ()=>{
  console.log('connected on port 3000');
})

module.exports = app;
