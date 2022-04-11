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
})

app.get('/checkPatient', (req,res)=>{
    console.log(req.query)


    db.query('select * from login where idlogin=? and password=?',
    [req.query.id,req.query.password],(err,rows,fields)=>{
        console.log(rows)

       
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
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

app.get('/showPatients',(req,res)=>{
    db.query('select * from patient',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
})

app.get('/showDoctors',(req,res)=>{
    db.query('select * from doctor',(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
})

app.get('/patientID/:mail',(req,res)=>{
    db.query('select p_id from patient WHERE p_mail= ?',[req.params.mail],(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
})


app.get('/addPatient', (req,res)=>{
    console.log(req.query)


    db.query('insert into patient (p_name,p_gend,age,address,p_pwd,p_mail) VALUES (?,?,?,?,?,?)',
    [req.query.namep,req.query.genderp,req.query.agep,req.query.addressp,req.query.passp,req.query.mailp],(err,rows,fields)=>{
        if(!err)
        res.send(rows);
        else
        console.log(err);
    })
})
