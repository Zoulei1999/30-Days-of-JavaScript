/*
function solveLinEquation(){
    let a = 5;
    let b = 3;
    let c = 2;

    let x = (b * y + c) / a;
    let y = (a * x + c) / b;
}
solveLinEquation();
*/
//2
function solveQuadEquation(a,b,c){
    let x = Math.sqrt(Math.pow(b,2) - 4* a * c);

    let plusX = ((-b + x)/ 2*a);
    let minusX = ((-b - x) / 2*a);

    return(plusX,minusX);
}
console.log(solveQuadEquation(1,4,4));
//3
function printArray(arr){
    console.log(arr);
}
let numbers = [1,2,3,4,5]
printArray(numbers);
//4
function showDateTime(){
    let d = new Date();

    let year = d.getFullYear();
    let month = d.getMonth();
    let day = d.getDate();

    let hours = d.getHours();
    let min = d.getMinutes();

    let format = `${day}/${month}/${year}  ${hours}:${min}`;

    return format;
}
console.log(showDateTime());
//5
function swapValues(a ,b){
    let temp = a;
    a = b;
    b = temp;

    console.log(a + " " + b);
}
swapValues(3,4);
//6
function reverseArray(arr){
    let reverse = [];
    for (let i = arr.length-1; i >= 0; i--) {
        reverse.push(arr[i]);
    }
    console.log(reverse);
}
let array = [1,2,3,4,5]
reverseArray(array);
//7
function capitalizeArray(arr){
    let caps = [];
    for (const items of arr){
        caps.push(items.toUpperCase());
    }
    console.log(caps);
}
let Array = ["gym", "food" , "car"];
capitalizeArray(Array);
//8
function addItem(arr){
    let newItem = "bed";
    arr.push(newItem);

    console.log(arr);
}
addItem(Array)
//9
function removeItem(arr){
    let index = arr.indexOf('car');
    arr.splice(index,1);

    console.log(arr);
}
removeItem(Array)
//10
function sumOfNumbers(range){
    let sum = 0;
    for(let i = 0; i <= range; i++){
        sum = sum + i;
    }

    console.log(sum);
}
sumOfNumbers(10);
//11
function sumOfOdds(range){
    let oddSum = 0;
    for(let i = 0; i <= range; i++){
        if(i % 2 == 1){
            oddSum = oddSum + i;
        }
    }
    console.log(oddSum);
}
sumOfOdds(50)
//12
function sumOfEvens(range){
    let evenSum = 0;
    for(let i = 0; i <= range; i++){
        if(i % 2 == 0){
            evenSum = evenSum + i;
        }
    }
    console.log(evenSum);
}
sumOfEvens(50);
//13
function evensAndOdds(range){
    let TotalE = 0;
    let TotalO = 0;

    for(let i = 0; i <= range; i++){
        if(i % 2 == 0){
            TotalE++;
        }
        else{
            TotalO++;
        }
    }
    console.log("The number of odds are " + TotalO + "\nThe number of evens are " + TotalE);
}
evensAndOdds(100);
//14
function sum(num1 , num2, num3){
    let sum = num1 + num2 + num3;

    return sum;
}
console.log(sum(1,2,3));

//15
function randomUserIp(){
    let a = parseInt(Math.random() * 255);
    let b = parseInt(Math.random() * 255);
    let c = parseInt(Math.random() * 255);
    let d = parseInt(Math.random() * 255);

    return `${a}.${b}.${c}.${d}`
}
console.log(randomUserIp());
//16
function randomMacAddress(){
    let arr = [];
    let letters = '0123456789ABCDEF';

    for(let i = 1; i <= 6; i++){
        let m1 = Math.ceil(Math.random() * 15);
        let m2 = Math.ceil(Math.random() * 15);
        
        arr.push(letters[m1] + letters[m2]);
    }

    return arr.join(":");
}
console.log(randomMacAddress());
//17
function randomHexaNumber(){
    let literal = '0123456789ABCDEF';
  
  let hex = [];
  let len = Math.floor(Math.random() * 11);
  for(let i=0; i < len; i++) {
    let index= Math.ceil(Math.random() * literal.length) -1;
    hex.push(literal[index]);
  }
  
  return '#' + hex.join('');
}
console.log(randomHexaNumber());
//18
function userIdGenerator(){
    let letters = `abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789`;
    let id = [];
    for(let i = 0 ; i < 7; i++){
        let index = Math.ceil(Math.random() * letters.length) - 1;
        id.push(letters[index])
    }
    return id.join("");
}
console.log(userIdGenerator());