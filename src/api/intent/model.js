module.exports = (mongoose) => {
  const intentSchema = new mongoose.Schema({
    gid: String, //Google ID
    s_id: String, //Short ID
    widget: {
      q1: String, // 
      q2: String, // 
      q3: String, // 
      q4: String, //
    },
    recommendations: {
      r1: {}, // 
      r2: {}, // 
    },
    offevents: {
      seller: String,
      pos: String,
      touch: Boolean,
      mount: Boolean
    },
    status: String,
    name: String,
    city: String,
    age: String,
  }, { strict: false, timestamps: true })
  return mongoose.model('intent', intentSchema)
}
