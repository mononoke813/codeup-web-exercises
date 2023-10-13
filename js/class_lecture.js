//JS CLASSES

    //dogs as an example
    const createDog = (name, gender, breed, weight, color, altered) => {
        let result = {
            name,
            gender,
            breed,
            weight,
            color,
            altered,
            bark: function (){
                console.log(`${this.name}, a ${this.breed} barked!`);
            },
        };

        return result;
    };

class Dog {
    //the constructor method is a special method for creating and initializing an object created with a class
    constructor(name, gender, breed, weight, color, altered){
        this.name = name;
        this.gender = gender;
        this.breed = breed;
        this.weight = weight;
        this.color = color;
        this.altered = altered;
    }
    //methods for the object follow the constructor
    bark() {
        console.log(`${this.name}, a ${this.breed} barked!`);
    }
}

class Car {
    constructor(make, model, year, color) {
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
    honks() {
        console.log(`${this.make} ${this.model} car honks.`);
    }
    turnsLeft () {
        console.log(`All ${this.year} ${this.make}s only turn to the left. It's great for NASCAR! `);
    }
}





class Bulldog extends Dog {
    constructor(name, gender, breed, weight, color, altered) {
        super(name, gender, breed, weight, color, altered);
    }
    bark() {
        console.log(`${this.name}, a ${this.breed}, snuffle growls and boogers popped out.`);
    }
}


//IIFE
//main method
(() => {
    //creating a dog object with a func
    //i.e. factory function

    //dogs as an example
    let dog1 = new Dog("Ryn", "female", "Labrador Retriever", 35, "black", false);
    console.log(dog1);

    let car1 = new Car("Chevrolet", "Tahoe", 2017, "green");
    let car2 = new Car ("Toyota", "Corolla", 1995, "tan");
    car1.honks();
    car2.turnsLeft();


})();