const builder = require('./builder')
const config = require('../../config')
let Joi = require('joi')
Joi.objectId = require('joi-objectid')(Joi)

module.exports = (name, getData, params = {}, study = false) => {
  return (req, res, next) => {
    let requestData = getData.reduce((before, field) => {
      return Object.assign(before, req[field])
    }, {})
    const schema = require(`./${name}`)(Joi, builder, params, config)
    Joi.validate(requestData, schema, { abortEarly: false, allowUnknown: name === 'survey' || name === 'studies' })
      .then(payload => {
        if (study) {
          req.config = payload
          delete req.query.studyName
        }
        else {
          req.schema = payload
        }
        return next()
      }).catch(next)
  }
}