/* let start = 10;
let end = 100;
let exclude = 40;

for( i=0 ;i<end;i+start){
    i+=10
    if(i==exclude){
        continue;
    }
    console.log(i)
}
// // Output
// 10
// 20
// 30
// 50
// 60
// 70
// 80
// 90
// 100 */
/* 
let start = 10;
let end = 0;
let stop = 3;

for(i=10;i>=stop;i--){
    if(i<10){
        console.log(`${end}${i}`)
    }
    else{console.log(i)}
}

// Output
// 10
// 09
// 08
// 07
// 06
// 05
// 04
// 03 */
/* 
let start = 1;
let end = 6;
let breaker = 2;

for(i=start;i<=end;i++){
    console.log(i)
    console.log("--"+breaker)
    console.log("--"+(end-breaker))
}
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4
 */


/* 
let index = 10;
let jump = 2;


for (;;) {
    if(index < 4) break;
    if (index >= 0) console.log(index);
    index -= jump
}

// Output
// 10
// 8
// 6
// 4 */
/* 
let friends = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
for(i=0;i<7;i++){
    if(friends[i].charAt(0) == letter || friends[i].charAt(0) == letter.toUpperCase()){
        continue;
    }
    else{
        console.log(i+"=>"+friends[i]);
    }
}

// Output
// "1 => Sayed"
// "2 => Eman"
// "3 => Mahmoud"
// "4 => Osama"
// "5 => Sameh" */

/* 
let start = 0;
let swappedName = "elZerO";
let str ='';
for(i=0;i<swappedName.length;i++){
    if(swappedName[i] === swappedName[i].toLocaleUpperCase() ){
        str +=swappedName[i].toLowerCase()
        
    }
    else{
        str +=swappedName[i].toUpperCase()

    }
    
}
console.log(str)

// Output
// "ELzERo" */

/* let start = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];

for(i=++start;i<mix.length;i++){
    if(typeof mix[i]== "string"){
        continue;
    }
    console.log(mix[i])
}


// Output
// 2
// 3
// 4 */

let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while(index<friends.length){
    if ( typeof friends[index] == 'number' || friends[index].charAt(0)=='A'){
        continue;
    }
    
    console.log(index + "=>" + friends[index])
    index++;
    
}

// Output
// "1 => Sayed"
// "2 => Mahmoud"

/* let friends = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index = 0;
let counter = 0;

while (index < friends.length) {
    if (friends[index][+false] !== 'A' && typeof friends[index] !== 'number') {
        console.log(`${++counter} => ${friends[index]}`);
    }
    index++
} */
