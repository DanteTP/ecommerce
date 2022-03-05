var express = require('express');
var router = express.Router();
let prodcontroller = require('../controllers/API/productcontroller')


// router.get('/product/search/:categoryId', function(req,res,next){res.send('si')})
router.get('/product/search/:categoryId',prodcontroller.menucatcontent)

router.get('/product/gencatsearch/:generalcategoryId',prodcontroller.menugeneralcatcontent)


module.exports = router;
