console.log("Question 1.1\n")
const firstname = 'Richard';
const lastname = 'Zou';
const country = 'Ireland';
const city = 'Dunboyne';
const  age = 23;
const isMarried = false;
console.log(typeof(firstname));
console.log(typeof(lastname));
console.log(typeof(country));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log("----------------------------\n")

console.log("Question 1.2\n")
let num = '10';
if(typeof(num) == 10){
    console.log("Equal");
}else{
    console.log("Not Equal");
}
console.log("----------------------------\n")

console.log("Question 1.3\n")
if(parseInt('9.8') == 10){
    console.log("Equal");
}else{
    console.log("Not Equal");
}
console.log("----------------------------\n")

console.log("Question 1.4\n")
if(age == 23){
    console.log("true");
}
if(firstname == "Richard"){
    console.log("true");
}
if(lastname == 'Zou'){
    console.log("true");
}
if(isMarried != true){
    console.log("false");
}
if(city != "dublin"){
    console.log("false");
}
if(country != "England"){
    console.log("false");
}
console.log("----------------------------\n")

console.log("Question 1.5\n")
console.log(4 > 3);
console.log(4 >= 3);
console.log(4 < 3);
console.log(4 <= 3);
console.log(4 == 4);
console.log(4 === 4);
console.log(4 != 4);
console.log(4 !== 4);
console.log(4 != '4');
console.log(4 == '4');
console.log(4 === '4');
let py = 'Python';
let Jy = 'Jargon';

if(Jy == py){
    console.log("True");
}else{
    console.log(Jy == py);
}
console.log("----------------------------\n");

console.log("Question 1.6\n");
console.log(4 > 3 && 10 < 12);
console.log(4 > 3 && 10 > 12);
console.log(4 > 3 || 10 < 12);
console.log(4 > 3 || 10 > 12);
console.log(!(4 > 3));
console.log(!(4 < 3));
console.log(!(false));
console.log(!(4 > 3 && 10 < 12));
console.log(!(4 > 3 && 10 > 12));
console.log(!(4 === '4'));
let dr = "dragon"
console.log(py.includes("on") && dr.includes("on"));
console.log("----------------------------\n");

console.log("Question 1.7\n");
const now = new Date();
console.log(now.getFullYear());
console.log(now.getMonth());
console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
const allseconds = Date.now();
console.log(allseconds);
console.log("----------------------------\n");

console.log("Question 2.1\n");
/*
let base = prompt("Enter Base");
let height = prompt("Enter Height");
let area = .5 * base * height;
console.log("The area is: " + area);
*/
console.log("----------------------------\n");

console.log("Question 2.2\n");
/*let a = parseInt(prompt("Enter side A:"));
let b = parseInt(prompt("Enter side B:"));
let c = parseInt(prompt("Enter side C:"));

perimeter = a + b + c;
console.log("The perimeter is: " + perimeter);
console.log("----------------------------\n")
*/
console.log("Question 2.3\n");
/*
let length = parseInt(prompt("Enter Length: "));
let width = parseInt(prompt("Enter Width: "));

area = length * width;
perimeter  = (length * 2) + (width*2);

console.log("The area is: " + area + ", "+ "The perimeter is: " + perimeter)
*/
console.log("----------------------------\n");

console.log("Question 2.4\n");
/*
let r = parseInt(prompt("Enter Radius"));
area = 3.14 * r * r;
let circumference = 2 * 3.14 * r;
console.log("The area is: " + area + ", The circumference is: " + circumference );
*/
console.log("----------------------------\n")
console.log("Question 2.5\n");

/*
let x = parseInt(prompt("Enter X:"));
let slope1 = (2 * x) -2;
console.log(y)
*/

console.log("----------------------------\n")

console.log("Question 2.6\n");

let slope2 = (6-2)/(10 - 2);
console.log(slope2); 

console.log("----------------------------\n")

console.log("Question 2.7\n")

slope2 > slope1 ? console.log("Slope2 is bigger"): console.log("slope1 is bigger");

console.log("----------------------------\n")

console.log("Question 2.8\n")

let x = -3;
let y = x**2  + 6*x + 3**2;
if (y == 0) console.log("y = 0 at x = ", x);

console.log("----------------------------\n")

console.log("Question 2.9\n")
let hrs = parseFloat(prompt("Enter hours: "));
let ratePerHr = parseFloat(prompt("Enter rate per hours: "));
console.log("your weekly earning is : ", hrs * ratePerHr);

console.log("----------------------------\n")

console.log("Question 2.10\n")

let name = prompt("Enter Name:");
if(length.name > 7){
    console.log("Name is Long");
}else{
    console.log("Name is Short");
}

console.log("----------------------------\n")

console.log("Question 2.11\n")

console.log("----------------------------\n")

console.log("Question 2.12\n")

let myAge = 250;
let yourAge = 23;
console.log(`I am ${myAge - yourAge} years older than you!`);

console.log("----------------------------\n")

console.log("Question 2.13\n")

let birthYear = parseInt(prompt("Enter birth year: "));
2020 - birthYear >= 18 ? console.log(`You are ${2020 - birthYear}. You are old enough to drive!`) : console.log(`You are ${2020 - birthYear}. You will be allowed to drive after ${18 - birthYear} years.`);

console.log("----------------------------\n")

console.log("Question 2.14\n")

let yrsLived = parseInt(prompt("Enter number of years you live: "));
console.log(`You lived ${yrsLived * 31536000} seconds!`);

console.log("----------------------------\n")

console.log("Question 2.15\n")
const da = new Date();

let min = da.getMinutes();
let hours  = da.getHours();

let years = da.getFullYear();
let months = da.getMonth();
let dates = da.getDate();

// Format 1
console.log(`${years}-${months + 1}-${dates} ${hours}:${min}`);
// Format 2
console.log(`${dates}-${months+1}-${years} ${hours}:${min}`);
// Format 3
console.log(`${dates}/${months+1}/${years} ${hours}:${min}`);
console.log("----------------------------\n");


console.log("Question 3.1\n");
const d = new Date();

let mins = d.getMinutes();
mins < 10 ? '0' + mins.toString(): mins;
hrs  = d.getHours();
hrs < 10 ? '0' + hrs.toString(): hrs;

let year = d.getFullYear();
let month = d.getMonth();
let date = d.getDate();

console.log(`${year}-${month+1}-${date}  ${hrs}:${mins}`);
console.log("----------------------------\n");