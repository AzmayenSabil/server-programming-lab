const userSchema = require('../models/Users')

const postUser = (req, res) => {
    const data = new userSchema({
      name: req.body.name,
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

  module.exports = { 
    postUser
  };