
const express = require("express");

const app = express();

app.get("/test", (req, res) => {
   res.json("Hello im from test server");
})

app.listen(8000, () => {
    console.log("Hello im running in a 8000 PORT")
})

