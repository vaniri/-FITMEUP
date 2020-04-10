const mongoose = require('mongoose');
const { Schema } = mongoose;

const CommentSchema = new Schema({
    body: "String",
    posted: {
        type: Date,
        default: Date.now
    },
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    postItem: { type: Schema.Types.ObjectId, ref: 'Post' }
});

const Comment = mongoose.model('Comment', CommentSchema);

module.exports = Comment;