console.log("Question 1.1\n");
let i = 0;

for(i = 0 ; i < 11; i++){
    console.log(i + "\n");
}

i = 0;
while(i <= 10){
    console.log(i + "\n");
    i++;
}

i = 0;
do{
    console.log(i + "\n");
    i++;
}while (i <= 10)

console.log("----------------------------\n");

console.log("Question 1.2\n");
i = 10;

for(i = 10 ; i >= 0 ; i--){
    console.log(i + "\n");
}

i = 10;
while(i >= 0){
    console.log(i + "\n");
    i--;
}

i = 10;
do{
    console.log(i + "\n");
    i--;
}while (i >= 0)
console.log("----------------------------\n")

console.log("Question 1.3\n");
/*let n = parseInt(prompt("Enter size of loop:"));
for(i = 0; i <= n; i++){
    console.log(i);
}*/
console.log("----------------------------\n")

console.log("Question 1.4\n");
let string = ""
let j = 0;
for(i = 0; i < 7; i++){
    for(j = 0; j <=i; j++){
        string +="#";
    }
    string += "\n";
}
console.log(string);
console.log("----------------------------\n")

console.log("Question 1.5\n");
for(i = 0; i <=10; i++){
    console.log(`${i} * ${i} = ${i * i}`)
}
console.log("----------------------------\n")

console.log("Question 1.6\n");
for(i = 0; i <=10; i++){
    console.log(`${i}  ${i*i}  ${i * i * i}`)
}
console.log("----------------------------\n")

console.log("Question 1.7\n");
for(i = 0; i <= 100; i++){
    if(i % 2 == 0){
        console.log(i);
    }
}
console.log("----------------------------\n")

console.log("Question 1.8\n");
for(i = 0; i <= 100; i++){
    if(i % 2 == 1){
        console.log(i);
    }
}
console.log("----------------------------\n")

console.log("Question 1.9\n");
for(i = 0; i <= 100; i++){
   let flag = 0;
    for(j = 2; j < i; j++){
        if(i % j == 0 ){
            flag = 1;
            break;
        }
   }
   if (i > 1 && flag == 0){
    console.log(i);
   }
}
console.log("----------------------------\n")

console.log("Question 1.10\n");
let sum = 0;
for(i = 0; i <= 100; i++){
    sum += i;
}
console.log("" + sum);
console.log("----------------------------\n")

console.log("Question 1.11\n");
let even = 0;
let odd = 0;
for(i = 0; i <= 100; i++){
    if(i % 2 == 1){
        odd += i;
    }
    if(i % 2 == 0){
        even += i;
    }
}

console.log("The sum of all evens from 0 to 100 is " + even + ". And the sum of all odds from 0 to 100 is " + odd + ".")
console.log("----------------------------\n")

console.log("Question 1.12\n");
let nums = [0 , 0]
for(i = 0; i <= 100; i++){
    if(i % 2 == 1){
        nums[0] += i;
    }
    if(i % 2 == 0){
        nums[1] += i;
    }
}
console.log(nums);
console.log("----------------------------\n")

console.log("Question 1.13\n");
let random = []
for(i = 0; i < 5; i++){
    random[i] = Math.random();
}
console.log(random);
console.log("----------------------------\n")

console.log("Question 1.14\n");
let randomNumbers = [];
for (let i = 0; i < 5; i++) {
   let randNum = parseInt(Math.PI * Math.random() * 100 + i)     
   if(randomNumbers.indexOf(randNum) == -1) {
      randomNumbers.push(randNum);
   }
}
console.log(randomNumbers);

console.log("----------------------------\n")

console.log("Question 1.15\n");
let alphabet = 'abcdefghijklmnopqrstuvwxyz';
let ran = [];

for(i = 0; i < 6; i++){
    if(i%2 == 0){
        ran.push(i);
    }else{
        ran.push(alphabet[parseInt(Math.random() * 25)])
    }
}
console.log(ran.join(''));
console.log("----------------------------\n")