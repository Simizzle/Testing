// let music = "no music";

// if (music == "classical") {
//     console.log("oh no it's classical again");
// }
// else if (music == "no music") {
//     console.log("Arh, peace and quiet");
// }
// else {
//     console.log("Nice and noisy");
// }

// // This will loop code between here and * 3 times
// for (var i = 0; i < 3; i++){
//     // This will loop code between here and ** twice
//     for (var j = 0; j < 2; j++){
//     // This will print out twice because of the loop ^
//     console.log(" | | ");
//     // **
//     }
//     // if i is NOT equal to 2 then print "-------"
//     // it will equal 2 after 2 iterations i.e only print twice
//     if(i !== 2){
//     console.log("-----------");
//     }
//     // *
//     }


//     if (1233 % 1234){
//         console.log("true");
//     } else {
//         console.log("false");
//     }

// // <
//     if (1233 < 1234){
//         console.log("true");
//     } else {
//         console.log("false");
//     }

//     // >

//     if (1233 > 1234){
//         console.log("true");
//     } else {
//         console.log("false");
//     }

//     let num = 1234;
// let num2 = 1234;

// if (num % num2) {
// console.log("true");
// } else {
// console.log("false");
// }

// // TASK

// if (1 === "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// // example 2

// if (1 != "2") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// //example 3

// if (1 !== "1") {
//     console.log(true);
// }
// else {
//     console.log(false);
// }

// // EXAMPLE 4

// let place = "Manc";
// let weather = "Rain";

// if (place == "Manc" && weather == "Sunny") {
//     console.log("Check again");
// }
// else if (place == "Manc" && weather == "Rain") {
// console.log("Obvs");
// }
// else {
// console.log("What it isn't raining?");
// }

// //Example 5

// let day = "Saturday";
// //           true     or     false
// if (day == "Saturday" || day == "Sunday"){
//     console.log("It's weekend");
// }
// else {
//     console.log("When's weekend");
// }

// // EXAMPLE 6 - CARS

// let car = "Peugeot";
// if(car == "Ford" || car == "GM"){
// console.log("You've got an American car!");
// }
// else if(car == "Peugeot" || car == "Citroen"){
// console.log("You've got a French boy!");
// }
// else if(car == "Honda" || car == "Toyota" || car == "Suzuki"){
// console.log("Japanese cars are dead quiet!");
// }
// else if(car == "Mercedes"){
// console.log("You are proper posh German!");
// }
// else if(car == "Volkswagen"){
// console.log("German aren't that bad at all!");
// }
// else if(car == "Hyundai" || car == "Kia"){
// console.log("South Korean cars are getting popular!");
// }
// else{
// console.log("Your car is not in the top ten companies in the world!");
// }

// // EXAMPLE 7 - CARS (Switch)
// switch(car){
//     case "Ford":
//     case "GM":
//             console.log("You've got an Americal Car");
//             break;
//     case "Peugeot":
//     case "Citroen":

// }


// // Example 8 - Grade Calculator

// const grade = 87;

// switch (true) {
//     case grade >= 70:
//         console.log("Distinction");
//         break;
//     case grade >= 60:
//         console.log("Merit");
//         break;
//     case grade >= 50:
//         console.log("Pass");
//         break;
//     default:
//         console.log("Failed");
// }

// // Day 3 ACTIVITY 1&2
// let age = 18
// let country = "UK"
// if (age > 17 && country == "UK") {
//     console.log("Yes, I can serve you");
// } 
// else if (age > 20 && country == "USA") {
//     console.log("Yeeeehaw! This Bud is for you!");
// }
// else
// console.log("You aren't old enough");

// // DAY 3 ACTIVITY on SWITCH CASE

// let topp = "peppers";
// switch(topp){
//     case "ham":
//     case "pineapple":
//     case "pepperoni":
//             console.log("These are important ingredients for my pizza");
//             break;
//     case "onion":
//     case "peppers":
//         console.log(`I don't mind having ${topp} on my pizza`);
//         break;
//     case "anchovies":
//     case "capers":
//         console.log(`${topp} should not be on a pizza`);
// }

// // Challenge 1(if/else)

// let password = "abcdefgh";
// if (password.length < 8) {
//    console.log ("Your password is too short.");     
// }
// else {
//     console.log(`You password is ${password}.`);
// }

// // Challenge 2(use both if/else and switch)

// num = 14
// if (num % 3 == 0 || num % 5 ==0) {
//     console.log("This number is divisible by 3 or 5")
// }
// else {
//     console.log("This number is not divisible by 3 or 5");
// }

// // Jordans weird code 1
// let weird = 12;
// if (weird & 1) {
// console.log("It's odd");
// } else {
// console.log("It's even");
// }

// Challenge 3

// let num = 15;

// if (num % 3 == 0 && num % 5 == 0) {
// console.log("fizz buzz");
// } else if (num % 5 == 0) {
// console.log("buzz");
// } else if (num % 3 == 0) {
// console.log("fizz");
// } else {
// console.log(num);
// }

// Challenge 4
// let num = 1002
// num = num + "";
// let num2 = num.split("").reverse().join("");

// if (num==num2){
//     console.log("Number is a pallindrome")
// }
// else {
//     console.log("It is not a pallindrome");
// }

// Challenge 5
// let time = 7
// let placeOfWork = "Apple"
// let townOfHome = "Blackpool"
// if (time )



// array1 = ["h","e", "l", "l", "0"];
// array2 = ["h","e", "l", "l", "0"];

// let loopNum = array1.length;

// for (let i = 0; i < loopNum; i++){
// console.log(array1[i]);
// console.log(array2[i]);
// }

// //or

// array1 = ["h","e", "l", "l", "0"];
// array2 = ["h","e", "l", "l", "0"];

// let loopNum = array1.length;

// for (let i = 0; i < loopNum; i++){
// if (array1[i] == array2[i]){
// console.log("It's a match!");
// } else {
// console.log("It's not a match!");
// }
// }


// // splitting something into an array:
// let string = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let array = string.split(" ");
// let loopNum = string.length;

// for (let i = 0; i < loopNum; i++){
// if (array1[i] == array2[i]){
// console.log("It's a match!");
// } else {
// console.log("It's not a match!");
// }
// }


// // Carly's solution
// let string = 'jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi';
// let vowelArr = ['a', 'e', 'i', 'o', 'u'];
// let highestIndex =0;
// //counter go through whole array using length as limiter
// for (var i = 0; i < vowelArr.length; i++){
//  console.log(string.lastIndexOf(vowelArr[i]));
// //gets index of vowel in current iteration
//     index = string.lastIndexOf(vowelArr[i]);
// //compares current index to find highest index    
// if (index >= highestIndex ){
// //so new highestindex becomes index
//     highestIndex = index;
// //won't reach last two nums in vowelarray   
//     lastVowel = vowelArr[i];
// }
// }
// console.log(lastVowel); 

// Challenge 7

    // str = "thought"
    // length = str.length;
    // let firstChar = str.charAt(0);
    // let lastChar = str.charAt(length-1);
    // console.log(firstChar===lastChar);

// extension task
// let age = 60
// if (age <= 17) {
//     console.log("£8")
// }
// else if (age >= 18 && age <= 59) {
//     console.log("£10.95")
// }
// else (console.log("£7.50"));