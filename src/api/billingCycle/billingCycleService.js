const BillingCycle = require('./billingCycle')

BillingCycle.methods(['get', 'post', 'put', 'delete'])
BillingCycle.updateOptions({new: true, runValidators: true}) // it forces mongo to return the updated object, and to run the validations

BillingCycle.route('count', (req, res, next) => {
  BillingCycle.count((error, countValue) => {
    if (!!error) {
      res.status(500).json({ errors: [error] })
    } else {
      res.json({ value: countValue })
    }
  })
})

module.exports = BillingCycle