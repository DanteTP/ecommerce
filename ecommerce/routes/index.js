var express = require('express');
let auth = require('../middlewares/others/session/cookie')

var router = express.Router();
const db = require('../database/models')

/* GET home page. */
router.get('/', auth, async function  (req, res, next) {
  console.log(req.user);
    res.render('index',{title:'express',user:req.user})
  
  // console.log(useres);
  


  // res.render('index', { title: 'Express' });
})

 
module.exports = router;
