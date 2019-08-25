module.exports = (Joi, builder, params, config) => {
  const validations = {
    gid: Joi.string(),
    s_id: Joi.string(),
    widget: Joi.object({
      q1: Joi.string(),
      q2: Joi.string(),
      q3: Joi.string(),
      q4: Joi.string(),
    }),
    recommendations: Joi.object({
      r1: Joi.object(),
      r2: Joi.object()
    }),
    offevents: Joi.object({
      seller: Joi.string(),
      pos: Joi.string(),
      touch: Joi.boolean(),
      mount: Joi.boolean()
    }),
    status: Joi.string(),
    name: Joi.string(),
    city: Joi.string(),
    age: Joi.string()
  }
  return builder(validations, params, Joi)
}