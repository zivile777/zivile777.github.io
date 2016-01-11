var animal = {
    species: "reptiles", 
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
    species: 'birds',
    name: 'Jerome',
    noises: ['quack', 'honk', 'sneeze', 'woosh'] };

animals.push(duck);

var lion = {
    species: 'cats',
    name: 'Simba',
    noises: ['rawr', 'purrr', 'meow'] };

animals.push(lion);

var dog = {
    species: 'wolves',
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

function search(Koala) {
    if(Koala === true) {
        return animals.string(Koala);
    } else {
        return null;
    }
}
console.log(search());