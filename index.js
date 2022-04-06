const path=require('path')
const express = require('express');
const mysql =require('mysql');

const publicDirectoryPath=path.join(__dirname,'./public')



var app=express();
const bodyparser =require('body-parser');
app.use(bodyparser.json());
const cors = require('cors');
app.use(cors())

app.use(express.static(publicDirectoryPath))

var db=mysql.createConnection({
    host:'localhost',
    user: 'root',
    password :'1234',
    database:'hmsDB'

});
db.connect((err)=>{
if(!err)
console.log('DB connection succeeded');
else
console.log('DB connection failed \n Error : '+JSON.stringify(err,undefined,2));
});
app.listen(3000,()=>console.log('express server is running at port no 3000'));

app.get('', (req,res)=>{
    res.send('index.html')
})

app.get('/addUser', (req,res)=>{
    console.log(req.query)


    db.query('insert into login (idlogin,password) VALUES (?,?)',
    [req.query.id,req.query.password],(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })


    res.send("Success")
})

app.get('/route',(req,res)=>{
    db.query('select * from login',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
})

app.get('/route/:id',(req,res)=>{
    db.query('select * from login WHERE idlogin= ?',[req.params.id],(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
})
