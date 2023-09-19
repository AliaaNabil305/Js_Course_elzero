/* // Examples
console.log(100_000); // 100000
console.log(100000); // 100000
console.log(5e4 + 5e4); // 100000

// Your Solutions
console.log(100000+0); // 100000
console.log(100001-1); // 100000
console.log(100*1000); // 100000
console.log(Math.floor(100000.1)); // 100000
console.log(Math.ceil(99999.5)); // 100000
console.log(Math.pow(10,5)); // 100000
console.log(Math.trunc(100000.2)); // 100000
console.log(parseInt(100000.354)); // 100000
console.log(Number("100000")); // 100000
console.log(10**5); // 100000 */


// console.log(-Number.MIN_SAFE_INTEGER); // 9007199254740991

// console.log(Number.MAX_SAFE_INTEGER + Number.MIN_SAFE_INTEGER +(true + true + true + true) ** (true + true));

/* 
let myVar = "100.56789 Views";

console.log(parseInt(myVar)); // 100
console.log(parseFloat(myVar).toFixed(2)); // 100.57 */
/* 
let num = 10;

console.log(Number(Number.isInteger(num))+1); // 2
 */


/* let flt = 10.4;

console.log(parseInt(flt)); // 10
console.log(Math.floor(flt)); // 10
console.log(Math.trunc(flt)); // 10
console.log(Math.round(flt)); // 10
console.log(+flt.toFixed()); // 10 */


// console.log(Math.floor(Math.random() * 5)); // 0 || 1 || 2 || 3 || 4

//challenge
/* 
let a = 100;
let b = 2_00.5;
let c = 1e2;
let d = 2.4;

// Find Smallest Number In All Variables And Return Integer
console.log(parseInt(Math.min(a,b,c,d))); // 2

// Use Variables a + d One Time To Get The Needed Output
console.log(a**Math.round(d)); // 10000

// Get Integer "2" From d Variable With 4 Methods
console.log(Math.round(d)); // 2
console.log(parseInt(d)); // 2
console.log(Math.trunc(d)); // 2
console.log(Math.floor(d)); // 2

// Use Variables b + d To Get This Valus
console.log((Math.trunc(b)/Math.ceil(d)).toFixed(2)); // 66.67 => String
console.log(Math.ceil((Math.trunc(b)/Math.ceil(d)))); // 67 => Number */

/* 
let userName = "Elzero";
console.log(userName.charAt(0).toLowerCase()); // e
console.log(userName.substring(0,1).toLowerCase()); // e
console.log(userName[0].toLowerCase()); // e
console.log(userName.slice(0,1).toLowerCase()); // e
console.log(userName.substr(0,1).toLowerCase()); // e
console.log(userName.charAt(0).toLowerCase().repeat(3)); // eee */

/* 
let word = "Elzero";
let letterZ = "z";
let letterE = "e";
let letterO = "O";

console.log(word.includes(letterZ)); // True
console.log(word.startsWith(letterE.toUpperCase())); // True
console.log(word.endsWith(letterO.toLowerCase())); // True */


//challenge

let a = "Elzero Web School";

// Include This Method In Your Solution [slice, charAt]
console.log(a.slice(a.indexOf('z'), a.search(a.charAt(6)))); // Zero


// 8 H
console.log(a.charAt(a.indexOf("h")).repeat(8).toLocaleUpperCase()); // HHHHHHHH

// Return Array
console.log(a.slice(0, a.indexOf('o') + 1).split()); // ["Elzero"]


// Use Only "substr" Method + Template Literals In Your Solution
console.log(a.substr(0, a.indexOf('o') + 1) +` `+ a.substr(a.indexOf('S'))); // Elzero School

// Solution Must Be Dynamic Because String May Changes
console.log(a.charAt(0).toLocaleLowerCase()+a.substring(1)); // eLZERO WEB SCHOOl