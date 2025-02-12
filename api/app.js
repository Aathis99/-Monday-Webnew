const express = require('express');
const cors = require('cors');
const app = express();
const mysql =require('mysql')


app.use(cors());
const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"travel",
})
app.get('/attractions',function(req,res,next){
    db.query("SELECT * FROM attractions ",function(err,result,fields){
        if(err) throw err;
        res.json(result)
    });
})

app.listen('8081',()=>{
    console.log('Server is running on port 8081');
})


