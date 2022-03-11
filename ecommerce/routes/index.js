var express = require('express');
let auth = require('../middlewares/others/session/cookie')
let db = require("../database/models");
const products = require('../database/models/products');
const pictures = require('../database/models/pictures');
const productcontroller = require('../controllers/productcontroller');
const { Op } = db.Sequelize;


var router = express.Router();

/* GET home page. */
router.get('/', auth, productcontroller.home)



 
module.exports = router;
