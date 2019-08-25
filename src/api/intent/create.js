const moto = require("../../data.json")

function handler(Intent) {
  return (req, res, next) => {
    req.schema.s_id = parseInt(Math.random() * (999999 - 111111) + 111111);
    req.schema.recommendations = { r1: moto.data[0], r2: moto.data[1] }
    Intent.create( req.schema )
      .then(intent => {
        return res.status(201).jsonp(intent)
      })
      .catch(next)
  }
}

module.exports = (router, Intent, validate) => {
  router.post(
    '/intent', 
    validate('intent', ['body']), 
    handler(Intent)
  )
}