const { countries } = require("./Exercise2.js/countries.js");
const { webTechs } = require("./Exercise2.js/webTech.js");

const mernStack = ["MongoDB", "Express", "React", "Node"];
console.log("Question 3.1\n");
console.log(countries);
console.log("----------------------------\n")
console.log("Question 3.2\n");
let copy = countries;

let sortedCountires = copy.sort();

console.log(sortedCountires);
console.log("----------------------------\n")

console.log("Question 3.3\n");
let sortedMern = mernStack.sort();
let sortedWebTechs = webTechs.sort();

console.log(sortedMern);
console.log(sortedWebTechs)
console.log("----------------------------\n")

console.log("Question 3.4\n");
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

console.log("Question 3.5\n");
let highLenCountry = 0;
let longestNameCountry;

for(country of countries){
    if(country.length > highLenCountry){
        highLenCountry = country.length;
        longestNameCountry = country;
    }
}
console.log("The max length country is " + longestNameCountry + " and it has " + highLenCountry + " letters");

console.log("----------------------------\n")

console.log("Question 3.6\n");
noCountry = true;
landCountries = [];

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

console.log("Question 3.7\n");
let size = 4;
let countries_with_4_characters = [];

for (country of countries){
    if(country.length > size){
        countries_with_4_characters.push(country);
    }
}
for(const country of countries_with_4_characters){ 
    console.log(country);
}

console.log("----------------------------\n")

console.log("Question 3.8\n");
let countries_with_two_words = [];
for (country of countries){
    if(country.includes(' ') == true){
        countries_with_two_words.push(country);
    }
}
for(const country of countries_with_two_words){ 
    console.log(country);
}

console.log("----------------------------\n")

console.log("Question 3.9\n");
let ReversCountries = countries.reverse();
CapsReversCountries = [];

for(const country of ReversCountries){
    CapsReversCountries.push(country.toUpperCase());
}
console.log(CapsReversCountries);
console.log("----------------------------\n")
