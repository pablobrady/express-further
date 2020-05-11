const express = require('express');
let app = express();

// const users = require('./fixtures/users.json');
 
app.use((req, res) => {
	let route = req.method + ' ' + req.url;

  if (req.accepts(['json', 'text'])) {
    res.sendFile("/", {
       root: "./fixture/users.json"
    });
    res.status(200).end();
  } else if (req.accepts('cvs')) {
    res.sendFile("/", {
       root: "./fixture/users.cvs"
    });
    res.status(200).end();
  } else if (req.accepts('xml')) {
    res.sendFile("/", {
       root: "./fixture/users.xml"
    });
    res.status(200).end();
  } else {
    res.render('406', 'Content-type not supported');
  }

});
 
app.listen(3000);