
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const User = require("./models/User.js");

const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect("mongodb+srv://javid:test123@myblog.i6xphk1.mongodb.net/blog")
.then(() => {
    console.log("MY DB CONNECTED")
})

app.get("/test", (req, res) => {
   res.json("Hello im from test server");
})

app.post("/register", async (req, res) => {
    
    const {userName, password} = req.body;
    
    const userDoc = await User.create({userName, password})

    res.json(userDoc);
 })

app.listen(8000, () => {
    console.log("Hello im running in a 8000 PORT")
})



