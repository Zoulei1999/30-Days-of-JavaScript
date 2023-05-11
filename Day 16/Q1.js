//1
const skills = ['HTML', 'CSS', 'JS', 'React','Node', 'Python']
const txt = JSON.stringify(skills)
console.log(txt)
//2
let age = 250;
const old = JSON.stringify(age)
console.log(old)
//3
let isMarried = true
const status = JSON.stringify(isMarried)
console.log(status)
//4
const student = {
    firstName:'Asabeneh',
    lastName:'Yetayehe',
    age:250,
    isMarried:true,
    skills:['HTML', 'CSS', 'JS', 'React','Node', 'Python', ]
}
const stud = JSON.stringify(student)
console.log(stud);