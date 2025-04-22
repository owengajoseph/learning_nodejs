const express = require('express');

const app = express();

//the moment you have entered into the home page of the website.
app.get('/', (req, res) => {
    res.status(200).send('home page');

})

app.get('/about', (req, res) => {
    res.status(200).send('About page')
});

//any other apart from the above.
app.use('*/', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')

});

app.listen(5000, () => {
    console.log("app listening on port 5000");
});
//app.get
//app.post
//app.delete
//app.put
//app.use
//app.listen
