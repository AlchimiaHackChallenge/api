module.exports = (router, Intent, validate) => {
  ['create', 'find', 'update'].forEach(r => require(`./${r}`)(router, Intent, validate))
}