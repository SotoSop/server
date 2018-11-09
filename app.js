//express
const express = require('express')
const app = express()
const port = 3000
const mainRoute = require('./routes/image.js')
//mongoose & env
const mongoose = require('mongoose')
// const mongodbUri = 'mongodb://@ds155653.mlab.com:55653/sotosop'
const mongodbUri = 'mongodb://localhost:27017/sotosop'
require('dotenv').config()

//other
var cors = require('cors')
app.use(cors())

//parser
app.use(express.json({ limit: '50mb' }))
app.use(express.urlencoded({ extended: false }))

//connect mongoose
// mongoose.connect(mongodbUri,
//     {
//       useNewUrlParser: true,
//       auth: {
//         user: process.env.mlab_user,
//         password: process.env.mlab_password
//       }
//     });
mongoose.connect(mongodbUri, ({useNewUrlParser: true}));
  const db = mongoose.connection;
  db.on('error', console.error.bind(console, 'connection error:'));
  db.once('open', function() {
    console.log(('You are Mongected'));
  });

//path
app.use('/', mainRoute)

app.listen(port, () => {
    console.log(`Listening to port ${port}`);
})