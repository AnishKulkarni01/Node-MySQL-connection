//const { response } = require("express")

// const { response } = require("express")


const myform=document.getElementById('login_form')
const id=document.getElementById('id')
const password=document.getElementById('password')

myform.addEventListener("submit",(e)=> {
    e.preventDefault()
    console.log(id.value)
    console.log(password.value)
    fetchURL='/addUser?id='+id.value+'&password='+password.value
    fetch(fetchURL).then((response)=>{
        console.log(response);
    })
})

axios.get("http://localhost:3000/route", {
    headers: {
        'Access-Control-Allow-Origin': '*',
    }
}).then( res => {
    console.log(res.data)
    let list = document.createElement('ul');
    res.data.forEach(function (row) {
        var li = document.createElement('li');
        li.textContent = row.idlogin + " " + row.password;
        list.appendChild(li);
    });
    document.getElementById('#t1').appendChild(list);
}).catch(err => console.log(err));




