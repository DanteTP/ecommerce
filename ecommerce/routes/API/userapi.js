var express = require('express');
var router = express.Router();
let usercontroller = require('../../controllers/API/usercontroller')

router.get('/user/address/:addresid',usercontroller.checkoutaddress)



module.exports = router;