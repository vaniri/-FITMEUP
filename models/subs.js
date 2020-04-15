const mongoose = require ('mongoose');
const { Schema } = mongoose;

const Subschema = new Schema ({
   srcUser: { type: Schema.Types.ObjectId, ref: 'User' },
   tgtUser: { type: Schema.Types.ObjectId, ref: 'User' },
});

const Subs = mongoose.model('Subs', Subschema);

module.exports = Subs;
