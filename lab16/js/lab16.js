//index.js - Lab 16: JSON and APIs
//Author: Lily Nguyen
//Date: 5 June 2023


var URL = "https://xkcd.com/json.html";

var URLpre ="https://xkcd.com/";
var URLpost = "info.0.json";

function make_safe(str)
{
    return str.replace(/'/g);
}
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
    document.writeln("Oh hey, I fixed your name:",
    sortUserName(), "</br>");
    
    
    
    
    