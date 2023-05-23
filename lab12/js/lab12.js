//Author: Isabella Rodriguez
//May 23, 2023

function sortingHatHash(str) {
    len = str.length;
    mod = len % 4;
    if (mod == 0){
        return "Gryffindor"
    }
    else if (mod == 1) {
        return "Ravenclaw"
    }
    else if (mod == 2){
        return "Slytherin"
    }
    else if(mod == 3) {
        return "Huffelpuff"
    }
}
{
        var reg = new RegExp('(\\s|^)'+cls+'(\\s|$)');
    Element.className=ele.className.replace(reg,'');
    }


function sortingHatHash(sortingHatHash)
{
    checksumValue = checksum(str);
    mod = Math.abs(checksumValue) % houseArray.length;
    return houseArray(mod);     // returns an object from the array
}

var myButton = document.getElementById("button");
myButton.addEventListener("click", function()
{
    var name = document.getElementById("input").value;
    var house = sortingHatHash(name);

    newText= "<h2>" + house.title + "!<h2>" + introHTML + "<p>\"" + house.text 
    var outputArea = document.getElementById("output");
    outputArea.innerHTML = newText;
    removeClass(outputArea, "hidden");
    removeClass(document.getElementById("tail-box"), "hidden");
})

var myInput = document.getElementById("input");
myInput.addEventListener("focus", function()
{
    addClass(document.getElementById("output"), "hidden");
    addClass(document.getElementById("tail-box"),"hidden");
})