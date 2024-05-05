const mongoose = require("mongoose");

async function connection() {
  try {
    mongoose.connect("mongodb://localhost:27017/Ecommerse4u", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  } catch (err) {
    console.log(err);
  }
}

module.exports = connection;
