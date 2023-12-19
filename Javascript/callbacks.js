// const cart = ["shoes", "pants", "kurta"];
// console.log("ABC");
// setTimeout(() => {
//   console.log("JS");
// }, 5000);
// console.log("DEF");

// api.createOrder(cart, function () {
//   // responsibility of proceed to payment api to make the payment and
//   // call the show order function sent in the arguments
//   api.proceedToPayment(function () {
//     api.showOrderSummary(function () {
//       api.updateWallet();
//     });
//   });
// });
// //trusting create order to call proceedToPayment
// // so this is inversion of control
// api.createOrder(cart, function () {
//   api.proceedToPayment();
// });

// // in this we have to trust on createOrder
// // to call proceedToPayment
// createOrder(cart, function (orderId) {
//   proceedToPayment(orderId);
// });

// // in this we are attaching a callback
// // to promise object so controlling
// // the calling of function

// const promise = createOrder(cart);

// // {data : return by create Order api}
// // {data : undefined -> placeholder}
// // once we have orderDetails

// promise.then(function (orderId) {
//   proceedToPayment(orderId);
// });

// promise -> state and data
// fulfilled pending and rejected
//promise object is immutable, not editable
const GITHUB_API = "https://api.github.com/users/akshaymarch7";
const user = fetch(GITHUB_API);
user.then(function (data) {
  console.log(data);
});

createOrder(cart, function (orderId) {
  proceedToPayment(orderId, function (paymentInfo) {
    showOrderSummary(paymentInfo, function () {
      updateWallet();
    });
  });
});

// promise chaining
// do return so that the next function
// can be called by
// passing arguments
createOrder(cart)
  .then(function (orderId) {
    return proceedToPayment(orderId);
  })
  .then(function (paymentInfo) {
    return showOrderSummary(paymentInfo);
  })
  .then(function (paymentInfo) {
    return updateWallet(paymentInfo);
  });
