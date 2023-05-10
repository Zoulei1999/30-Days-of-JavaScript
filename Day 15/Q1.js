//Question 1
class Animal{
    constructor(name , age, color, leg){
        this.name = name
        this.age = age
        this.color = color
        this.leg = leg
    }

    getInfo(){
        return `${this.name} is ${this.age} years old, it has ${this.legs} legs and is ${this.color}`;
    }

    set setName(name){
        this.name = name;
    }

    set setAge(age){
        this.age = age;
    }

    set setColor(color){
        this.color = color
    }

    set setLeg(leg){
        this.leg = leg;
    }
}

class dog extends Animal{
    constructor(name ,age ,color, leg, eyeColor){ super(name, age, color, leg)
        this.eyeColor = eyeColor;
    }

    getInfo(){
        return super.getInfo() + ` Eye color is ${this.eyeColor}`
    }

    woof(){
        return 'dog Sounds'
    }
}

let dogo = new dog('Sam', 10, 'White', 'Long', 'Black');


class cat extends Animal{
    constructor(name ,age ,color, leg, breed){ super(name, age, color, leg)
        this.breed = breed;
    }

    getInfo(){
        return super.getInfo() + ` breed color is ${this.breed}`
    }

    meow(){
        return 'cat Sounds'
    }
}

let cats = new cat('Jack', 8, 'black and white', 'short', 'Fold');

console.log(cats.getInfo());
console.log(dogo.getInfo());
console.log(dogo.woof())
console.log(cats.meow())

