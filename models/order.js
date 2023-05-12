const mongoose = require("mongoose");
const { Schema } = mongoose;
const User = require("./user");
const Product = require("./product")

const OrderSchema = new Schema({
    userdata: { type: mongoose.ObjectId, ref: User },
    productdata:{ type: mongoose.ObjectId, ref: Product }
})

module.exports = mongoose.model('Order', OrderSchema);