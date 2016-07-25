// _.defaults(object, [sources])
// # Ⓢ Ⓝ
// Assigns own and inherited enumerable string keyed properties of source 
//objects to the destination object for all
// destination properties that resolve to undefined. 
// Source objects are applied from left to right. 
// Once a property is set, additional values of the same property are ignored. 
//Note: This method mutates object.
// Arguments
// 1. object (Object): The destination object.
// 2. [sources] (…Object): The source objects.
// Returns
// (Object): Returns object.
// Example
// _.defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
// // → { 'user': 'barney', 'age': 36 }
function defaults(object, array) {
    each(array, function(objNew){
      each(objNew, function(key){
        if(Object.keys(object) !== key) {
          
        }
      });
    });
  return object;
}

var object = {name: "Zivile"};
var array = [{name: "Petras"},{age: 28}];

console.log(defaults(object, array));

function each(collection, action) {
    if (Array.isArray(collection)) {
        for (var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    }
    else {
        for (var key in collection) {
            action(collection[key], key, collection);
        }
    }
}

var object = {name: "Zivile"};
var array = [{name: "Petras"},{age: 28}];

console.log(defaults(object, array));
function extend(ob1) {
    each(arguments, function(ob2) {
        each(ob2, function(value, key) {
            ob1[key] = value;
        });
    });
    return ob1;
}


// _.once(func)
// # Ⓢ Ⓝ
// Creates a function that is restricted to invoking func once. Repeat calls to 
// the function return the value of the first invocation. 
// The func is invoked with the this binding and arguments of the created function.
// Since
// 0.1.0
// Arguments
// 1. func (Function): The function to restrict.
// Returns
// (Function): Returns the new restricted function.
// Example
// var initialize = _.once(createApplication);
// initialize();
// initialize();
// // `initialize` invokes `createApplication` once


// _.memoize(func, [resolver])
// # Ⓢ Ⓝ
// Creates a function that memoizes the result of func. If resolver is provided,
// it determines the cache key for storing the result based on the arguments 
// provided to the memoized function. By default, the first argument provided 
// to the memoized function is used as the map cache key. Thefunc is invoked with
// the this binding of the memoized function. Note: The cache is exposed as the 
// cache property on the memoized function. Its creation may be customized by 
// replacing the _.memoize.Cacheconstructor with one whose instances implement 
// the Map method interface of delete, get, has, and set.
// Since
// 0.1.0
// Arguments
// 1. func (Function): The function to have its output memoized.
// 2. [resolver] (Function): The function to resolve the cache key.
// Returns
// (Function): Returns the new memoized function.
// Example
// var object = { 'a': 1, 'b': 2 };
// var other = { 'c': 3, 'd': 4 };

// var values = _.memoize(_.values);
// values(object);
// // → [1, 2]

// values(other);
// // → [3, 4]

// object.a = 2;
// values(object);
// // → [1, 2]

// // Modify the result cache.
// values.cache.set(object, ['a', 'b']);
// values(object);
// // → ['a', 'b']

// // Replace `_.memoize.Cache`.
// _.memoize.Cache = WeakMap;


// _.delay(func, wait, [args])
// # Ⓢ Ⓝ
// Invokes func after wait milliseconds. Any additional arguments are provided to func when it’s invoked.
// Since
// 0.1.0
// Arguments
// 1. func (Function): The function to delay.
// 2. wait (number): The number of milliseconds to delay invocation.
// 3. [args] (…*): The arguments to invoke func with.
// Returns
// (number): Returns the timer id.
// Example
// _.delay(function(text) {
//  console.log(text);
// }, 1000, 'later');
// // → Logs 'later' after one second.


// _.shuffle(collection)
// # Ⓢ Ⓝ
// Creates an array of shuffled values, using a version of the Fisher-Yates shuffle.
// Since
// 0.1.0
// Arguments
// 1. collection (Array|Object): The collection to shuffle.
// Returns
// (Array): Returns the new shuffled array.
// Example
// _.shuffle([1, 2, 3, 4]);
// // → [4, 1, 3, 2]
