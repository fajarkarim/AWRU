const twitter = require('../models/twitter');
var action = {}

action.create = function(req, res){
  let hours = new Date().getHours()
  let minutes = new Date().getMinutes()
  let seconds = new Date().getSeconds()
  let date = `Hari+ini+Jam+${hours}%3A${minutes}%3A${seconds}`
  let status = `${date}+%40Andrewenewe+%40zuli_fkr+%40antoni_angga+%40derijimmu+tolong+fajar+dia+lagi+sekarat.+OTW+Hospital+%21`
  twitter.posting(status, (data)=>{
      res.send({
        msg: 'We are success to add Urgent Status on your Timeline',
        data: data
      })
  })
}


module.exports = action;
