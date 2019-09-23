//const db = require('../DataBase/db_config.js');
const express = require("express");
const User = require("./userModel.js");
const router = express.Router();
console.log("abc") 

router.get('/' , (req,res) => {
    User.find()
    .then(users => {
        res.status(200).json(users);
    })
}) 

router.get('/:id' , (req,res) => {
    const id = req.params.id;
    User.findById(id)
    .then(user => {
        res.status(200).json(user)
    }) 
    .catch(error => {
        res.status(500).json({error : "Server could not get user"})
    })
})  

router.post('/login' , (req,res) => {
  const {username , password} = req.body;
  User.findBy({username}) 
  .then(user => {
      if(user) {
          res.status(200).json({message : user}) 
      } 
      else {
          res.status(401).json({error : "Invalid Credentials"});
      } 
  }) 
  .catch(error => {
      res.status(500).json({error : "Server Could not log you in"});
  })
}) 

router.post('/register' ,(req,res) => { 
console.log( "hello1");
const user = req.body;  
User.add(user)
.then(newUser => {
    res.status(201).json(newUser);
}) 
.catch(error => { 
    console.log(error)
    res.status(500).json({error : "Could not register  a new user"})
})  
})
 
module.exports = router;