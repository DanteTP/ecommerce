var express = require('express');
const productcontroller = require('../controllers/productcontroller');
var router = express.Router();
var prodcontroller = require('../controllers/productcontroller')
let auth = require('../middlewares/others/session/cookie')
let uservalidator = require('../middlewares/Validators/usersvalidators')


//GET
// Carga pantalla detalle producto
router.get('/detail/:productId', auth, prodcontroller.proddetail)


// Subcategory content fitlter & view
router.get('/search/:categoryId',auth, prodcontroller.menusubcatcontent)

// General category content fitlter & view
router.get('/gencatsearch/:generalcategoryId',auth, prodcontroller.menugeneralcatcontent)

// General category content fitlter & view
router.get('/seacrhcontent',auth, prodcontroller.searchbarcontent)

// cart view
router.get('/cart',auth,prodcontroller.cartview)

router.get('/cart/login',auth,prodcontroller.cartlogin)

router.post('/cart/checkout',uservalidator.userlogin,prodcontroller.carcheckoutscreen)

router.get('/cart/register',auth,prodcontroller.registercheckoutview)

router.post('/cart/registercheckout',uservalidator.usercreator,prodcontroller.registercheckoutscreen)

router.get('/prueba',auth,function(req,res,next){
    res.render('checkout',{title:'express',user:req.user,errors:'false',screen:'home',usererrors:'false',passerrors:'false',addresserror:'false',data:'false',imageerror:'false'})})




module.exports = router;
