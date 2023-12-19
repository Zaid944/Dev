// getName();
// console.log(x);

// console.log(getName);
// var x = 7;

// function getName() {
//   console.log("Hello");
// }
var x = 1;
a();
b();
console.log(x);

function a() {
  var x = 10;
  console.log(x);
}

function b() {
  var x = 100;
  console.log(x);
}

/*
global execution context, memory variable env
x : undefined
a => fn
b => fn

then code execution phase of GEC
x = 1
a() -> new context
x : undefined
code execution
x = 10
log(x)
pop the context

b() -> new context
x : undefined
code execution
x = 100
log(x)
pop the context

log(x) -> x = 1
pop the GEC

window -> given by JS engine => global object
this
GEC, window(global object), this
this === window at global level
window -> addresses the global space
 
JS is loosely typed

whenever lexical environment = lexical env of parent + local memory
scope chain

let and const are hoisted -> but stored in a separate memory space and 
not associated with global object
temporal dead zone -> use of variable to the initialization of variable

*/

{
  // compound statement 
  
}

