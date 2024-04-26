let names = ["Lars", "Peter", "Jan", "Bo"];

function myFilter(array, callback) {
    let filteredArray = []; 
    for (let i = 0; i < array.length; i++) { 
        if (callback(array[i])) { // Call the callback function on each element
            filteredArray.push(array[i]); // If the callback returns true, add the element to the result array
        }
    }
    return filteredArray; 
}


let shortNames = myFilter(names, name => name.length <= 3);

console.log(shortNames);

function myMap(array, callback) {
    let mappedArray = []; 
    for (let i = 0; i < array.length; i++) { 
        mappedArray.push(callback(array[i])); // Apply the callback to each element and add it to the new array
    }
    return mappedArray;
}

// Callback function for myMap
let appendJensen = name => name + " Jensen"; // Callback that appends " Jensen" to each name

// Using the custom map function with the names array and the appendJensen callback
let newNames = myMap(names, appendJensen);

console.log(newNames);


//1.2

if (!Array.prototype.myFilter) {
    Array.prototype.myFilter = function(callback, context) {
        let result = [];
        for (let i = 0; i < this.length; i++) {
            if (callback.call(context, this[i], i, this)) {
                result.push(this[i]);
            }
        }
        return result;
    };
}

let short = names.myFilter(function(name) {
    return name.length > 3;
});
console.log(short);


if (!Array.prototype.myMap) {
    Array.prototype.myMap = function(callback, context) {
        let result = [];
        for (let i = 0; i < this.length; i++) {
            result.push(callback.call(context, this[i], i, this));
        }
        return result;
    };
}

let formalNames = names.myMap(function(name) {
    return "Mr. " + name;
});
console.log(formalNames);
