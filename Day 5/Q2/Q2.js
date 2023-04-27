const {countries} = require('./countries.js');
const {webTechs} = require('./webTechs.js');
console.log("Question 2.2\n");
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
let arr = text.split(/[,\s]+|[\s]/);
console.log(arr);

console.log("----------------------------\n");

console.log("Question 2.3\n");
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
shoppingCart.unshift('Meat');
if(shoppingCart.includes('Sugar')){
    console.log("Sugar in basket already");
}else{
    shoppingCart.push('Sugar');
    console.log("Sugar added to basket");
}
/*
let allergic = prompt("Are you alergic to honey: ")
if(allergic == "yes"){
    shoppingCart.splice(shoppingCart.lastIndexOf('Honey'), 1);
    console.log("honey removed from basket")
}else{
    console.log("honey stays in basket");
}*/
shoppingCart[shoppingCart.lastIndexOf('Tea')] = "Green Tea";
console.log(shoppingCart);

console.log("----------------------------\n");

console.log("Question 2.4\n");
if (countries.indexOf("Ethiopia")) {
    console.log("ETHIOPIA");
} else {
    countries.push("Ethiopia");
}
console.log("----------------------------\n");

console.log("Question 2.5\n");
if (webTechs.indexOf("Sass")) {
    console.log("Sass is a CSS preprocess");
} else {
    countries.push("Sass");
}
console.log("----------------------------\n");

console.log("Question 2.6\n");
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullstack = frontEnd.concat(backEnd);
console.log(fullstack);

console.log("----------------------------\n");