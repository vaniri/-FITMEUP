const mongoose = require ('mongoose');
const { Schema } = mongoose;

const LikeSchema = new Schema ({
    type: String,
    author: { type: Schema.Types.ObjectId, ref: 'User' },
    postItem: { type: Schema.Types.ObjectId, ref: 'Post' }
});

LikeSchema.index({"type": 1, "author": 1, "postItem": 1}, {unique: true});

const Likes = mongoose.model('Like', LikeSchema);

module.exports = Likes;
