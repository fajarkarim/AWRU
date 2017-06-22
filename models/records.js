const mongoose = require('mongoose');
const Schema = mongoose.Schema;

var RecordSchema = new Schema({
  category: String,
  action: String
})

var Records = mongoose.model('Record', RecordSchema);

module.exports = Records;
