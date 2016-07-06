var animal = {
    species: "crocodile", 
    name:"Steve", 
    noises: [] };
               
var noises = ["Arrrr", "quack"];

noises.unshift("Grooowl");
noises.push("pooopoooo");

animal['noises'] = noises; /// pay attention to this!!!!!!
noises.push("blaaaa");

var animals = [];
animals.push(animal);

var duck = {
    species: 'duck',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh'] };

animals.push(duck);

var lion = {
    species: 'lion',
    name: 'Simba',
    noises: ['rawr', 'purrr', 'meow'] };

animals.push(lion);

var dog = {
    species: 'dog',
    name: 'Rikis',
    noises: ['au', 'wuf', 'grrr'] };
    
animals.push(dog);    

//console.log(animals);

//array is good for containing a list, as it naturally is capable of containing a list of indeces
 
var friends = [];
//friendsList has to return a random animal not an integer
function friendsList (animals) {
     return Math.floor(Math.random() * animals.length); // === random number
}

friends.push(animals[friendsList(animals)].name);


// console.log(friendsList(animals[]);
 
//console.log(animals[friendsList(animals)]);//animals are an array that uses random number through friendsList that gets it from animals array

//console.log(friends);

animal['friends'] = friends;

//console.log(animal);


//part 2
//console.log(animals);

function search(nameOfAnimal) {
    for (var i = 0; i < animals.length; i++) {
        if (nameOfAnimal === animals[i].name) {
            return animals[i];
        } 
    }
}

 //console.log(search('Simba'));
 
 function edit(nameOfAnimal, object) {
     for (var i = 0; i < animals.length; i++) {
         if (nameOfAnimal === animals[i].name) {
             return animals[i] = object;
         }
     }
 }
 
 function remove(nameOfAnimal) {
     var nonAnimals = [];
     for (var i = 0; i < animals.length; i++) {
         if (nameOfAnimal !== animals[i].name) { //If that name doesn't equal to the object name, we want to remove - push it into a new array
            nonAnimals.push(animals[i]);
         }
     } animals = nonAnimals;
 }
//remove('Simba');
//console.log(animals);

function create(objectNew) {
    for (var i = 0; i < animals.length; i++) {
        if (objectNew.name.length > 0 && objectNew.species.length > 0 && objectNew.name !== animals[i].name) {
             // I have to push only 1 instead 4(for each animal)
        } 
    } animals.push(objectNew);
} 
//console.log(animals);