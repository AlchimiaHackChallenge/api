const validate = require('../schemas')

module.exports = (router, mongoose) => {
  
  //Models
  const Intent = require('./intent/model')(mongoose)
  
  //Routers
  
  require('./intent')(router, Intent, validate)
}