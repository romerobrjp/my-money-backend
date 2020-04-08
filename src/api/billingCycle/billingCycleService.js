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

BillingCycle.route('summary', (req, res, next) => {
  BillingCycle.aggregate([
    {
      $project: {
        credit: { $sum: "$credits.value"},
        debt: { $sum: "$debts.value" }
      }
    },
    {
      $group: { 
        _id: null,
        credit_total: { $sum: "$credit" },
        debt_total: { $sum: "$debt" },
      }
    },
    {
      $project: {
        _id: 0,
        credit_total: 1,
        debt_total: 1
      }
    }],
    (error, result) => {
      if (!!error) {
        res.status(500).json({ errors: [error] })
      } else {
        res.json(result[0] || { credit_total: 0, debt_total: 0 })
      }
    }
  )
})

module.exports = BillingCycle