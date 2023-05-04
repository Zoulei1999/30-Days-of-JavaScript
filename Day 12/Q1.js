//1
let text = 'He earns 4000 euro from salary per month, 10000 euro annual bonus, 5500 euro online courses per month.'
const pattern = /\d+/g;
const matches = text.match(pattern);
const salary = parseInt(matches[0] * 12);
const bonus = parseInt(matches[1]);
const course = parseInt(matches[2] * 12);
let annual = salary + bonus + course;

console.log(annual);

//2
const points = ['-12', '-4','-3','-1','0','4','8'];
let numPattern = new RegExp(/\-?[0-9]+/,'g');
let extracted = points.map( x => parseFloat(x.match(numPattern)[0])).sort((a,b) => a -b);

let distance = Math.abs(extracted[0] - extracted[extracted.length - 1]);

console.log(distance);

//3
let is_valid_variable = (str) => {
    let valid = /^[$|_|a-z|A-Z][1-9|a-z|A-Z|_]*?/
    return Boolean(str.match(valid));
}
console.log(is_valid_variable('first_name')) 
console.log(is_valid_variable('first-name'))
console.log(is_valid_variable('1first_name')) 
console.log(is_valid_variable('firstname'))
