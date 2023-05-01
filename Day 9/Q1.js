const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand', 'England']
const names = ['Asabeneh', 'Mathias', 'Elias', 'Brook']
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
const products = [
  { product: 'banana', price: 3 },
  { product: 'mango', price: 6 },
  { product: 'potato', price: ' ' },
  { product: 'avocado', price: 8 },
  { product: 'coffee', price: 10 },
  { product: 'tea', price: '' },
]

//1
/* 
Foreach it can only be used with arrays and needs elements index and array
Map iterates an array but also allows modification of elements. returns a new array.
filter filters an array using a condition and returns a new array.
reduce takes an accumulator current and optional value and returns a single value.
*/

//2
let sum = 0;
numbers.forEach(num=> sum += num)
console.log(sum);
//3
countries.forEach(cntry => console.log(cntry));
//4
names.forEach(name => console.log(name));
//5
numbers.forEach(num => console.log(num));
//6
let CountriesToUpper = countries.map(cntry => cntry.toUpperCase());
console.log(CountriesToUpper);
//7
let countriesLENGTH = countries.map(cntry => cntry.length);
console.log(countriesLENGTH);
//8
let square = numbers.map(num => num * num);
console.log(square);
//9
let nametoCaps = names.map(name => name.toUpperCase());
console.log(nametoCaps);
//10
let productsbyprice = products.map(price => price.price)
console.log(productsbyprice);
//11
let CountriesWithLand = countries.filter(country => country.includes('land'));
console.log(CountriesWithLand);
//12
let CountriesWith6 = countries.filter(country => country.length == 6);
console.log(CountriesWith6);
//13
let Countriesgreaterthan6 = countries.filter(country => country.length >= 6)
console.log(Countriesgreaterthan6);
//14
let countriesStartWithE = countries.filter(country => country.startsWith('E'));
console.log(countriesStartWithE);
//15
let productswithprice = products.filter(prod => prod.price > 0);
console.log(productswithprice);
//16 
function getStringList(arr) {
    return arr.filter(ar => typeof ar === 'string');
}
console.log(getStringList(countries));
//17
let sums = numbers.reduce((acc, cur)=> acc + cur);
console.log(sums);
//18
let cntry = countries.reduce((acc, cur)=> acc + cur);
console.log(cntry + " are north European countries");
//19
/*
SOME CHECK IF ATLEAST ONE ELEMENTS ARE SIMILAR IN ONE ASPECT.
EVERY CHECKS IF ALL ELEMENTS ARE SIMILAR.
*/
//20
let namescontain7letters = names.some(name => name.length > 7);
console.log(namescontain7letters)
//21
CountriesWithLand = countries.every(cntry => cntry.includes("land"));
console.log(CountriesWithLand);
//22
/*
Find returns first element that satafies the condition
findindex returns the position of first element which satisfies the condition
*/ 
//23
CountriesWith6 = countries.find(cntry => cntry.length == 6);
console.log(CountriesWith6);
//24
CountriesWith6 = countries.findIndex(cntry => cntry.length == 6);
console.log(CountriesWith6);
//25
let findNorway = countries.findIndex(cntry => cntry.includes('Norway'));
console.log(findNorway);
//26
let findRussia = countries.findIndex(cntry => cntry.includes('Russia'));
console.log(findRussia);