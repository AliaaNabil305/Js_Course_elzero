/* console.log(100 == "100"); // true
console.log(100 != 1000); // true
console.log(110 > 100 > 10 < 20); // true
console.log(-10 == "-10"); // true
console.log(- -50 > +"-40"); // true
console.log(- 10 < -"-40"); // true
console.log(+ "10" === 10); // true
console.log(! 20 == false); // true */

/* 
let num1 = 10;
let num2 = 20;

console.log(num1 != num2); // true
console.log(num1 < num2); // true
console.log(num1 !== num2); // true
console.log(num2 > num1); // true
console.log(num1 <= num2); // true
console.log(num2 >= num1); // true

 */
/* 
let a = 20;
let b = 30;
let c = 10;

console.log(a < b && a > c || a > b); // true
console.log(a < b || a < c); // true
console.log(!(a > b) && !(a > b) && !(a < c) && !(a < c)); // true */

/* // Test Case 1
// let num = 9; // "009"

// Test Case 2
let num = 20; // "020"

// Test Case 3
// let num = 110; // "110" 

if(num<10){
    console.log("00"+num)
} 
else if(num<100 && num>10){
    console.log("0"+num)
}
else if(num>=100){
    console.log(num)
} */

/* 
let num1 = 9;
let str = "9";
let str2 = "20";

// Output

if (num1===str){
    console.log("{num1} Is The Same Value As {str}");
}
else if(num1===str && typeof num1 !== typeof str){
    console.log("{num1} Is The Same Value As {str} But Not The Same Type");
}
else if(num1!==str2 && typeof num1 !== typeof str){
    console.log("{num1} Is Not The Same Value Or The Same Type As {str2}");
}
else if(str!=str2){
    console.log("{str} Is The Same Type As {str2} But Not The Same Value");
}

 */

/* 
let num1 = 10;
let num2 = 30;
let num3 = "30";

// Needed Output
if(+num3 > num1 && typeof num3 != typeof num2){
    console.log("30 Is Larger Than 10 And Type string Not The Same Type As number")
}
if(+num3 > num1 && typeof num3 != typeof num2 && num3 === num2){
    console.log("30 Is Larger Than 10 And Value Is The Same As 30 And Type string Not The Same Type As number")
}
if(num3 !== num1 && typeof num3 != typeof num2){
    console.log("{num3} Value And Type Is Not The Same As {num1} And Type Is Not The Same As {num2}")
}
 */

// // Edit What You Want Here

// let num1 = 17;
// let num2 = 10;
// let num3 = 17;
// let num4 = 45;

// /*
//   Do Not Edit Below This Line
//   Needed Output
//   True 7 Times
// */

// // Condition 1

// if (num1 > num2) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 2

// if (num1 > num2 && num1 < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 3

// if (num1 > num2 && num1 === num3) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 4

// if ((num1 + num2) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 5

// if ((num1 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 6

// if ((num1 + num2 + num3) < num4) {
//   console.log("True");
// } else {
//   console.log("False");
// }

// // Condition 7

// if (num4 - (num1 + num3) + num2 === 21) {
//   console.log("True");
// } else {
//   console.log("False");
// }
/* 
// let day = "   friday  ";
// You Need To Remove Spaces And Make First Letter Capital => Friday

// let day = "Friday";
// let day = "Saturday";
// let day = "Sunday";
// // Output => "No Appointments Available"

// let day = "Monday";
// let day = "Thursday";
// // Output => "From 10:00 AM To 5:00 PM"

// let day = "Tuesday";
// // Output => "From 10:00 AM To 6:00 PM"

// let day = "Wednesday";
// // Output => "From 10:00 AM To 7:00 PM"

// let day = "World";
// // Output => "Its Not A Valid Day"

switch (day.trim().charAt(0).toUpperCase() + day.trim().slice(1))
{
    case "Friday":
        console.log("No Appointments Available")
        break;

    case  "Saturday" :
        console.log("No Appointments Available")
        break;

    case  "Sunday" :
        console.log("No Appointments Available")
        break; 
    
    case  "Monday" :
        console.log("From 10:00 AM To 5:00 PM")
        break; 

    case  "Thursday" :
        console.log("From 10:00 AM To 5:00 PM")
        break;

    case  "Tuesday" :
        console.log("From 10:00 AM To 6:00 PM")
        break;


    case  "Wednesday" :
        console.log("From 10:00 AM To 7:00 PM")
        break;

    default:
        console.log('its not a valid day')
}
 */


/* 
//challenge

let st = "Elzero Web School";
if ((st.charAt(st.indexOf('W')).toLowerCase()) ||
    st.charAt(st.indexOf('w')) === "w" === "w") {
    console.log("Good");
}

if (+st !== "string") {
    console.log("Good");
} 

if (!(st === "number")) {
    console.log("Good");
}


if (st.slice(0,6).repeat(2) === "ElzeroElzero") {
    console.log("Good");
} */


//challenge
/* 
let job = "Support";
let salary = 0;

switch (job)
{
  case "Manager":
     salary = 8000;
     break;

   case "IT" :
   case "Support":
        salary = 6000;
        break;
    case "Developer":
    case "Designer":
        salary = 7000;
        break;

    default:    
      salary = 4000;
}
console.log(salary)
 */

let holidays = 0;
let money = 0;

if(holidays == 0){
    money = 5000;
    console.log(`My Money is ${money}`);
}
else if(holidays == 1 || holidays == 2){
    money = 3000;
    console.log(`My Money is ${money}`);
}
else if(holidays == 3){
    money = 2000;
    console.log(`My Money is ${money}`);
}
else if(holidays == 4){
    money = 1000;
    console.log(`My Money is ${money}`);
}
else if(holidays == 5){
    money = 0;
    console.log(`My Money is ${money}`);
}
else{
    money = 0;
    console.log(`My Money is ${money}`);

}

