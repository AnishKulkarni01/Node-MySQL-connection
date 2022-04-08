

const button3=document.getElementById('b3')
console.log("ok")

button3.addEventListener('click',(e)=>{
    e.preventDefault()
    console.log("chalra hai")
    button3.disabled=true;
    axios.get("http://localhost:3000/route", {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }).then( res => {
        console.log(res.data)
        let list = document.createElement('ul');
        res.data.forEach(function (row) {
            var li = document.createElement('li');
            li.textContent = row.idlogin + "  " + row.password;
            list.appendChild(li);
        });
        document.getElementById('#t2').appendChild(list);
    }).catch(err => console.log(err));
})
