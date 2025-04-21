const express = require('express');
console.log("app listening on port 5000");
const app = express();
import { logger } from './logger';

//req=> middleware=>res

/* 
instead of writting loger in every route we can use app.use()
and it is going to be called on every req

 */
app.use(logger);
app.get('/',(req,res)=>{
    res.send("Home");
})

app.get('/about',(req,res)=>{
    res.send("Home");
})


app.listen(5000, () => {
})