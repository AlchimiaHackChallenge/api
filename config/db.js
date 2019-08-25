module.exports = {
  address: '127.0.0.1',
  port: 27017,
  database: 'italika',
  user: process.env.PWS_USER || 'developer',
  password: process.env.PWS_PASS || 'zxc123',
  debug: process.env.DB_DEBUG || true,
  autoIndex: true
}