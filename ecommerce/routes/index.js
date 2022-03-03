var express = require('express');
let auth = require('../middlewares/others/session/cookie')
let db = require("../database/models");
const products = require('../database/models/products');
const { Op } = db.Sequelize;


var router = express.Router();

/* GET home page. */
router.get('/', auth, async function  (req, res, next) {
  console.log(req.user);
  let data = []
    let categories = await db.Categories.findAll({where:{Subcategory:2},include:['Produtspercategory']})
    res.send(categories)

    // res.render('index',{title:'express',user:req.user})
  
  // console.log(useres);
  


  // res.render('index', { title: 'Express' });
})

 
module.exports = router;
