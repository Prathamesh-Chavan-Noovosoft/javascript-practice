// Numbers
let a = 1;
let b = 2;
console.log(a + b);

console.log(3 / 2); // 1.5, not 1

// Number literals
console.log(0b111110111); // 503
console.log(0o767); // 503
console.log(0x1f7); // 503
console.log(5.03e2); // 503

// Maths
Math.sin(3.5);
const circumference = 2 * Math.PI * r;
console.log("circumference of the circle " + circumference);

// Strings
console.log("Hello nodejs");

// Characters are just strings with length 1, there isn't a separate character data type
console.log("Hello"[1] === "e"); // true

const age = 25;
console.log(`I am ${age} years old.`); // Template literal
