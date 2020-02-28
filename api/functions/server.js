const express = require('express')
// const functions = require('firebase-functions');
const app = express()
const fs = require('fs')
var apiKeys = [
  'user1laksjdfjaljdflja;sdjfkljasdf'
]
var calendar = require('./moon-sign-calendar')



function getDateData(dateKey) {
  if (dateKey && calendar && calendar[dateKey]) {
    // if found, set moonSign to found sign
    return calendar[dateKey];
  } else {
    return false; // error case
  }
}

function getStartTime(forward) {
  // TODO go back in time for start time
  var i = forward ? 1 : -1;
  let startTime = false;

  while (!startTime) {
    let daysInfo = getDateData(getDateKey(i));
    if (daysInfo.startTime) {
      startTime = daysInfo.startTime;
    }
    if (forward) i++;
    else i--;
  }
  return startTime;
}

function getMoonSign() {
  // base case
  let moonData = {
    sign: 'None',
    startTime: '',
    endTime: ''
  }

  let dateKey = getDateKey(); // yyyy-mm-dd
  todaysInfo = getDateData(dateKey);

  if (!todaysInfo) {
    return moonData; // TODO what to do
  }
  if (todaysInfo.signs.length == 1) {
    moonData.sign = todaysInfo.signs[0];
    // go back in time for start time
    moonData.startTime = getStartTime(false);
    moonData.endTime = getStartTime(true);
  } else {
    var now = new Date();
    var startTime = new Date(todaysInfo.startTime);
    if (now < startTime) {
      moonData.sign = todaysInfo.signs[0]
      moonData.endTime = todaysInfo.startTime;
      moonData.startTime = getStartTime(false);
    } else {
      moonData.sign = todaysInfo.signs[1]
      moonData.startTime = todaysInfo.startTime;
      moonData.endTime = getStartTime(true);
    }
  }
  return moonData;
}

// returns current date like yyyy-mm-dd
function getDateKey(offset) {
  var today = new Date();
  if (offset != null) {
    today.setDate(today.getDate() + offset)
  }
  var dd = today.getDate();
  var mm = today.getMonth() + 1;
  var yyyy = today.getFullYear();
  if (dd < 10) {
    dd = '0' + dd;
  }
  if (mm < 10) {
    mm = '0' + mm;
  }
  return yyyy + '-' + mm + '-' + dd;
}


app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
});

// designed to return the sign of the current moon
app.get('/moon-sign', (req, res) => {
  console.log('/moon-sign');

  // version 1 = return simply the sign as a string
  var moonSign = getMoonSign();

  // return not found or found sign
  return res.json(moonSign);
})

app.get('/moon-data', (req, res) => {
  console.log(req.query)
  if (!apiKeys.includes(req.query.apiKey)) {
    return res.status(400);
  }
  res.send(require('fs').readFileSync('./moon-data.json'))
})

// Add headers
//
// app.listen(8001, _ => {
//   console.log('API running on 8000')
// })

module.exports = app;
