const SERVER_PORT = 3003

const bodyParser = require('body-parser') // middleware that helps to parse the http body
const express = require('express') // singleton instance
const allowCors = require('./cors')
const server = express()
const queryParser = require('express-query-int')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)
server.use(queryParser())

server.listen(SERVER_PORT, function() {
  console.log(`My Money App API running on port ${SERVER_PORT}`)
})

module.exports = server