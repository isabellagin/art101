
// Author: Isabella Rodriguez
// Date: May 9, 2023

function isEven(x){
    return (x % 2 == 0);
}

// test function
console.log(" Is 1 Even? ", isEven(1));
console.log("Is 2 Even? ", isEven(2));

array = [100, 81, 4, 16, 42, 144, 1000]
console.log("My Array", array);

var result = array.map(isEven);
//this should retun [true, false, true, true, true, true, true]
console.log("Test of evenness of array:", results);

var result = array.map( function(x){
    return x ** 0.5;
})
//should return (10, 9, 2, 4, 6.4807069840786, 12, 100)
console.log("Squareroot of array:", results);
