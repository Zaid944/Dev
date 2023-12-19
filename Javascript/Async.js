// // async function always return a promise
// const p = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("Promise resolving");
//     resolve("Resolved promise");
//   }, 5000);
// });
// // async function getData() {
// //   return p;
// // }
// // const data = getData();
// // console.log(data);
// // data.then((res, rej) => console.log(res));
// //async and await combo are used to handle promises
// // function getData() {
// //   // JS engine will not wait for
// //   // promise to resolve
// //   p.then((res) => console.log(res));
// //   console.log("Hello world");
// // }
// // getData();

// // await only inside async function
// // using async await
// // JS engine (looks like) will wait for the
// // promise to be resolved
// async function handlePromise() {
//   console.log("Bye");
//   const val = await p;
//   console.log("Hello World");
//   console.log(val);
// }
// handlePromise();

// // whenever await is encountered
// // handlePromise will pop from the call stack
// //
// console.log("Breaks");

// // all timers run parallel in JS
const API_URL = "https://api.github.com/users/Zaid";

async function handlePromise() {
  const data = await fetch(API_URL);
  //   fetch() => Response object
  // Response.json() => result
  //   data -> response object
  // const jsonValue = await data.json();
  //   data -> promise, data
  // console.log(jsonValue);
  // fetch -> returns promise and res.json -> again a promise
  try {
    fetch(API_URL)
      .then((res) => res.json())
      .then((val) => console.log(val));
  } catch (err) {
    console.log(err);
  }
}
handlePromise();

// Promise.then/catch async/await -> both are good(async await -> no need for promise chaining)
