const mongoose = require('mongoose')
mongoose.Promise = global.Promise // forces to use the mongoose to use the Node global Promise API

module.exports = mongoose.connect('mongodb://localhost/mymoney')