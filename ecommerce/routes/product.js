var express = require('express');
var router = express.Router();

//GET
// Carga pantalla detalle producto
router.get('/detail', function(req, res, next) {
  res.render('productdetail', { title: 'Express' });
})

// Carga pantalla carrita
router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'Express' });
})

// Carga pantalla carga producto
router.get('/new', function(req, res, next) {
  res.render('addprod', { title: 'Express' });
})
// Carga productos luego de búsqueda

// Carga productos por búsqueda en Menú

//POST
// Creacion producto nuevo


// Pago via Paypal o MercadoPago

// Finalización de la compra y creación del pedido

module.exports = router;
