const cart = ["shoes", "pants", "kurta"];
// createOrder(cart)
//   .then(function (orderId) {
//     console.log(orderId);
//     return orderId;
//     // proceedToPayment(orderId);
//   })
//   .catch(function (err) {
//     //now this is only concerned for the above
//     // then only
//     console.log(err.message);
//   })
//   .then(function (orderId) {
//     return proceedToPayment(orderId);
//   })
//   .then(function (paymentInfo) {
//     console.log(paymentInfo);
//   })
//   .catch(function (err) {
//     //catch will handle any error in the promise chain
//     console.log(err.message);
//   });

// //producer
// function createOrder(cart) {
//   const pr = new Promise(function (resolve, reject) {
//     // create order
//     // validate cart
//     // orderId
//     if (!validateCart(cart)) {
//       const err = new Error("Cart not valid");
//       reject(err);
//     }
//     // logic to create order
//     const orderId = "12345";
//     if (orderId) {
//       setTimeout(() => {
//         resolve(orderId);
//       }, 5000);
//     }
//   });
//   return pr;
// }

// function proceedToPayment(orderId) {
//   /////
//   return new Promise(function (resolve, reject) {
//     resolve("Payment Successful");
//   });
// }

// function validateCart(cart) {
//   return false;
// }

// createOrder;
// proceedToPayment;
// showOrderSummary;
// updateWallet;

createOrder(cart)
  .then((orderId) => {
    console.log(orderId);
    return proceedToPayment(orderId);
  })
  .then((paymentInfo) => {
    console.log(paymentInfo);
    return showOrderSummary(paymentInfo);
  })
  .then((walletId) => {
    console.log(walletId);
    updateWallet(walletId);
  })
  .catch((err) => {
    console.log("Error for all", err.message);
  });

function createOrder(cart) {
  return new Promise((resolve, reject) => {
    if (cart.length > 0) {
      resolve("1234");
    } else {
      reject(new Error("Empty Cart"));
    }
  });
}
function proceedToPayment(orderId) {
  return new Promise((resolve, reject) => {
    if (orderId < 0) {
      reject(new Error("Order Id can't be negative"));
    } else {
      resolve({
        shoes: "200",
        pants: "300",
        kurta: "500",
      });
    }
  });
}
function showOrderSummary(paymentInfo) {
  return new Promise((resolve, reject) => {
    resolve("2345");
  });
}
function updateWallet(walletId) {
  console.log("I donot return a promise");
}
