const express = require('express');
var fs = require('fs');
let app = express();

console.log("RUNNING...")
console.log("__dirname = " + __dirname);

app.use((req, res) => {
	// let route = req.method + ' ' + req.url;

  // Set/Verify Title Tag
  res.set('title', 'My Mini Content-Type Test Site');
  var outputFilename = null;
    
  /* Check client request for a supported content-type */
  res.format({
    'application/xml': function () {
      outputFilename = './fixtures/users.xml';
    },
    'text/html': function () {
      res.type('html')
      outputFilename = './public/index.html'
    },
    'text/csv': function () {
      res.type('csv')
      outputFilename = './fixtures/users.csv';
    },
    'application/json': function () {
      res.type('json')
      outputFilename = './fixtures/users.json';
    },
    default: function () {
      // log the request and respond with 406
      res.status(406).send('This behavior will not be accepted, that is to say, and you can quote me on this... "Um, no".');
      res.end()
    }
  })

  if( outputFilename ) {
    fs.readFile( outputFilename, function (err, data) {
      if (err) {
        console.log("Express will handle filename error.")
        //next(err) // Pass errors to Express.
      } else {
        res.send(data);
        res.end()
      }
    })
  }

});
 
app.listen(3000);