const mongoose = require('mongoose')
mongoose.Promise = global.Promise // forces to use the mongoose to use the Node global Promise API

module.exports = mongoose.connect('mongodb://localhost/mymoney')

mongoose.Error.messages.general.required = "'{PATH}' is mandatory."
mongoose.Error.messages.Number.min = "'{VALUE}' is less than the minimum threshold of '{MIN}'."
mongoose.Error.messages.Number.max = "'{VALUE}' is greater the the maximum threshold of '{MAX}'."
mongoose.Error.messages.String.enum = "'{VALUE}' is not a valid attribute for '{PATH}'."