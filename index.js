const express = require('express');
let app = express();
 
const users = require('./fixtures/users.json')
const emails = require('./fixtures/emails.json')
const admins = require('./fixtures/admins.cvs');
const guestbook = require('./fixtures/guests.xml');
 
app.use((req, res) => {
 let route = req.method + ' ' + req.url;
 
 res.type("json"); // Creates "Content-Type" in the response header (RESPONSE TYPE).
 
 if (route === 'GET /users') {
   res.send(users);
 } else if (route === 'GET /emails') {
   res.send(emails);
 } else {
   res.end('You asked for ' + route);
 }
});
 
app.listen(3000);