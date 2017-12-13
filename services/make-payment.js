var env = process.env.NODE_ENV || 'development';
var config = require('../config/config')[env];
var paypal = require('paypal-rest-sdk');

paypal.configure(config.paypalPayment);
createPaypalPayment = function(paymentData, callback) {
  var create_payment_json = {
    "intent": "sale",
    "payer": {
      "payment_method": "paypal"
    },
    "redirect_urls": {
      "return_url": "http://localhost:3000/api/success",
      "cancel_url": "http://localhost:3000/api/cancel"
    },
    "transactions": [{
      "item_list": {
          "items": [{
              "name": paymentData.orderId,
              "sku": paymentData.orderId,
              "price": paymentData.amount,
              "currency": paymentData.currencyCode,
              "quantity": 1
            }]
          },
      "amount": {
          "currency": paymentData.currencyCode,
          "total": paymentData.amount
        },
      "description": paymentData.description
    }]
  };

paypal.payment.create(create_payment_json, function (error, payment) {
  console.log('create paypal payment');
  console.log(create_payment_json);
    if (error) {
      console.log('errror');
      console.log(error.response);
      callback(error, payment);
    }else {
      console.log("Create Payment Response");
      console.log(payment);
      callback(error, payment);
     }
  });
}

executePaypalPayment = function(paymentData, callback) {
  const payerId = paymentData.PayerID;
  const paymentId = paymentData.paymentId;

  const execute_payment_json = {
    "payer_id": payerId,
    // "transactions": [{
    //   "amount": {
    //     "currency": "USD",
    //     "totla": "100.00"
    //   }
    // }]
  };

  paypal.payment.execute(paymentId, execute_payment_json, function(err, response) {
    if(err) {
      console.log(err);
      callback(err, response);
    }else {
      console.log(response);
      callback(err, response);
    }
  });
}

module.exports = {
  createPaypalPayment: createPaypalPayment,
  executePaypalPayment: executePaypalPayment
}
