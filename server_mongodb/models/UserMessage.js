const mongoose = require('mongoose');

const UserMessage = mongoose.model('Users', mongoose.Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      require: true
    },
    email: {
      type: String,
      require: true
    },
    username: {
      type: String,
      require: true
    },
    password: {
      type: String,
      require: true
    },
    // avatarImageURL: String,
    createdAt: {
      type: Date,
      default: new Date()
    }
  })
);

module.exports = UserMessage;
