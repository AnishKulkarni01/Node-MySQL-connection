

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
        var l1 = document.createElement('li');
            l1.textContent ="(ID , PASSWORD )";
            list.appendChild(l1);
        res.data.forEach(function (row) {
            var li = document.createElement('li');
            li.textContent = " ( "+row.idlogin + " , " + row.password+" ) ";
            list.appendChild(li);
        });
        document.getElementById('#t2').appendChild(list);
    }).catch(err => console.log(err));
})


const b21=document.getElementById('b21')
const f21=document.getElementById('pid_form')
var patientmail=document.getElementById('plmail').value


b21.addEventListener('click',(e)=>{
    e.preventDefault()
    var patientmail=document.getElementById('plmail').value
    console.log("hello")
    b21.disabled=false;
    console.log(patientmail)
    axios.get("http://localhost:3000/patientID/"+patientmail, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }).then( res => {
        console.log(res.data)
        let list = document.createElement('ul');
        
        res.data.forEach(function (row) {
            var li = document.createElement('li');
            li.textContent = row.p_id;
            list.appendChild(li);
        });
        document.getElementById('#t21').appendChild(list);
    }).catch(err => console.log(err));
})



const button22=document.getElementById('b22')
console.log("ok")

button22.addEventListener('click',(e)=>{
    e.preventDefault()
    var doctorspec=document.getElementById('dspec').value
    var bookdt=document.getElementById('bdt').value
    var booktm=document.getElementById('btm').value
    console.log("chalra hai")
    button22.disabled=true;
    axios.get("http://localhost:3000/showAvailableDoctors/"+bookdt+"/"+booktm+"/"+doctorspec, {
        headers: {
            'Access-Control-Allow-Origin': '*',
        }
    }).then( res => {
        console.log(res.data)
        let list = document.createElement('ul');
        var l1 = document.createElement('li');
            l1.textContent ="( ID , NAME , SPECIALIZATION  )";
            list.appendChild(l1);
        res.data.forEach(function (row) {
            var li = document.createElement('li');
            li.textContent = " ( "+ row.d_id + " , "+row.d_name + " , "  + row.spec +" ) ";
            list.appendChild(li);
        });
        document.getElementById('#t22').appendChild(list);
    }).catch(err => console.log(err));
})
