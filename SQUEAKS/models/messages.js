const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  sender: {
    required: true,
    type: String,
  },
  receiver: {
    required: true,
    type: String,
  },
  text: {
    required: true,
    type: String,
  }
});

module.exports = mongoose.model("Messages", schema);