const User = require('../models/userDetails')

const getHome = (req, res) => {
  res.render('index', { title: 'Home' });
};

const getLogin = (req, res) => {
  res.render('login', { title: 'Login' });
};

const getRegister = (req, res) => {
  res.render('register', { title: 'Register' });
};

const postLogin = (req, res) => {
  console.log(req.user);
}

const postRegister = (req, res) => {
  console.log(req.user);
  User.register(new User({ username: req.body.username }), req.body.password, function (err, user) {
      if (err) {
        res.json({ success: false, message: "Your account could not be saved. Error: " + err });
      }
      else{
        res.redirect('/login')
      }
  });
}

const getDashboard = (req, res) =>{
  res.render('dashboard', { title: 'Dashboard' })
}

const logOut = (req, res)=>{
  req.logout(()=>{
  console.log("Logging out!")
  });
  res.redirect('/');
}



module.exports = { getHome, getLogin, getRegister, postLogin, postRegister, getDashboard, logOut };
