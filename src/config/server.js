const SERVER_PORT = 3003

const bodyParser = require('body-parser') // middleware that helps to parse the http body
const express = require('express') // singleton instance
const server = express()

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(SERVER_PORT, function() {
  console.log(`My Money App API running on port ${SERVER_PORT}`)
})

module.exports = server