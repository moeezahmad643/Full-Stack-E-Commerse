const mongoose = require("mongoose");

const productSchema = mongoose.Schema({
  id: {
    type:Number,
    required: true,
  },
  title: {
    type:String,
    required: true,
  },

  price: {
    type:Number,
    required: true,
  },

  description: {
    type:String,
    required: true,
  },

  category: {
    type:String,
    required: true,
  },

  image: {
    type:String,
    required: true,
  },

  rating: Object,

  sizes: {
    type:Array,
    required: true,
  },

  colors: {
    type:Array,
    required: true,
  },
});


module.export = mongoose.model("product", productSchema);