const express = require('express')
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const User = require("./models/user.js");
const Product = require("./models/product.js");

const Order = require("./models/user.js");
const db = process.env.dburl || "mongodb://127.0.0.1:27017/db";
dotenv.config();
const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect(db).then((res) => {
    console.log("Data base is conneted");
  });
  

app.post("/user",async(req,res)=>{
    const {name,email} = req.body;
    const newUser = new User({name,email});
    await newUser.save();
    console.log(newUser);
})

// 645e2430ecfd1afdc81e8caa

//"645e24a5de68376bc95fa433"

app.post("/product",async(req,res)=>{
    const {title,price} = req.body;
    const newProduct = new Product({title,price});
    await newProduct.save();
    res.status(200).send(newProduct);
})

app.post("/order/buy",async(req,res)=>{
    const {userid,productid} = req.body;
    const user = new mongoose.Types.ObjectId(userid);
    const product = new mongoose.Types.ObjectId(productid);
    const newOrder = new Order({ userdata:user,productdata:product})
    await newOrder.save();
    console.log(newOrder);
})

app.get("/order",async (req,res)=>{
    const orders =await  Order.find({});
    res.status(200).send({orders});
})

app.listen(3000, () => console.log(`App listening on port 3000!`))

