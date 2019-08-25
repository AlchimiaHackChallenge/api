function handler(Intent) {
  return (req, res, next) => {
    Intent.findOneAndUpdate(
      { s_id: req.params.s_id},
      req.schema,
      { new: true, runValidators: true }
    ).exec()
      .then(update => {
        if (!update) return res.boom.badRequest('Intent not found in Db')
        return res.status(200).jsonp(update)
      })
      .catch(next)
  }
}

module.exports = (router, Intent, validate) => {
  router.put(
    '/intent/:s_id', 
    validate('intent', ['body']), 
    handler(Intent)
  )
}