const express = require('express');
const app = express();
const path = require("path");
const { mongoose } = require("./config/index.js");

app.use(express.json());
app.use(express.urlencoded());

app.use('/api', require('./routes/api'));

app.get("*", async (req, res) => {
    res.sendFile(path.join(__dirname, "./views/public/index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`app listening at http://localhost:${PORT}`);
});
