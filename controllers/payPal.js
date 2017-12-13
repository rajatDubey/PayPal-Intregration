var express = require('express');
var router = express.Router();
var makePaymentservice = require('../services/make-payment');

module.exports = {
  makePayment: makePayment
}

function makePayment(req, res, next){
  console.log(req.body);
  makePaymentservice.createPaypalPayment(req.body , function(err, paydoc){
    if(paydoc){
      return res.status(200)
        .json(paydoc);
    }
    if(err) {
      console.log(err);
      return next(err);
    }
  });
}
