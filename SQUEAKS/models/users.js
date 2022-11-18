const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  name: {
    required: true,
    type: String,
  }
});

module.exports = mongoose.model("Users", schema);