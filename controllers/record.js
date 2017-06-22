const record = require('../models/records');
var methods = {}

methods.show = function(req, res){
  record.find({}, (err, result)=>{
    if(err){
      res.status(400).send({
        msg: 'Something wrong while get data',
        error: err
      })
    } else {
      res.send(result)
    }
  })
}

methods.add = function(req, res){
  let body = req.body
  record.create(body, (err, result)=>{
    if(err){
      res.status(400).send({
        msg: ' Something wrong while creating data',
        error: err
      })
    } else {
      res.send({
        msg: 'success to add new data',
        data: result
      })
    }
  })
}

methods.destroy = function(req, res){
  record.findByIdAndRemove(req.params.id, (err, result)=>{
    if(err){
      res.status(400).send({
        msg: 'Something wrong while delete data',
        error: err
      })
    } else {
      res.send({
        msg: 'success to delete data',
        data: result
      })
    }
  })
}

module.exports = methods;
