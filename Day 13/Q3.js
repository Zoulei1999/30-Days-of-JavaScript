const array = [1,2,3,4,5,6,7,8,9,10];

console.time('While Loop');
let i = 0;
while(i < array.length){
    console.log(array[i]);
    i++;
}
console.timeEnd('While Loop');

console.time('For Loop');
for(let i = 0 ; i < array.length; i++){
    console.log(array[i]);
}
console.timeEnd('For Loop');

console.time('For of Loop');
for (const values of array){
    console.log(values);
}
console.timeEnd('For of Loop');

console.time('foreach');
array.forEach(element => {
    console.log(element);
});
console.timeEnd('foreach');
