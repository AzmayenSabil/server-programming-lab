const messageSchema = require("../models/messages");
const userSchema  = require("../models/Users");

const getMessageList = async (req, res) => {
  let data = [];
  let data2 = []
  let messages = [];
  let users = []
  try {
    data = await messageSchema.find();
    data2 = await userSchema.find();
    //console.log(data);
    data.forEach((item) => {
      messages.push({ sender: item.sender, receiver: item.receiver, text: item.text });
    });
    data2.forEach((item) => {
      users.push({ name: item.name});
    });
  } catch (error) {
    console.log(error);
  } finally {
    res.render("home", { messages: messages, users: users });
  }
};

const getMessage = async (req, res) => {
  let data = [];
  //let data2 = []
  let messages = [];
  let users = []
  try {
    data = await messageSchema.find({receiver: req.body.user});
    //data2 = await userSchema.find();
    //console.log(data);
    data.forEach((item) => {
      messages.push({ sender: item.sender, receiver: item.receiver, text: item.text });
      users.push({name: item.name})
    });
    // data2.forEach((item) => {
    //   users.push({ name: item.name});
    // });
  } catch (error) {
    console.log(error);
  } finally {
    res.render("home", { messages: messages, users: users });
  }
};

const postMessage = (req, res) => {
  const data = new messageSchema({
    sender: req.body.sender,
    receiver: req.body.receiver,
    text: req.body.text,
  });
  data
    .save()
    .then(() => {
      console.log("Data Saved Successfully!");
    })
    .catch((error) => {
      console.log(error);
    })
    .finally(() => {
      res.redirect('/');
    });
};
  
module.exports = { getMessageList, postMessage, getMessage };