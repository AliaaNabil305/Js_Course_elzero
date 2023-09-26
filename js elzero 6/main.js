/* let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
myFriends.pop()
console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
console.log(myFriends.splice(myFriends.length - myFriends.length, num)); // ["Ahmed", "Elham", "Osama"]; */

/* let friends = ["Ahmed", "Eman", "Osama", "Gamal"];

// Write Your Code Here
friends.shift()
friends.pop()
console.log(friends); // ["Eman", "Osama"]

let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];

// Write One Single Line Of Code
// finalArr=[arrTwo[2],arrOne[2],arrOne[1],arrOne[0],arrTwo[1],arrTwo[0]]
finalArr=arrOne.concat(arrTwo).sort().reverse()

console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"] */
/* 
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[2][0].slice(2,6).toUpperCase()); // ZERO */
/* 
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if(haystack.includes(needle)){
    console.log("found")
}

if(haystack.indexOf(needle) != -1){
    console.log("found")
}

if(haystack.lastIndexOf(needle) != -1){
    console.log("found")
}
 */
/* 
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];

// Your Code Here
allArrs.push(
        arr2[arr2.indexOf("F")],
        arr1[arr1.indexOf("X")],
        arr2[arr2.indexOf("Y")]
    );
    allArrs = allArrs.join('').toLowerCase();

console.log(allArrs); // fxy */


//challenge

let zero = 0;
let counter = 3;
let my = ["Ahmed", "Mazero", "Elham", "Osama", "Gamal", "Ameer"];
my.pop()
my.pop()
my.reverse()
console.log(my); // ["Osama", "Elham", "Mazero", "Ahmed"];

console.log(my.slice(1,3)); // ["Elham", "Mazero"]

console.log(my[1].slice(0,2)+my[2].slice(2,6)); // "Elzero"

console.log(my[2][4] + my[2][5].toUpperCase()); // "rO"