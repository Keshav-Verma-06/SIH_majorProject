const mongoose = require('mongoose');

const DocumentSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', },
  type: { type: String, },
  url: { type: String, },
  createdAt: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Document', DocumentSchema);
