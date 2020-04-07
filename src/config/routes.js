const express = require('express')

module.exports = function(server) {
  // defines the base URL
  const router = express.Router()
  server.use('/api', router)

  const BillingCycle = require('../api/billingCycle/billingCycleService')
  BillingCycle.register(router, '/billingCycles')
}