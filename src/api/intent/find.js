function handler(Intent) {
  return (req, res, next) => {
    Intent.findOne({ s_id: req.schema.s_id }).exec()
    .then( resurce => {
      return res.status(200).jsonp(resurce)
    })
    .catch (next)
  }
}

module.exports = (router, Intent, validate) => {
  router.get(
    '/intent/:s_id',
    validate('intent', ['body', 'params'], { required: ['s_id'] }),
    handler(Intent)
  )
}