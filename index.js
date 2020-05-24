const express = require('express');
let app = express();

console.log("RUNNING...")
console.log("__dirname = " + __dirname);

app.use((req, res) => {
	let route = req.method + ' ' + req.url;

  // Set/Verify Title Tag
  res.set('title', 'My Content-Type Test Site');
  console.log(res.get('title'))

  
  /* Check client request for a supported content-type */
  res.format({
    'application/xml': function () {
      res.type('xml')
      res.send('<myxml><message>Hey Mr. XML man!</message></myxml>')
    },
    'text/html': function () {
      res.type('html')
      res.send('<p>Hey <b>man</b>!</p>')
    },
    'text/csv': function () {
      res.type('csv')
      res.send('Hey, Mr., CSV, man.')
    },
    'application/json': function () {
      res.type('json')
      res.send({ message: 'hey mr. JSON man' })
    },
    default: function () {
      // log the request and respond with 406
      res.status(406).send('This behavior will not be accepted, that is to say, and you can quote me on this... "No".');
    }
  })
  
  res.end()

});
 
app.listen(3000);