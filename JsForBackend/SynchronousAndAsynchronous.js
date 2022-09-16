
// Synchronous 
// Synchronous means We can only exicute a one things at a time
// example : 
console.log("Step Number One");
console.log("Step Number Two");
console.log("Step Number Three");
//   outPut:  Step Number One, Step Number Two, Step Number Three

// Asynchronous 
// Asynchronous Means We can excecute multiple things at a TimeRanges, and you don't have to finish excecuting the current things in order to move on next one

// example : 
console.log("Step Number One");
setTimeout(() => console.log("Step Number Two"), 1000);

console.log("Step Number Three"); 
//  output:   Step Number One, Step Number Two, Step Number Three