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
// Define the endpoint URL
const endpointUrl = 'https://xkcd.com/json.html';

// Define the request configuration
const requestOptions = {
  method: 'GET',
};

// Send the API request
fetch(endpointUrl, requestOptions)
  .then(response => response.json()) // Parse the response as JSON
  .then(data => {
    // Process the response data
    console.log('Response:', data);
    const answer = data.answer;
    const image = data.image;
    // ... do something with the answer and image ...
  })
  .catch(error => {
    // Handle any errors
    console.error('Error:', error);
  });


    
    
    
    
    