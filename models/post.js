const mongoose = require('mongoose');
const { Schema } = mongoose;

const PostSchema = new Schema ({
    title: String,
    body: String,
    images: [String],
    posted: {
        type: Date,
        default: Date.now
      },
    author: { type: Schema.Types.ObjectId, ref: 'User' }
});

const Post = mongoose.model('Post', PostSchema);

module.exports = Post;