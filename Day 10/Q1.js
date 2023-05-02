//1
const test = new Set();
console.log(test);
//2
for(let i = 0; i < 11; i++){
    test.add(i);
}
console.log(test);
//3
console.log(test.delete(6));
console.log(test.size);
//4
test.clear();
console.log(test);
//5
const languages = [
    'English',
    'Finnish',
    'French',
    'Spanish',
    'German'
]
const setOfLanguages = new Set(languages);
console.log(setOfLanguages);
//6
const countries = [
    ['Ireland', 7],
    ['Germany', 7],
    ['England',7],
    ['USA',21],
    ['France',6],
    ['China',5],
    ['Spain',5],
]

const map = new Map(countries)
console.log(map);