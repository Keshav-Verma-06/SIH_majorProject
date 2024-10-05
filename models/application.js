const mongoose = require('mongoose');

const ApplicationSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  documents: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Document', required: true }],
  status: { type: String, default: 'submitted' }, // e.g., submitted, verified, approved, rejected
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Application', ApplicationSchema);
