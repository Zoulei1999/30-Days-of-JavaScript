const { countries } = require("./countries_data.js");
//1
for(const {name,capital,population,languages} of countries){
    console.log(name,capital,population,languages);
}
//2
const student = ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]]
let [name, skills, [htmScore,cssScore,jsScore,reactScore]] = student
console.log(name, skills, jsScore, reactScore)
//3
const students = [
    ['David', ['HTM', 'CSS', 'JS', 'React'], [98, 85, 90, 95]],
    ['John', ['HTM', 'CSS', 'JS', 'React'], [85, 80, 85, 80]]
]

function convertArrayToObject(student){
    let arrObject = [];
    for(const [name , skills, scores] of student){
        arrObject.push({name,skills,scores});
    }
    return arrObject;
}
console.log(convertArrayToObject(students))
//4
const stdent = {
    name: 'David',
    age: 25,
    skills: {
      frontEnd: [
        { skill: 'HTML', level: 10 },
        { skill: 'CSS', level: 8 },
        { skill: 'JS', level: 8 },
        { skill: 'React', level: 9 }
      ],
      backEnd: [
        { skill: 'Node',level: 7 },
        { skill: 'GraphQL', level: 8 },
      ],
      dataBase:[
        { skill: 'MongoDB', level: 7.5 },
      ],
      dataScience:['Python', 'R', 'D3.js']
    }
}

let skill = {
    fE: {skill: 'Bootstrap', level: 8},
    bE: {skill: 'Express', level: 9},
    dV: {skill: 'SQL', level: 8},
    dS: {skill: 'SQL',},
}

let copy = [...stdent];
for(let i =0; i < skill.length; i++){
    copy.skills[i].push(skill[i]);
}

console.log(copy);