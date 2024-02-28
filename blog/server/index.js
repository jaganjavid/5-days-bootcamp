
const express = require("express");
const cors = require("cors");
const mongoose = require('mongoose');
const User = require("./models/User.js");
const Post = require("./models/Post.js");
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');
const multer  = require('multer');
const upload = multer({ dest: 'uploads/' });
var fs = require('fs');

const app = express();

app.use(cors({credentials:true, origin:"http://localhost:3000"}));
app.use(express.json());
app.use(cookieParser())


const salt = bcrypt.genSaltSync(10);
const secret = "kajahs76217jnbsa97638a8623gv";

mongoose.connect("mongodb+srv://javid:12345@rl.b1i6whi.mongodb.net/blog")
    .then(() => {
        console.log("MY DB CONNECTED")
    })

app.get("/test", (req, res) => {
    res.json("Hello im from test server");
})

app.post("/register", async (req, res) => {

    const { userName, password } = req.body;

    try {

        const userDoc = await User.create({
            userName,
            password: bcrypt.hashSync(password, salt)
        }
        );
        res.json(userDoc);
    } catch (e) {
       console.log(e);
       res.status(400).json(e);
    }
})


app.post("/login", async (req, res) => {

    const { userName, password } = req.body;

    const userDoc = await User.findOne({userName});
   
    
   if(userDoc){
        
    const passwordOk = bcrypt.compareSync(password, userDoc.password);

        if(passwordOk){
            const  token = jwt.sign({ userName, id:userDoc._id }, secret, {}, (err, token) => {
                if(err) throw err;

                res.cookie("token", token).json({
                    id:userDoc._id,
                    userName
                });
            });
        } else {
            res.status(400).json("Wrong credentials");
        }
   } else{
      res.status(400).json("No User");
   }
})

app.get("/profile", (req, res) => {
    const {token} = req.cookies;

    jwt.verify(token, secret, {} , (err, info) => {
        if(err) throw err;

        res.json(info);
    })
})

app.post("/logout", (req, res) => {
   res.cookie("token", "").json("ok");
})

app.post("/post", upload.single("file"), async(req, res) => {

    const {originalname,path} = req.file;


    const parts = originalname.split(".");

    const ext = parts[parts.length - 1];

    const newName = path+"."+ext;

    fs.renameSync(path,newName);

    const {token} = req.cookies;

    jwt.verify(token, secret, {} , async(err, info) => {
        if(err) throw err;

        const {title, content} = req.body;

        const postDoc = await Post.create({
            title,
            content,
            cover:newName,
            author:info.id
        })
    
        res.json(postDoc);
    })

 
})

app.get("/post", async(req, res) => {
    const posts = await Post.find();
    res.json(posts)
})

app.listen(8000, () => {
    console.log("Hello im running in a 8000 PORT")
})



