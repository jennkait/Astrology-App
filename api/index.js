const express = require('express')
const app = express()
const fs = require('fs')
var apiKeys = [
  'user1laksjdfjaljdflja;sdjfkljasdf'
]

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

// designed to return the sign of the current moon
app.get('/moon-sign', (req, res) => {
  // console.log(req.query)
  // if (!apiKeys.includes(req.query.apiKey)) {
  //   return res.status(400);
  // }
  let calendar = require('./moon-sign-calendar')
  let dateKey = getDateKey();
  console.log(calendar && calendar[dateKey])
  return res.send(calendar[dateKey] || "Not found")
  res.send(calendar)
})


app.get('/moon-data', (req, res) => {
  console.log(req.query)
  if (!apiKeys.includes(req.query.apiKey)) {
    return res.status(400);
  }

  res.send(require('fs').readFileSync('./moon-data.json'))
})

app.listen(8010)