var express	= require('express');
var router 	= express.Router();
var managePay = require('../controllers/payPal');
// router.post('/pay', function(req, res, next) {
//   res.render('pay.ejs');
// });
router.post('/pay', managePay.makePayment);
router.get('/success', function(req, res, next) {
  res.render('sucess.ejs');
});
router.get('/cancel', function(req, res, next) {
  res.render('cancel.ejs');
});
module.exports = router;
