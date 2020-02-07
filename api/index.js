const express = require('express')
const app = express()
const fs = require('fs')
var apiKeys = [
  'user1laksjdfjaljdflja;sdjfkljasdf'
]

app.get('/moon-sign', (req, res) => {
  console.log(req.query)
  // if (!apiKeys.includes(req.query.apiKey)) {
  //   return res.status(400);
  // }
  let calendar = require('./moon-sign-calendar')

  if (req.query.date) {
    console.log(calendar && calendar[req.query.date])
    return res.send(calendar[req.query.date] || "Not found")
  }
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
