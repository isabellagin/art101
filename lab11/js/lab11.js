// index.js-Lab 11: Libraries &jQuery
// Author: Isabella Rodriguez-Ginnold
// Date: May 16 2023


//adding to sections
$("#challenge").append("<button id='c-button'>Button</button.");
$("#problem").append("<button id='p-button'>Button</button.");
$("#results").append("<button id='r-button'>Button</button.");

//Functions
$("#c-button").click(function(){
    $(this).parent().toggleClass("special");
})

$("#p-button").click(function(){
    $(this).parent().toggleClass("special");
})

$("#r-button").click(function(){
    $(this).parent().toggleClass("special");
})