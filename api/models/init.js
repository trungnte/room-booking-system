const mongoose = require('mongoose')

mongoose.Promise = global.Promise
if (process.env.NODE_ENV !== 'production') {
  require('dotenv').config()
}
// mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true })
  .then(() => {
    console.log('Successfully connected to database')
  })

  .catch(error => {
    console.error('>>>> Error connecting to MongoDB database - error: ', error)
  })

module.exports = mongoose
