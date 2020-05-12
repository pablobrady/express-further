const express = require('express');
let app = express();

console.log("RUNNING...")
// const users = require('./fixtures/users.json');

app.use((req, res) => {
	let route = req.method + ' ' + req.url;

  console.log(req.accepts('json'))
  console.log(req.accepts('xml'))

  /* Issue! */
  if (req.accepts(['json', 'text'])) {
    res.type('json');
    res.sendFile("/", {
       root: "./fixture/users.json"
    });
    res.status(200);
  } else if (req.accepts('cvs')) {
    res.type('cvs');
    res.sendFile("/", {
       root: "./fixture/users.cvs"
    });
    res.status(200);
  } else if (req.accepts('xml')) {
    res.type('xml');
    res.sendFile("/", {
       root: "./fixture/users.xml"
    });
    res.status(200);
  } else {
    res.render('406', 'Content-type not supported');
  }

  res.end()

});
 
app.listen(3000);