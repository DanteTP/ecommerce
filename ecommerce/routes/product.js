var express = require('express');
var router = express.Router();

//GET
// Carga pantalla detalle producto
router.get('/detail', function(req, res, next) {
  res.render('productdetail', { title: 'Express',user:'' });
})

// Carga pantalla carrita
router.get('/cart', function(req, res, next) {
  res.render('cart', { title: 'Express',user:''  });
})

// Carga pantalla carga producto
router.get('/new', function(req, res, next) {
  res.render('addprod', { title: 'Express',user:''  });
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
