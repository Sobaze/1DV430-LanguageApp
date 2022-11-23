/**
 * Mongoose Model for Site User.
 *
 * @author Jonas Nilsson
 * @version 1.0.0
 */
'use strict'

const mongoose = require('mongoose')
mongoose.set('useCreateIndex', true)

// Create a Schema for the Site user.

const siteUserSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    lowercase: true,
    index: {
      unique: true
    }
  },
  password: {
    type: String,
    required: true
  },
})

// Creates the model.
const SiteUser = mongoose.model('users', siteUserSchema)

// Exports.
module.exports = SiteUser
