const express = require('express');
const path = require('path');
const app = express();
dir = __dirname;

//  app.use((req, res) => {
//      res.status(404).send('<h1>resource not found</h1>')

//  });

//setup static and middleware
//static assets mean is a file that a serve does not have to change it.

//javascript is a static asset even thought it makes the pages dynamic, it does not modify the database
app.use( express.static( path.join(__dirname,('./express/navbar-app/'))));


app.listen(5000, () => {
    console.log("app listening on port 5000");
});
//app.get
//app.post
//app.delete
//app.put
//app.use
//app.listen


//whereve you static pages resides the folder should be called public
