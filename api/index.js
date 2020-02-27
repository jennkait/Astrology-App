const express = require('express')
const app = express()
const fs = require('fs')
var apiKeys = [
  'user1laksjdfjaljdflja;sdjfkljasdf'
]
var calendar = require('./moon-sign-calendar')

// returns current date like yyyy-mm-dd
function getDateKey() {
  var today = new Date();
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  console.log('day', dd)
  console.log('month', mm)
  console.log('day', yyyy)
  if (dd < 10) {
    dd = '0' + dd;
  }

  if (mm < 10) {
    mm = '0' + mm;
  }

  return yyyy + '-' + mm + '-' + dd;
}

function getMoonSign(todaysInfo) {
  // example data
  // todaysInfo = {
  //   signs: ['Taurus'],
  //   startTime: ''
  // };
  // returns 'Taurus'

  // base case
  if (todaysInfo.signs.length == 1) {
    return todaysInfo.signs[0]
  }

  // case where more than one
  var now = new Date();
  var startTime = new Date(todaysInfo.startTime);
  if (now < startTime) {
    return todaysInfo.signs[0]
  }
  return todaysInfo.signs[1]
}

// designed to return the sign of the current moon

app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    // res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    // res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.get('/moon-sign', (req, res) => {
  console.log('/moon-sign');
  let dateKey = getDateKey(); // yyyy-mm-dd
  let todaysInfo = {}
  if (calendar && calendar[dateKey]) {
    // if found, set moonSign to found sign
    todaysInfo = calendar[dateKey];
  } else {
    return res.send('Not found')
  }
  // moon sign will look like

  // version 1 = return simply the sign as a string
  var moonSign = getMoonSign(todaysInfo);

  // return not found or found sign
  return res.json({test: moonSign});
})


app.get('/moon-data', (req, res) => {
  console.log(req.query)
  if (!apiKeys.includes(req.query.apiKey)) {
    return res.status(400);
  }

  res.send(require('fs').readFileSync('./moon-data.json'))
})

var cors = require('cors')

// app.use(cors())
// Add headers

app.listen(8001, _ => {
  console.log('API running on 8000')
})
