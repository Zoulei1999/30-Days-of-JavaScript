const { countries } = require("./countries");
const { webTechs } = require("./webTech");

console.log("Question 2.1\n");/*
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let ran = [];
let size = parseInt(prompt("Enter size of id: "))

for(let i = 0; i < size; i++){
    if(i%2 == 0){
        ran.push(i);
    }else{
        ran.push(alphabet[parseInt(Math.random() * 25)])
    }
}
console.log(ran.join(''));
*/
console.log("----------------------------\n")
console.log("Question 2.2\n");
/*
let result = [];
let hexref = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f'];
size = parseInt(prompt("Enter size of id: "));

for(i = 0; i < size; i++){
    result.push(hexref[Math.floor(Math.random() * 16)]);
}
console.log(result);
*/
console.log("----------------------------\n")
console.log("Question 2.3\n");

let rgb = [];
for(const char of '123') {
   var red = (parseInt(Math.random() * 255));
   var grn = (parseInt(Math.random() * 255));
   var blu = (parseInt(Math.random() * 255));
   
   rgb.push(red, grn, blu);
} 
console.log(`rgb(${red}, ${grn}, ${blu})`);


console.log("----------------------------\n")

console.log("Question 2.4\n");
let UpperCountries = [];
for(country of countries){
    UpperCountries.push(country.toUpperCase());
}console.log(UpperCountries);
console.log("----------------------------\n")

console.log("Question 2.5\n");
let countrylen = [];
for(country of countries){
    countrylen.push(country.length);
}
console.log(countrylen);
console.log("----------------------------\n")
console.log("Question 2.6\n");
let countryData = [];
for(country of countries){
    let len = country.length;
    let Cou = country.slice(0,3).toUpperCase();
    countryData.push([country,Cou,len]);
}
for (const arr of countryData) {
    console.log(arr);
}

console.log("----------------------------\n")
console.log("Question 2.7\n");
let noCountry = true;
let landCountries = [];

for(i of countries){
    if(i.includes("land")){
        landCountries.push(i);
        noCountry = false;
    }
}
if(noCountry) {
    console.log("All these countries are without land");
} else {
    for(const country of landCountries){ 
       console.log(country);
    }
}
console.log("----------------------------\n")
console.log("Question 2.8\n");
noCountry = true;
let endsinIA = [];

for(i of countries){
    if(i.endsWith("ia")){
        endsinIA.push(i);
        noCountry = false;
    }
}
if(noCountry){
    console.log("All these countries dont end with ia");
} else{
    for(const country of endsinIA){ 
        console.log(country);
    }
}
console.log("----------------------------\n")
console.log("Question 2.9\n");
let max = 0;
let maxLenCountry ;

for(const country of countries){
    if(country.length > max){
        max = country.length;
        maxLenCountry = country
    }
}
console.log("The max length country is " + maxLenCountry + " and it has " + max + " letters");
console.log("----------------------------\n")
console.log("Question 2.10\n");
let five = 5;
let fiveLetterCountry = [];

for(const country of countries){
    if(country.length == five){
        fiveLetterCountry.push(country);
    }
}
for(const country of fiveLetterCountry){ 
    console.log(country);
}


console.log("----------------------------\n")
console.log("Question 2.11\n");
let longWebTech;
let longestLenWT = 0;
for(const web of webTechs){
    if(longestLenWT < web.length){
        longestLenWT = web.length;
        longWebTech = web;
    }
}
console.log("The max length country is " + longWebTech + " and it has " + longestLenWT + " letters");

console.log("----------------------------\n")

console.log("Question 2.12\n");
let webTechData = [];
for(web of webTechs){
    let wenlen = web.length;
    webTechData.push([web,wenlen]);
}
for (const arr of webTechData) {
    console.log(arr);
}
console.log("----------------------------\n")
console.log("Question 2.13\n");
let mernArray = ["MongoDB", "Express", "React", "Node"];
let mernStack = [];
for (const tech of mernArray) {
    mernStack.push(tech);
} 
console.log(mernStack.join(', '));

console.log("----------------------------\n")
console.log("Question 2.14\n");

for(i = 0; i < webTechs.length; i++ ){
    console.log(webTechs[i]);
}

console.log("----------------------------\n")
console.log("Question 2.15\n");
let fruit = ["banana" , " orange" , "mango", 'lemon'];
let reverse = [];
for(i = fruit.length-1; i >= 0; i--){
    reverse.push(fruit[i]);
}
console.log(reverse.join(', '));
console.log("----------------------------\n")

console.log("Question 2.16\n");
const fullStack = [
    ['HTML', 'CSS', 'JS','React', 'Node', 'Express', 'MongoDB']
]
let print = []
for(stack of fullStack){
    print.push(stack)
}
console.log(print.join(', '));
console.log("----------------------------\n")
