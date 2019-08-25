module.exports = (validations, params, Joi) => {
  let newValidationSchema = validations
  if (params.forbidden && params.forbidden.length > 0) {
    params.forbidden.forEach(e => newValidationSchema[e] = newValidationSchema[e].concat(Joi.forbidden()))
  }
  if (params.required && params.required.length > 0) {
    params.required.forEach(e => newValidationSchema[e] = newValidationSchema[e].concat(Joi.required()))
  }
  if (params.excluded && params.excluded.length > 0) {
    params.excluded.forEach(e => delete newValidationSchema[e])
  }
  if (params.include && params.include.length > 0) {
    let newValidationSchemaAux = {}
    params.include.forEach(e => newValidationSchemaAux[e] = newValidationSchema[e])
    newValidationSchema = newValidationSchemaAux
  }
  return Joi.object().keys(newValidationSchema).required()
}
