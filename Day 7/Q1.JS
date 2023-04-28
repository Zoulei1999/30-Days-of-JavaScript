//1
function fullname (){
    console.log("Richard Zou")
}
fullname();
//2
function fname(){
    let firstname = "Richard";
    let lastname = "Zou";
    console.log(firstname + " " + lastname);
}
fname();
//3
function addnumber(){
    let num1 = 10;
    let num2 = 20;
    let sum = num1 + num2;

    console.log(sum);
}
addnumber();
//4
function areaofRectangle(){
    let length = 5;
    let width = 10;
    let area = (length * width);

    console.log(area);
}
areaofRectangle();
//5
function perimeterofRectangle(){
    let length = 5;
    let width = 10;
    let per = 2 *(length + width);

    console.log(per);
}
perimeterofRectangle();
//6
function volumeOfRectPrism(){
    let length = 10;
    let width = 20;
    let height = 5;
    let volume = length * width *height;

    console.log(volume);
}
volumeOfRectPrism();
//7
function areaOfCircle(){
    let radius = 5;
    let area = 3.14 * radius * radius;

    console.log(area)
}
areaOfCircle();
//8
function circumOfCircle(){
    let radius = 5;
    let circum = 2 * 3.14 * radius;
    console.log(circum);
}
circumOfCircle()
//9
function calDensity(){
    let mass = 250;
    let volume = 50;

    let density = mass / volume;

    console.log(density);
}
calDensity();
//10
function calSpeed(){
    let distance = 150;
    let time = 30;

    let speed = distance / time;

    console.log(speed);
}
calSpeed();
//11
function calWeight(){
    let mass = 1500;
    let gravity = 300;

    let weight = mass * gravity;

    console.log(weight);
}
calWeight();
//12
function convertCelsiusToFahrenheit(){
    let oC = 25;
    let oF= (oC * 9/5) + 32;

    console.log(oF)
}
convertCelsiusToFahrenheit();
//13
function BMI(){
    let weight = parseInt(prompt("Enter Weight in KG: "));
    let height = parseInt(prompt("Enter Height in M"));

    let BMI = weight / (height * height);
    console.log(BMI);

    if(BMI < 18.5){
        console.log("Underweight");
    }else if(BMI >= 18.5 && BMI <= 24.9){
        console.log("Normal weight");
    }else if(BMI >= 25 && BMI <= 29.9){
        console.log("Overweight");
    }else{
        console.log("Obese");
    }
}
BMI();
//14
function checkSeason(M){
    if(M == "August" || m == "September" || M == "October"){
        return("Autumn");
    }else if(M == "November" || M == "December" || M == "January" ){
        return("Winter")
    }else if(M == "February" || M == "March" || M == "April" ){
        return("Spring")
    }else if(M == "May" || M == "June" || M == "July" ){
        return("Summer")
    }
}

let month = prompt("Enter month: ");
console.log(checkSeason(month));
//15
function findMax(num1 , num2){
    let max = 0;
    for(let i = num1; i <= num2; i++){
        if(max < i){
            max = i;
        }
    }
    return max;
}

console.log(findMax(0,-10));