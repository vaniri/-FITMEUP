const mongoose = require('mongoose');

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/fitmeup', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

module.exports = { mongoose };