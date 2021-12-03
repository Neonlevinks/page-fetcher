//Example inpuit -> node fetcher.js http://www.example.edu/ ./index.html

//Example output -> Downloaded and saved 3261 bytes to ./index.html
const request = require('request');
const fs = require('fs');

const args = process.argv.slice(2);
const site = args[0];
const endFile = args[1];

request(`${site}`, (error, response, body) => {
  console.log("error: ", error);
  console.log("response: ", response && response.statusCode);
  console.log("body: ", body);
 
  fs.writeFile(`./${endFile}`, body, err => {
    if (err) {
      console.log(err);
      return;
    }
  
    console.log(`Downloaded and saved ${site} to ${endFile}`)
  })
  
});



