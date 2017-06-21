const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var RecordSchema = new Schema({
  category: String,
  Action: String
})

var Records = mongoose.model('Record', RecordSchema);

module.exports = Records;
