
var animal = {};

animal.species = "cheeta";

animal["name"] = "Jerry";

animal.noises = [];

//console.log(animal);

var noises = [];

noises[0] = "Roar";

noises.push("Meow");

noises.unshift("Braw");

noises[noises.length] = "Scheisse";

// console.log(noises.length);
// console.log(animal);
// console.log(noises[noises.length - 1]);
// console.log(noises);

animal['noises'] = noises;

animal.noises.push("Purr");
//console.log(animal);

var animals = [];

animals.push(animal);
//console.log(animals);

var duck = {
    species: "duck",
    name: "Jerome",
    noises: ['quack', 'honk', 'sneeze', 'woosh']
};

animals.push(duck);
//console.log(animals);

var dog = {
    species: "dog",
    name: "Simba",
    noises: ["woof", "au", "rrrr"]
};

animals.push(dog);

var cat = {
    species: "cat",
    name: "Mikis",
    noises: ["kiaow", "meow", "prrrr"]
};

animals.push(cat);

//console.log(animals.length);

var friends = []; //Array is a good data structure to hold multiple objects

//friendsList has to return a random animal not an integer
function friendsList (animals) {
     return animals[Math.floor(Math.random() * animals.length)]; //animals[random number].name
}
//console.log(friendsList(animals));

friends.push(friendsList(animals).name);
//console.log(friends);

for(var i = 0; i < animals.length; i++) {
   animals[i]['friends'] = friends;
}
console.log(animals);

function search(nameOfAnimal) {
    for(var i = 0; i < animals.length; i++) {
        if(animals[i].name === nameOfAnimal) {
            return animals[i];
        }
    }
}

function edit(nameOfAnimal, object) {
    for(var i = 0; i < animals.length; i++) {
        if(animals[i].name === nameOfAnimal) {
            animals[i] = object;
        }
    }
}

function remove(nameOfAnimal) {
    var removedAnimals = [];
    for(var i = 0; i < animals.length; i++) {
        if(animals[i].name !== nameOfAnimal) {
            removedAnimals.push(animals[i]);
        }
    } animals = removedAnimals;
}

//console.log(remove("Simba"));

function create(objectNew) {
    for (var i = 0; i < animals.length; i++) {
        if (objectNew.name.length > 0 && objectNew.species.length > 0 && objectNew.name !== animals[i].name) {
        } 
    } animals.push(objectNew);
} 
//console.log(animals);
