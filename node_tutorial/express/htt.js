const express = require('express');

const app = express();


app.get('/', (req, res) => {
    res.status(200).send('home page');

})

app.get('/about', (req, res) => {
    res.status(200).send('About page')
});

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
