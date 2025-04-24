const express = require('express');
const app = express();
let { people } = require('./data');



//static assets
app.use(express.static('./methods-public'));

app.use(express.urlencoded({ extended: true }));

/* 
in the index html file a post form is provieded, so this function @ line 16 listens to every post-requess provied on the app and executes.
 */
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

/* 
this functon listens the path api/people.
 */
app.post('/api/people',(req,res)=>{
    res.status(200).send("success");
})
app.listen(3000, () => {
    console.log('app listening on port 5000');

})

