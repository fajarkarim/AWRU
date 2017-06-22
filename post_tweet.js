var OAuth = require('oauth');
require('dotenv').config()

var status = "Hai+%40Andrewenewe+%40zuli_fkr+%40antoni_angga+%40derijimmu+Tolong+Fajar+dia+lagi+dalam+keadaaan+darurat.+OTW+Hospital+%21"

var oauth = new OAuth.OAuth(
  'https://api.twitter.com/oauth/request_token',
  'https://api.twitter.com/oauth/access_token',
  `${process.env.API_KEY}`,
  `${process.env.API_SECRET}`,
  '1.0A',
  null,
  'HMAC-SHA1'
);
oauth.post(
  `https://api.twitter.com/1.1/statuses/update.json?status=${status}`,
  `${process.env.TOKEN}`, //test user token
  `${process.env.TOKEN_SECRET}`, //test user secret
  status,
  "status",
  function (e, data){
    if (e) console.error(e);
    console.log(data);
  });

