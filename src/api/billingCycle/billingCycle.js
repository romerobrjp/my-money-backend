const restful = require('node-restful')
const mongoose = restful.mongoose

const creditSchema = new mongoose.Schema({
  name: { type: String, require: true },
  value: { type: Number, require: true, min: 0 },
})

const debtSchema = new mongoose.Schema({
  name: { type: String, require: true },
  value: { type: Number, require: true, min: 0 },
  status: { type: String, require: false, uppercase: true, enum: ['PAID', 'PENDING', 'SCHEDULED'] }
})

const billingCycleSchema = new mongoose.Schema({
  name: { type: String, require: true },
  month: { type: Number, require: true, min: 1, max: 12 },
  year: { type: Number, require: true, min: 1970, max: 2100 },
  credits: [creditSchema],
  debits: [debtSchema]
})

module.exports = restful.model('BillingCycle', billingCycleSchema)