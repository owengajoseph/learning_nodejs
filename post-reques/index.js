const express = require('express');
const app = express();
let { people } = require('./data');



//static assets
app.use(express.static('./methods-public'));

app.use(express.urlencoded({ extended: true }));
app.post('/login', (req, res) => {
    const { name } = req.body;
    if (name) {
        res.status(200).send("welcome");
    }
    res.status(404).send("please provide credidentials");

})

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people });
})


app.listen(5000, () => {
    console.log('app listening on port 5000');

})

