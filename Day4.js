// const pressGrindBeans = () => {
//     console.log("Grinding for 20 seconds");
// }

// next

// pressGrindBeans();

// let coffeeIsGrinding = false
// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding = false;
//     } else {
//         console.log("Grinding is about to begin");
//         coffeeIsGrinding = true
//     }
// }
// pressGrindBeans();

// Celsius to Fahrenheit
// const multiplyByNineFiths = (celsius) => {
//     return celsius * (9/5);
// };
// const getFahrenheit = (celsius) => {
//     return multiplyByNineFiths(celsius) + 32;
// };

// console.log("The temperature is " + getFahrenheit(36) + "F");

//Declaration (2)
// function factoral (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1
//     } else {
//         return (n * factoral(n-1));
//     }
// }
// console.log(factoral(33));

// //Square number
// const square = (number) => {
//     return number * number;
// };
// square(5);

// // Coffee order ACTIVITY
// const drink = (size, drinkType) => {
//     console.log(`Order received: ${size} ${drinkType}`); }
//     drink("Small","Americano");

// // Activity - taking code and coverting to arrow function syntax
    // const factorial = (n) => {
    //     if ((n === 0) || (n === 1)) {
    //         return 1;
    //     } else {
    // return (n * factorial(n-1)); }
    // } console.log(factorial(33));

// Activity(1) - pizza order
// let orderCount = 0;

// const takeOrder = (topping1, topping2) => {
//     console.log(`Pizza with ${topping1} and ${topping2}`);
//     orderCount+=1
// }
// takeOrder('pineapple', 'ham')
// console.log(orderCount);

// // Activity(2) - Cash Machine

// const balance = 4600;
// const pin = 1234;

// let amountToWithdraw = 400
// let userPin = 1234;
// remaining = (balance - amountToWithdraw);
// const withdrawCash = () => {
// if (balance >= amountToWithdraw && userPin === pin) {
// console.log("Collect your money below")
// console.log(`Your available balance is ${remaining}`)
// }
// else {
// console.log("The operation was unsuccessful")
// }
// }
// ;
// withdrawCash();

// Activity 3 - X's and O's

let grid = [
    ['x', 'o', 'o'],
    ['x', 'x', 'x'],
    ['o', 'x', 'o']
    ];
    
    // console.log(grid[0][0]); // Output: 1
    // console.log(grid[0][1]); // Output: 2
    // console.log(grid[0][2]); // Output: 3
    // console.log(grid[1][0]); // Output: 4
    // console.log(grid[1][1]); // Output: 5
    // console.log(grid[1][2]); // Output: 6
    // console.log(grid[2][0]); // Output: 7
    // console.log(grid[2][1]); // Output: 8
    // console.log(grid[2][2]); // Output: 9

if ((grid[0][0] == "x" && grid[0][1] == "x" && grid[0][2] == "x") || (grid[0][0] == "o" && grid[0][1] == "o" && grid[0][2] == "o")){
    console.log("WINNER WINNER!");}
 if ((grid[1][0] == "x" && grid[1][1] == "x" && grid[1][2] == "x") || (grid[1][0] == "o" && grid[1][1] == "o" && grid[1][2] == "o")){
        console.log("WINNER WINNER!");}
        if ((grid[2][0] == "x" && grid[2][1] == "x" && grid[2][2] == "x") || (grid[2][0] == "o" && grid[2][1] == "o" && grid[2][2] == "o")){
            console.log("WINNER WINNER!");
            }
        
    