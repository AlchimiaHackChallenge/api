let db = require('./db')
//db.dbUri = `mongodb://${db.user}:${db.password}@${db.address}:${db.port}/${db.database}`
db.dbUri = `mongodb://${db.address}:${db.port}/${db.database}`
module.exports = {
  server: require('./server'),
  db: db,
}