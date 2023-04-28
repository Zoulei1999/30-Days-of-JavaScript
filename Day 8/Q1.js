//1
const dog = {};
//2
console.log(dog);
//3
dog['name'] = "John";
dog['legs'] = "White";
dog['color'] = "Black";
dog['age'] = 3;
dog['bark'] = () => "Woof Woof";
//4
console.log(dog.name,dog.legs,dog.color,dog.age,dog.bark());

dog['breed'] = "huskey";
dog['getDogInfo']  = () => {
    console.log(dog.name);
    console.log(dog.age);
    console.log(dog.breed);
}
dog.getDogInfo();