const {countries} = require('./Q2/countries.js');
const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
let length = ages.length;
console.log("Question 3.1\n");
ages.sort();
console.log("The min age is " + ages[0] + ", The Max age is " + ages[ages.length-1]);
let median = ages[ages.length/2];
console.log("The median age is " + median + "years old");
let average = 0;
let i = 0;
for(i = 0; i < ages.length; i++){
    average = ages[i] + average;
}
average = average/ages.length;
console.log("The average age of the students is " + average + " years old");
let range = ages[length-1] - ages[0];
console.log("the range for the ages is " + range);
let valueofmin = Math.abs(ages[0] - average);
let valueofMax = Math.abs(ages[length-1] - average);
console.log("The value of min is: " + valueofmin + " The value of max is: " + valueofMax);
console.log("----------------------------\n");

console.log("Question 3.2\n");
console.log(countries.slice(0,10))
console.log(countries.slice(parseInt(countries.length/2)));
console.log("----------------------------\n");

console.log("Question 3.3\n");
const half = Math.ceil(countries.length / 2);
const firstHalf = countries.slice(0, half);
const secondHalf = countries.slice(half); 


console.log("The first half of countries is :" + firstHalf + "\n\n");
console.log("The size of the first half is: " + firstHalf.length + "\n");
console.log("The second half of countries is:" + secondHalf + "\n\n");
console.log("The size of the second half is: " + secondHalf.length + "\n");
console.log("----------------------------\n");