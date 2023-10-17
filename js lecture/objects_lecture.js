// const fighter = {};
// fighter.name = 'Ryu';
//
// console.log(fighter);


const fighter = {
    name: "Ken",
    hp: 100,
    outfit: {
        color: "white",
        type: "karate gi",
    },

};
console.log(fighter["name"]);
console.log(fighter.hp);
console.log(fighter.outfit.color);
console.log(fighter.outfit.type);

const { name, hp } = fighter;

console.log(name);
console.log(hp);

const cars = [
    {
        make: "Toyota",
        model: "Camry",
        features: ["Automatic Windows", "Bluetooth Connectivity", "GPS Navigation"],
        owner: {
            name: "Jane Doe",
            age: 30
        }
    },
    {
        make: "Honda",
        model: "Accord",
        features: ["Automatic Windows", "Great Gas Mileage", "AM/FM Radio"],
        owner: {
            name: "John Doe",
            age: 31
        }
    }
];
cars.forEach((car) => {
    const {make, model, features} = car;
    features.forEach((feature) => {
        console.log(feature);
    });
});

