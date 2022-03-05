var express = require('express');
var router = express.Router();
var prodcontroller = require('../controllers/productcontroller')
let auth = require('../middlewares/others/session/cookie')

//GET
// Carga pantalla detalle producto
router.get('/detail/:productId', auth, prodcontroller.proddetail)

// Carga pantalla carrita
router.get('/cart', function(req, res, next) {
res.render('cart', { title: 'Express',user:''});
})

// Subcategory content fitlter & view
router.get('/search/:categoryId',auth, prodcontroller.menusubcatcontent)

// General category content fitlter & view
router.get('/gencatsearch/:generalcategoryId',auth, prodcontroller.menugeneralcatcontent)







// Carga pantalla carga producto
router.get('/new', function(req, res, next) {
  res.render('addprod', { title: 'Express',user:''});
})
// Carga productos luego de búsqueda

// Carga productos por búsqueda en Menú

//POST
// Creacion producto nuevo


// Pago via Paypal o MercadoPago

// Finalización de la compra y creación del pedido

router.get('/search', function(req, res, next) {
  res.render('searchcontent', { title: 'Express',user:''  });
})


module.exports = router;
