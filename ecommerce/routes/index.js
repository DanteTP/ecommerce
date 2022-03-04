var express = require('express');
let auth = require('../middlewares/others/session/cookie')
let db = require("../database/models");
const products = require('../database/models/products');
const pictures = require('../database/models/pictures');
const { Op } = db.Sequelize;


var router = express.Router();

/* GET home page. */
router.get('/', auth, async function  (req, res, next) {

  // let categories = await db.Categories.findAll({where:{id:12},
  //     include:[{
  //       model: db.Products,
  //       as: 'Produtspercategory',
  //       include:[{
  //         model:db.Pictures,
  //         as:'Picturesperproduct'
  //       }]
  //     }]
  //   })
  //   res.send(categories)

    res.render('index',{title:'express',user:req.user})
  
  // console.log(useres);
  


  // res.render('index', { title: 'Express' });
})

 
module.exports = router;
