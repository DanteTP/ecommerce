var express = require('express');
var router = express.Router();
let prodcontroller = require('../../controllers/API/productcontroller')

// router.get('/product/search/:categoryId', function(req,res,next){res.send('si')})
router.get('/product/search/:categoryId',prodcontroller.menucatcontent)

router.get('/product/gencatsearch/:generalcategoryId',prodcontroller.menugeneralcatcontent)

router.get('/product/searchbar/:searchvalue', prodcontroller.searchbar)

router.get('/product/addcart/:ProdId', prodcontroller.cartadd)

router.post('/product/create-order',prodcontroller.cartproductreview)

router.post('/product/capture/:OrderId',prodcontroller.paypalcapture)


module.exports = router;
