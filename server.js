const express = require('express');
const app = express();
const path = require("path");
const { mongoose } = require("./config/index.js");

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: true }));

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
    res.header("Access-Control-Allow-Methods", "GET, OPTIONS, POST, DELETE");
    next();
});

app.use('/api', require('./routes/api'));

app.get("*", async (req, res) => {
    res.sendFile(path.join(__dirname, "./views/public/index.html"));
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`);
});
