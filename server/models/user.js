const mongoose = require('mongoose');

const schema = mongoose.Schema({
  username: {
    type: String,
    unique: true,
  },
  name: String,
  password: String,
});

const User = new mongoose.model('User', schema);

module.exports = User;