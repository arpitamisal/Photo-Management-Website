var express = require('express');
const {isLoggedIn} = require('../middleware/protectors');
const {getRecentPosts, getPostById, getCommentsForPostById} = require('../middleware/posts');
var router = express.Router();
const db = require('../conf/database');
/* GET home page. */

router.get('/', getRecentPosts , function(req, res, next) {
  res.render('index', { title: 'CSC 317 App', name:"[Insert your name here]", css:["stylesheet.css"],
    js:["indexscript.js"]});
});

router.get("/login",function(reg,res){
  res.render('login', {css:["stylesheet.css"]});
});

router.get("/register",function(reg,res){
  res.render('registration', {css:["stylesheet.css"], js:["script.js"]});
});

router.get("/postimage", isLoggedIn, function(reg,res){
  res.render('postimage', {css:["stylesheet.css"]});
});

// router.get("/posts/search", function(req,res){
//   console.log(req.params);
//   res.render('index', { title: 'CSC 317 App', name:"[Insert your name here]", css:["stylesheet.css"],
//   js:["indexscript.js"]});
// });

  


router.get("/posts/:id(\\d+)", getPostById, getCommentsForPostById ,function(req,res){
  console.log(req.params);
  res.render('viewpost', {css:["stylesheet.css"], js:["viewpost.js"]});
});

module.exports = router;
