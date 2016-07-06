// objectValues()

function objectValues(object) {
    let output = [];
    for (var key in object) {
        output.push(object[key]);
    }
    return output;
}

///* global keysToString */
//"keysToString() : Should take an object and return all its keys in a string each separated with a space"

function keysToString(object) {
   return Object.keys(object).join(" ");
}

///* global valuesToString */
//"valuesToString() : Should take an object and return all its string values in a string each separated with a space"

function valuesToString(object) {
    let output = [];
    for(var key in object) {
        if(typeof object[key] === "string") {
            output.push(object[key]);
        }
    }
    return output.join(" ");
}

/* global arrayOrObject  */
//"arrayOrObject() : Should take one argument and return 'array' if its an array and 'object' if its an object"

function arrayOrObject(argument) {
    if(Array.isArray(argument)) {
        return "array";
    } else {
        return "object";
    }
}

 /* global capitalizeWord*/
 //"capitalizeWord() : Should take a string of one word, and return the word with its first letter capitalized"
 
 function capitalizeWord(string) {
     return string.charAt(0).toUpperCase() + string.slice(1);
 }
 
 /* global  capitalizeAllWords*/
 //"capitalizeAllWords() : Should take a string of words and return a string with all the words capitalized "
 
 function capitalizeAllWords(string) {
     var output = [];
     var separated = string.split(" ");
     separated.forEach(function(word) {
         output.push(capitalizeWord(word));
     });
     return output.join(" ");
 }
 
 /* global  welcomeMessage*/
 //"welcomeMessage() : Should take an object with a name property and return 'Welcome <Name>!'"
 
 function welcomeMessage(object) {
     return "Welcome " + capitalizeWord(object.name) + "!";
 }
 
 /* global  profileInfo*/
 "profileInfo() : Should take an object with a name an a species and return '<Name> is a <Species>'"
 
 function profileInfo(object) {
     return capitalizeWord(object.name) + " is a " + capitalizeWord(object.species);
 }
 
 /* global  maybeNoises*/
 //"maybeNoises() : Should take an object, if this object has a noises array
 //return them as a string separated by a space, if there are no noises return 'there are no noises'"
 
 function maybeNoises(object) {
         if(object.noises && object.noises.length) {
             return object.noises.join(" ");
     } return "there are no noises";
}

 /* global  hasWord*/
 //"hasWord() : Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false."
 
function hasWord(string, x) {
 return string.indexOf(x) !== -1;
}

/* global addFriend */
//"addFriend() : Should take a name and an object and add the name to the object's friends array then return the object

function addFriend(name, object) {
    object.friends.push(name);
    return object;
}

/* global isFriend */
//"isFriend() : Should take a name and an object and return true if <name> is a friend of <object> and false otherwise"

function isFriend(name, object) {
  var mapped = [];
  var friends = object.friends;
  if (friends === undefined) {
      return false;
  }
  each(friends, function(name) {
    mapped.push(name);
  });
  return mapped.indexOf(name) !== -1;
} 

/* global nonFriends */
//"nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with",
 
function nonFriends(name, people) {
    var notYourFriends = [];
    each(people,function(person){
        if (person.name !== name) {
            if (person.friends.indexOf(name) === -1) {
                notYourFriends.push(person.name);
            }
        }
    }); 
    return notYourFriends;
}

//updateObject() : Should take an object, a key and a value. 
//Should update the property <key> on <object> with new <value>. 
//If <key> does not exist on <object> create it. 

function updateObject(object, key, value) {
     object[key] = value;
     return object;
}


//removeProperties() : Should take an object and an array of strings. 
//Should remove any properties on <object> that are listed in <array> 

function removeProperties(object, array) {
    for (var i = 0; i < array.length; i++) {
        if (object[array[i]] || Array.isArray(object[array[i]]) === false) {
            delete object[array[i]];
        }
    }
}


//dedup() : Should take an array and return an array with all 
//the duplicates removed

function dedup(array) {
    var result = [];
    for (var i = 0; i < array.length; i++) {
        if (array.indexOf(array[i]) === i) {
            result.push(array[i]);
        }
    }
    return result;
}



//each
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

