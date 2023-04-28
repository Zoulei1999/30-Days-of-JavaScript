const { countries } = require("./countries");
const users = {
    Alex: {
      email: 'alex@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript'],
      age: 20,
      isLoggedIn: false,
      points: 30
    },
    Asab: {
      email: 'asab@asab.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Redux', 'MongoDB', 'Express', 'React', 'Node'],
      age: 25,
      isLoggedIn: false,
      points: 50
    },
    Brook: {
      email: 'daniel@daniel.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux'],
      age: 30,
      isLoggedIn: true,
      points: 50
    },
    Daniel: {
      email: 'daniel@alex.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'Python'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    John: {
      email: 'john@john.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js'],
      age: 20,
      isLoggedIn: true,
      points: 50
    },
    Thomas: {
      email: 'thomas@thomas.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'React'],
      age: 20,
      isLoggedIn: false,
      points: 40
    },
    Paul: {
      email: 'paul@paul.com',
      skills: ['HTML', 'CSS', 'JavaScript', 'MongoDB', 'Express', 'React', 'Node'],
      age: 20,
      isLoggedIn: false,
      points: 40
    }
}

//1
let mostSkills = 0;
let skilledPerson;

for(const people of Object.keys(users)){
    if(users[people].skills.length > mostSkills){
        mostSkills = users[people].skills.length;
        skilledPerson = Object.assign({}, users[people]);
    }
}

console.log(skilledPerson);

//2
let count = 0;
let pointover50 = 0;
for(const people of Object.keys(users)){
    if(users[people].isLoggedIn){
        count++;
    }
    if(users[people].points >= 50){
        pointover50++;
    }
}
console.log("The amount of logged in users is " + count + ", " + "The amount of people with over 50 points is " + pointover50);

//3
function FindMern(){
    let mern = ["MongoDB", "Express", "Node", "React"];
    let count = 0;
    let devs = [];

    for(const dev of Object.values(users)){
        for(const skill of dev['skills']){
            if(mern.indexOf(skill) != -1){
                count++;
            }
            if(count == 4){
                devs.push(dev);
            }
        }
    }
    return(devs);
}

console.log(FindMern());

//4
const UserCopy = Object.assign({}, users);
UserCopy["Richard"] = {};

//5
const keys = Object.keys(users);
console.log(keys)

//6
const values = Object.values(users);
console.log(values);

//7
const country = countries[Object.keys(countries)[40]];
   
console.log("Name: ", country.name)
console.log("Capital: ", country.capital)
console.log("Population: ", country.population);
console.log("Languages: ", country.languages);