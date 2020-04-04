const jwt = require('jsonwebtoken');

const jwtSecret = "yo dawg i herd you like authorization";

function generateToken(userId) {
    return jwt.sign({ userId }, jwtSecret);
}

module.exports = { jwtSecret, generateToken };