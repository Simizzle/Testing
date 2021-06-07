// Activity 1

let names = "Simon"
let age = "40"
let colour = "green"

console.log(`Hello, my name is ${names} I am ${age} years old and my favourite colour is ${colour}`);

// Activity 2

let breakfast = "porridge"
let lunch = "eggs and bacon"
let dinner = "fish & chips"
console.log(`For breakfast today I had ${breakfast}, for lunch I had ${lunch} and I had ${dinner} for dinner`);

breakfast = "toast and jam"
lunch = "soup"
dinner = "bangers and mash"
console.log(`Tomorrow, I shall eat ${breakfast} for breakfast, ${lunch} for lunch and ${dinner} for dinner`);

// Activity 3

var myBirthday, today, bday, diff, days;
myBirthday = [16,6];
today = new Date();
bday = new Date(today.getFullYear(),myBirthday[1]-1,myBirthday[0]);
if( today.getTime() > bday.getTime()) {
    bday.setFullYear(bday.getFullYear()+1);
}
diff = bday.getTime()-today.getTime();
days = Math.floor(diff/(1000*60*60*24));
console.log(`It is ${days} days until Simon's birthday!`);

// Activity 4

