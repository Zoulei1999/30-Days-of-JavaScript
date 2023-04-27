console.log("Question 1.1\n");
let age = parseInt(prompt("Enter Your age: "));
if(age >= 18){
    console.log("You are old enough to drive");
}else{
    console.log("You are left with " + (18-age) + " years until you can drive");
}
console.log("----------------------------\n");

console.log("Question 1.2\n");
let myAge = 23;
let yourAge = parseInt(prompt("Enter Your age: "));
if(myAge > yourAge){
    console.log("I am " + (myAge-yourAge) + " years older than you");
} else{
    console.log("You are " + (yourAge- myAge) + " years older than me");
}
console.log("----------------------------\n");

console.log("Question 1.3\n");
let a = 4;
let b = 3;

if(a > b){
    console.log(a + " is greater than " + b);
}

a > b ? console.log(a + " is greater than " + b): console.log(b + "is greater than " + a);

console.log("----------------------------\n");

console.log("Question 1.4\n");

let num = parseInt(prompt("Enter a number: "));

if(num % 2 == 0){
    console.log(num + " is even");
}else{
    console.log(num + " is odd");
}

console.log("----------------------------\n");

console.log("Question 2.1\n");
let score = parseInt(prompt("Enter Score: "));

if(score <= 100 && score >= 80){
    console.log("You got an A");
    }
if (score <= 79 && score >= 70){
    console.log("You got a B");
}
if( score <= 69 && score >= 60){
    console.log("You got a C");
}
if( score <= 59 && score >= 50){
    console.log("You got a D");
}
if( score <= 49 && score >= 0){
    console.log("You got a F");
}

console.log("----------------------------\n");

console.log("Question 2.2\n");
let month= prompt("enter a month");
switch(month){
    case'September':
        console.log(month + " is in Autumn");
        break;
    case 'October':
        console.log(month + " is in Autumn");
        break;
    case 'November':
        console.log(month + " is in Autumn");
        break;
    case'December' :
        console.log(month + " is in Winter");
        break;
    case 'January' :
        console.log(month + " is in Winter");
        break;
    case 'February':
        console.log(month + " is in Winter");
        break;
    case'March':
        console.log(month + " is in Spring");
        break;
    case 'April':
        console.log(month + " is in Spring");
        break; 
    case 'May':
        console.log(month + " is in Spring");
        break;
    case 'June':
        console.log(month + " is in Summer");
        break;
    case 'July':
        console.log(month + " is in Summer");
        break; 
    case 'August':
        console.log(month + " is in Summer");
        break;
}
console.log("----------------------------\n");

console.log("Question 2.3\n");
let day =prompt("Enter Day: ");
day == 'saturday' || day == 'sunday' ? console.log(day + " is a weekend") : console.log(day + " is a workday");
console.log("----------------------------\n");


console.log("Question 3.1\n");
month = prompt("Enter Month: ");
switch(month){
    case 'January':
        console.log(month + " has 31 days");
        break;
    case 'February':
        console.log(month + " has 28 or 29days");
        break;
    case 'March':
        console.log(month + " has 31 days");
        break;
    case 'April':
        console.log(month + " has 30 days");
        break;
    case 'May':
        console.log(month + " has 31 days");
        break;
    case 'June':
        console.log(month + " has 30 days");
        break;
    case 'July':
        console.log(month + " has 31 days");
        break;
    case 'August':
        console.log(month + " has 31 days");
        break;
    case 'September':
        console.log(month + " has 30 days");
        break;
    case 'October':
        console.log(month + " has 31 days");
        break;
    case 'November':
        console.log(month + " has 30 days");
        break;
    case 'December':
        console.log(month + " has 31 days");
        break;                                                                                                                            
}
console.log("----------------------------\n");