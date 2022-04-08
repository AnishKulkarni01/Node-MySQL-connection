//const { response } = require("express")

// const { response } = require("express")

console.log("working")
const myform=document.getElementById('login_form')
const id=document.getElementById('id')
const password=document.getElementById('password')

const plform=document.getElementById('plogin_form')
const pmail=document.getElementById('lmail')
const ppass=document.getElementById('lpass')
const b2=document.getElementById('testbtn')
b2.addEventListener("click",(e)=> {
    e.preventDefault()
    console.log(id.value)
    console.log(password.value)
    fetchURL='/addUser?id='+id.value+'&password='+password.value
    fetch(fetchURL).then((response)=>{
        console.log(response);
       
    })
})

function submitlogin(){
    const pmail=document.getElementById('lmail')
    const ppass=document.getElementById('lpass')
    console.log(pmail.value)
    console.log(ppass.value)
    fetchURL='/checkPatient?id='+pmail.value+'&password='+ppass.value
    fetch(fetchURL).then((response)=>{
        console.log(response);
        window.open('index2.html')
    })

}

const button=document.getElementById('b1')

button.addEventListener('click',(e)=>{
    e.preventDefault()
    button.disabled=true;
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
})





