var express = require('express');

var router = express.Router();
const db = require('../database/models')

/* GET home page. */
router.get('/', async function  (req, res, next) {
  res.render('index',{title:"a"});
  // console.log(useres);
  


  // res.render('index', { title: 'Express' });
})

 
module.exports = router;
