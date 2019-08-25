module.exports = {
  port: process.env.PORT || 3000,
  auth: {
    secret: "pwsIsGood",
    credentialsRequired: false,
    unless: {
      path: [
        "/api/surveys/export"
      ]
    }
  }
}