"use strict";
const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  serial: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true,
    maxLength: 18,
    minLength: 3
  },
  lastname: {
    type: String,
    required: true,
    maxLength: 18,
    minLength: 3
  },
},
{ collection: "users"}
);

const User = mongoose.model('User', userSchema);
module.exports = User;