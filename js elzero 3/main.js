/* // Replace ? With Arithmetic Operators
console.log(10 * 20 - 15% 3 + 190 + 10 - 400); // 0

 */
/* let num = 3;

// Solution One
console.log(num+num); // 6

// Solution Two
console.log(num*num-num); // 6

// Soultion Three
console.log(num*num*num/num-num); // 6

// Soultion Four
console.log(num+num+num-num); // 6

// Solution Five
console.log(num*(num-true)); // 6

// Solution Six
console.log(num+num-false); // 6

 */


let num = "10";

// Solution One
console.log(Number(num) + Number(num)); // 20

// Solution Two
console.log(+num+ +num); // 20

// Solution Three
console.log(+num * (true+true)); // 20

// Solution Four
console.log(++num + --num - true); // 20



/* let points = 10;

points+=true + true + true 

console.log(points); // 13

points-=true + true + true + true + true

console.log(points); // 8; */

/* 
let a = 10;
let b = "20";
let c = 80;

console.log(++a + +b++ + +c++ - +a++);
console.log(++a + -b + +c++ - -a++ + +a);
console.log(--c + +b + --a * +b++ - +b * a + --a - +true); */


let d = "-100";
let e = "20";
let f = 30;
let g = true;

console.log(-d * +e ); // 2000
console.log(++e*++g  + -d + ++f); // 173
