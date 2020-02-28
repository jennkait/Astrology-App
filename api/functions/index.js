const functions = require('firebase-functions')
const server = require('./server')
const api = functions.runWith({
  memory: "2GB",
  timeoutSeconds: 120
}).https.onRequest(server)

module.exports = {
  api
}
