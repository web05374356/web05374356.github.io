var request = require('request');
var fs = require('fs');

// 網址, callback 
request('http://www.google.com', function (error, response, body) {
  if (!error && response.statusCode == 200) {
    console.log(body) // Show the HTML for the Google homepage.

    var wstream =fs.createWriteStream('pjh.html', {encoding:'utf8'});
    //var wstream = fs.createWriteStream('myOutput.txt');
    wstream.write(body);

    wstream.end();
  }
})