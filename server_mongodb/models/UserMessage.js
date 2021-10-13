const mongoose = require("mongoose");

const UserMessage = mongoose.model(
  "Users",
  mongoose.Schema({
    _id: {
      type: String,
      // type: mongoose.Schema.Types.ObjectId,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    fullName: {
      type: String,
      require: false,
    },
    password: {
      type: String,
      require: true,
    },
    avatarImageURL: {
      type: String,
      require: false,
      default: null,
    },
    createdAt: {
      type: Date,
      default: new Date(),
    },
  })
);

module.exports = UserMessage;
