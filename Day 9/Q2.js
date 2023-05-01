const countries = ['Finland', 'Sweden', 'Denmark', 'Norway', 'IceLand','Zambia','Zimbabwe','Yemen', 'Uruguay']
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
let totalprice = products.filter(price => typeof price.price !='string').reduce((acc,cur) => acc + cur.price,0);
console.log(totalprice);
//2
totalprice = products.reduce((acc, cur) => {return typeof cur.price != 'string' ? acc+= cur.price : acc},0);
console.log(totalprice);
//3
function categorizeCountries(arr){
    return arr.filter(cntry => cntry.endsWith('land'));
}
console.log(categorizeCountries(countries));
//4
let frequency = countries.map(cntry => cntry[0]).reduce((obj, cur) => {
obj[cur] = (obj[cur] || 0) + 1;
    return obj
},{});
console.log(frequency);
//5
function first10countries(arr){
    return arr.filter(c => arr.indexOf(c) < 5)
}
console.log(first10countries(countries));
//6 
function last10countries(arr){
    return arr.filter(c => arr.indexOf(c) > arr.length-5);
}
console.log(last10countries(countries))
//7
