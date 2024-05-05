const mongoose = require("mongoose");

const cartSchema = mongoose.Schema({
    email: {
        type: String,
        required:true,
    },
    products: Array,
  });
  

module.exports = mongoose.model("Cart", cartSchema);