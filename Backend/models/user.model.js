const mongoose = require('mongoose');
const bycrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlenght: [3, 'Firstname must be at least 3 characters long'],
    },
    lastname: {
      type: String,
      minlenght: [3, 'Last name must be at least 3 characters long'],
    }
  },
  email: {
    type: String,
    required: true,
    unique: true,
    minlenght: [5, 'Email must be at least 5 characters long'],
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  socketId:{
    type: String,
  },
});

userSchema.methods.generateAuthToken = function() { 
  const token = jwt.sign({ id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
  return token;
};

userSchema.methods.comparePassword = async function(enteredPassword) {
  return await bycrypt.compare(enteredPassword, this.password);
};

userSchema.statics.hashPassword = async function(password) {
  return await bycrypt.hash(password, 10);
}

const userMdoel = mongoose.model('User', userSchema);

module.exports = userMdoel;
