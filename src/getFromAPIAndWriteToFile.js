// Read through `demo/chainingWithPromises.js` before completing this exercise

var fs = require('fs');
var request = require('request');
var Promise = require('bluebird');

// Using `fs.writeFile`, the `request` module, and promises,
// build out `getFromAPIAndWriteToFile` to hit an API's GET request endpoint,
// and write the body of its response to a file whose path is passed in
var getFromAPIAndWriteToFile = function (apiURL, writeFilePath) {
  // YOUR CODE HERE
  return new Promise(function(resolve, reject) {
    request.get(apiURL['uri'], function(err, response, body) {
      if (err) {
        reject(err);
      } else if (response.statusCode !== 200) {
        reject(response.statusCode);
      } else {  
        resolve(body);
      }
    });
  }).then(function (content) {
    fs.writeFile(writeFilePath, content);
  });
};

module.exports = getFromAPIAndWriteToFile;
