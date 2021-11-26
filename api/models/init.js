const mongoose = require('mongoose')

mongoose.Promise = global.Promise

// mongoose.connect(process.env.MONGO_URI, { useMongoClient: true })

// mongooes.connect('mongodb://root:example@mongo:27017/test_my_database?authSource=admin', 
//     { useNewUrlParser: true })
//     .then(() => console.log('Connected to MongoDB...'))
//     .catch(err => console.error('Could not connect to MongoDB...', err));

mongoose.connect('mongodb://root:example@mongo:27017/booking_database?authSource=admin', { useNewUrlParser: true })

  .then(() => {
    console.log('Successfully connected to database')
  })

  .catch(error => {
    console.error('>>>> Error connecting to MongoDB database - error: ', error)
  })

module.exports = mongoose
