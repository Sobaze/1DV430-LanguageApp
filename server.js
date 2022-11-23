
require('dotenv').config()

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const path = require('path')
const passport = require('passport')
const helmet = require('helmet')

const users = require('./routes/users')

const app = express();

app.use(helmet())
// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());
// DB Config
const db = require("./config/keys").mongoURL;
// Connect to MongoDB
mongoose
  .connect(
    process.env.MONGODB_URI || db,
    { useUnifiedTopology:true, useNewUrlParser: true }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

  // Passport middleware
  app.use(passport.initialize())

  // Passport config
  require('./config/passport')(passport)

  // Routes
  app.use('/users', users)

  // Serve our static assets if in production
  if (process.env.NODE_ENV === 'production') {
    // set static folder
    app.use(express.static('reactlangoapp/build'))

    app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'reactlangoapp', 'build', 'index.html'))
    })
  }

const port = process.env.PORT || 5000; // process.env.port is Heroku's port if you choose to deploy the app there
app.listen(port, () => console.log(`Server is up and running on port ${port} !`));

