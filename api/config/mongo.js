const mongoose = require('mongoose')

const dbConnect = () => {
  const DB_URI = process.env.DB_URI
  console.log(DB_URI)
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }, (err, res) => {
    if (!err) {
      console.log('Connected to database ' + DB_URI)
    } else {
      console.log('Database error: ' + err)
    }
  })
}

module.exports = dbConnect
