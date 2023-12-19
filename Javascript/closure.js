function x() {
  var a = 7;
  function y() {
    console.log(a);
  }
  y();
}
x();
//function+lexical scope -> closure

function attachEventListeners(){
  let count = 0;
  document.getElementById('clickMe').addEventListener('click',()=>{
    console.log('Button clicked', ++count);
  })
}
attachEventListeners();

/*
window -> 
setTimeout, Location, DOM APIs, console, location, fetch()

fetch returns a promise
JS Engine + JS Runtime
*/

// blocking the main thread
console.log("Start")
setTimeout(() => {
  console.log("Callback");
}, 5000);
console.log("End");
let startDate = new Date().getTime();
let endDate = startDate;
while(endDate < startDate+10000){
  endDate = new Date().getTime();
}
console.log("While expires")

// Array.prototype -> used to apply method to array like map,filter

