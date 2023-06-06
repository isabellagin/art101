//Author: Isabella Rodriguez
// June 6, 2023

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
document.writeln("Your name here:",
sortUserName(), "</br>");
