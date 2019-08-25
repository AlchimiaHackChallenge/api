let db = require('./db')
db.dbUri = process.env.DB_DEBUG ? `mongodb://${db.user}:${db.password}@${db.address}:${db.port}/${db.database}`: `mongodb://${db.address}:${db.port}/${db.database}`
module.exports = {
  server: require('./server'),
  db: db,
}