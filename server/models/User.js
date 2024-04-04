const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: Buffer
});

UserSchema.statics.isThisEmailInUse = async function(email) {
  if (!email) throw new Error('Invalid Email');

  try {
    const user = await this.findOne({ email });
    if (user) return true;

    return false;
  } catch (error) {
    console.log(`Error in isThisEmailInUse: ${error.message}`);
    return false;
  }
}

module.exports = mongoose.model('User', UserSchema);