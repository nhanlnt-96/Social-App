const mongoose = require('mongoose');

const PostMessage = mongoose.model('Posts', mongoose.Schema({
    _id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Likes',
      require: true
    },
    username: {
      type: String,
      require: true
    },
    postText: {
      type: String,
      require: true
    },
    postFile: {
      type: String
    },
    createdAt: {
      type: Date,
      require: true
    },
    UserId: {
      type: String,
      require: true
    }
  })
);

module.exports = PostMessage;