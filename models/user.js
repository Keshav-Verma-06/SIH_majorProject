const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  aadhaarNumber: { type: String }, // Optional for SAG and Finance Bureau members
  role: { type: String, enum: ['student', 'SAG Bureau', 'Finance Bureau'], default: 'student' },
  documents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Document' }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email', // Use email as the username
});

module.exports = mongoose.model('User', UserSchema);
