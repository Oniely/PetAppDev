const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, "userId is required from clerk"],
    unique: [true, "userId should be unique"]
  },
  image_url: String
}, { timestamps: true });

module.exports = mongoose.model('User', UserSchema);