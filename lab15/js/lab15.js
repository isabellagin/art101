// Isabella Rodriguez
// June 1st, 2023

// Define the endpoint URL
const endpointUrl = 'https://yesno.wtf/api';

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


