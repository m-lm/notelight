const express = require("express");
const app = express();
const port = 5005;

app.get("/", (req, res) => {
    res.sendFile("index.html", {root: __dirname});
})

app.listen(port, () => {
    console.log(`Listening on http://localhost:${port}`);
})