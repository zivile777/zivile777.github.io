//1. objectValues() : Should take an object and return its 
//values in an array

function objectValues(object) {
    var values = [];
    each(object, function(value) {
        values.push(value);
    }); 
    return values;
}

//2. keysToString() : Should take an object and return all 
//its keys in a string each separated with a space
function keysToString(object) {
    return Object.keys(object).join(" ");
}

//3. valuesToString() : Should take an object and return all 
//its string values in a string each separated with a space

function valuesToString(object) {
    var result = [];
    for(var key in object) {
        if(typeof object[key] === 'string' ) {
            result.push(object[key]);
        }
    }
    return result.join(" ");
}

//4. arrayOrObject() : Should take one argument and return 
//'array' if it's an array and 'object' if it's an object 

function arrayOrObject(object) {
    if(Array.isArray(object)) {
            return 'array';
        } else {
            return 'object';
        }
    }
//5. capitalizeWord() : Should take a string of one word, and 
//return the word with its first letter capitalized
    
 function capitalizeWord(string) {
     return string.charAt(0).toUpperCase() + string.slice(1);
 }

//6. capitalizeAllWords() : Should take a string of words and 
//return a string with all the words capitalized 
 function capitalizeAllWords(string) {
     return string.replace(/\b\w+\b/g, function(word) { 
        return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase(); 
    }); 
}
//7. welcomeMessage() : Should take an object with a name 
//property and return 'Welcome <Name>!' 

 function welcomeMessage(object) {
     return "Welcome " + capitalizeWord(object.name) + "!";
}

//8. profileInfo() : Should take an object with a name an
//a species and return '<Name> is a <Species>'
function profileInfo(object) {
    return capitalizeWord(object.name) + ' is a ' + capitalizeWord(object.species);
}
//9. maybeNoises() : Should take an object, if this object has
//a noises array return them as a string separated by a space,
//if there are no noises return 'there are no noises'
function maybeNoises(object){
    if (Array.isArray(object.noises) && object.noises.length) {
        return object.noises.join(" ");
    } else {
        return 'there are no noises';
    }
}
//10. hasWord() : Should take a string of words and a word 
//and return true if <word> is in <string of words>, otherwise return false.
function hasWord(string, x) {
    if (string.indexOf(x) !== -1) {
        return true;
    } else {
        return false;
    }
}

//11. addFriend() : Should take a name and an object and add the name 
//to the object's friends array then return the object
function addFriend(name, object) {
    object.friends.push(name); {
        return object;
    }
}
//12. isFriend() : Should take a name and an object and return 
//true if <name> is a friend of <object> and false otherwise

function isFriend(name, object) {
    if (object.friends === undefined) {
        return false;
   }
    for (var i = 0; i < object.friends.length; i++) {
        if (object.friends[i] === name) {
            return true;
        }
    } return false;
}    
//13. nonFriends() : Should take a name and a list of people, and return 
//a list of all the names that <name> is not friends with
function nonFriends(name, people) {
    var notYourFriends = [];
    each(people, function(person){
        if (person.name !== name) {
            if (person.friends.indexOf(name) === -1) {
                notYourFriends.push(person.name);
            }
        }
    }); return notYourFriends;
}

// function nonFriends(name, people) {
//   return filter(people, (person) => (person.name !== name && person.friends.indexOf(name) === -1));
//}


//14. updateObject() : Should take an object, a key and a value. 
//Should update the property <key> on <object> with new <value>. 
//If <key> does not exist on <object> create it. 

function updateObject(object, key, value){
    object[key] = value; {
        return object;
    }    
}

//15. removeProperties() : Should take an object and an array of strings. 
//Should remove any properties on <object> that are listed in <array> 

function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++) {
        if (object[array[i]] || Array.isArray(object[array[i]]) === false) {
            delete object[array[i]];
        }
    }
}


//16. dedup() : Should take an array and return an array with all 
//the duplicates removed

function dedup(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) === i) {
            result.push(array[i]);
        }
    } return result;
}

//each
function each(collection, action) {
    if(Array.isArray(collection)) {
        for(var i = 0; i < collection.length; i++) {
            action(collection[i], i, collection);
        }
    } else {
        for(var key in collection) {
            action(collection[key], key, collection);
        }
    }
}    