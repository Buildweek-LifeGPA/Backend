const express = require("express");
const User = require("../models/user-model");
const router = express.Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secret = require("../../config/jwt_secret.js");
const restricted = require("../middleware/middleware.js");
// router.get("/", (req, res) => {
//   User.find().then(users => {
//     res.status(200).json(users);
//   });
// });

// router.get("/:id", (req, res) => {
//   const id = req.params.id;
//   User.findById(id)
//     .then(user => {
//       res.status(200).json(user);
//     })
//     .catch(error => {
//       res.status(500).json({ error: "Server could not get user" });
//     });
// });

router.post("/login", restricted.validateUser ,(req, res) => {
  const { username, password } = req.body; 
  
  User.findBy({username}).first() 
    .then(user => {  
      console.log(user)
     // const authenticate = bcrypt.compareSync(password , user.password); 
      if (user && bcrypt.compareSync(password , user.password)) { 
        const token = genreateToken(user); 
        res.status(200).json({token , id: user.id}); 
        console.log({ id: user.id});
      } else {
        res.status(401).json({ error: "Invalid Credentials" });
      }
    })
    // .catch(error => {
    //   res.status(500).json({ error: "Server Could not log you in" , error });
    // });
});

router.post("/register", (req, res) => {
  const {username , password} = req.body;  
  const hash = bcrypt.hashSync(password , 12);

  User.add({username , password: hash})
    .then(newUser => {
      res.status(201).json(newUser);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ error: "Could not register a new user" });
    });
}); 

// Genreate Token 

function genreateToken(user) { 
  const payload = {
    sub: user.id,
    username: user.username
  };
  const options = {
    expiresIn: "1d"
  }; 
  return jwt.sign(payload, secret.jwtSecret, options);
} 
module.exports = router;
