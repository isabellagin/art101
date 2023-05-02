/**
 * Author:   Isabella Rodriguez-Ginnold
 * Created:   May 4, 2023
 * 
 * Lab 7 Functions
 **/

// sortUserName- a function that takes user input and sorts the letters
    // of their name
function sortUserName() {
    var userName = window.prompt("Hi. Please tell me your name so I can fix it.");
    console.log("username =", userName);
    //split string to array
    var NameArray = userName.split('');
    console.log("nameArray =", NameArray);
    //sort array
    var nameArraySort = NameArray.sort();
    console.log("nameArraySort =", nameArraySort);
    //join array back to the string
    var nameSorted = nameArraySort.join ('');
    console.log("nameSorted=", nameSorted);
    return nameSorted;
    
}
//output
document.writeln("Oh hey, I fixed your name: Isabella",
sortUserName(), "</br>");





