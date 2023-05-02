const a = [4, 5, 8, 9]
const b = [3, 4, 5, 7]
const countries = ['Finland', 'Sweden', 'Norway']

//1
let c = [...a,...b]
let A = new Set(a)
let B = new Set(b)
let C = new Set(c)

console.log(C);

//2
c = a.filter((num) => B.has(num))
C = new Set(c)

console.log(C)
//3
c = a.filter((num) => !B.has(num))
C = new Set(c)

console.log(C)