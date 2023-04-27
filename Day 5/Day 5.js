console.log("Question 1.1\n");
let empty = [];
console.log("----------------------------\n");

console.log("Question 1.2\n");
let q2 = ['Richard', 'Bob', 'John', 'Jack', 'Sean'];
console.log("----------------------------\n");

console.log("Question 1.3\n");

console.log(q2.length);

console.log("----------------------------\n");

console.log("Question 1.4\n");
console.log(q2[0]);
console.log(q2[2]);
console.log(q2[4]);
console.log("----------------------------\n");

console.log("Question 1.5\n");
let mixedDataTypes = ['Asabeneh', 250, true,
{ country: 'Finland', city: 'Helsinki' },
{ skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] } ]

console.log("----------------------------\n");

console.log("Question 1.6\n");
let itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
console.log("----------------------------\n");

console.log("Question 1.7\n");
console.log(itCompanies);
console.log("----------------------------\n");

console.log("Question 1.8\n");
console.log(itCompanies.length);
console.log("----------------------------\n");

console.log("Question 1.9\n");
console.log(itCompanies[0]);
console.log(itCompanies[itCompanies.length-1]);
console.log("----------------------------\n");

console.log("Question 1.10\n");
console.log(itCompanies);
console.log("----------------------------\n");

console.log("Question 1.11\n");
let i = 0;
let itCapsCompanies=[];

for(i = 0; i < itCompanies.length; i++){
    itCapsCompanies[i] = itCompanies[i].toUpperCase();
}
console.log(itCapsCompanies);

console.log("----------------------------\n");

console.log("Question 1.12\n");
let itC = itCompanies.join();
console.log(itC + ' are big IT companies.')
console.log("----------------------------\n");

console.log("Question 1.13\n");
const search = "IBM";
for(i = 0; i < itCompanies.length; i++){
    if(itCompanies[i] == search){
        console.log(itCompanies[i] + " exists in the array");
    }else{
        console.log("Company not found in array slot " + i);
    }
}
console.log("----------------------------\n");

console.log("Question 1.14\n");
let itWithoutOO = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
for(i = 0; i < itCompanies.length; i++){
    if(itCompanies[i].includes('oo')){
        itWithoutOO.pop();    
    }
}
console.log(itWithoutOO);
console.log("----------------------------\n");

console.log("Question 1.15\n");
let sort = itCompanies.sort();
console.log(sort);
console.log("----------------------------\n");

console.log("Question 1.16\n");
let reverse = itCompanies.reverse();
console.log(reverse);
console.log("----------------------------\n");

console.log("Question 1.17\n");
let slice1_3 = itCompanies.slice(0,3);
console.log(slice1_3);
console.log("----------------------------\n");

console.log("Question 1.18\n");
let len = itCompanies.length;
let slice4_6 = itCompanies.slice(len-3,len);
console.log(slice4_6);
console.log("----------------------------\n");

console.log("Question 1.19\n");

console.log(itCompanies.slice(parseInt(itCompanies.length/2)));
console.log("----------------------------\n");

console.log("Question 1.20\n");
itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.shift()
console.log(itCompanies);
console.log("----------------------------\n");

console.log("Question 1.21\n");
itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.splice(parseInt(itCompanies.length/2)-1,3)
console.log(itCompanies);
console.log("----------------------------\n");

console.log("Question 1.22\n");
itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.splice(itCompanies.length-1,itCompanies.length);
console.log(itCompanies);
console.log("----------------------------\n");

console.log("Question 1.23\n");
itCompanies = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon'];
itCompanies.splice(0, itCompanies.length);
console.log(itCompanies);
console.log("----------------------------\n");
