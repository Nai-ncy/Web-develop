let user= document.getElementById("username")
if (sessionStorage.getItem('username')) {
    user .value =sessionStorage.getItem('username')
    
}
user.addEventListener('change',function () {
    sessionStorage.setItem('username',user.value)
    console.log()
    
}

)
//---------------------------------------------------//

let pww= document.getElementById("pw")
if (sessionStorage.getItem('password')) {
    pww.value =sessionStorage.getItem('password')
    
}
pww.addEventListener('change',function () {
    sessionStorage.setItem('password',pww.value)
    console.log()
    
}
)
//-------------------------------------------------//
let recheck=document.getElementById("remeberme")
let userinput= document.getElementById("username")
let pw= document.getElementById("pw")
if (localStorage.checkbox&&localStorage.checkbox&&localStorage.checkbox!==""){

    recheck.setAttribute('checked','checked')
     userinput.value=localStorage.username
    pw.value=localStorage.password
}
else  {
    recheck.removeAttribute('checked')
     userinput.value=""
     pw.value=""
    
    
}
function isremeberme() {
    if (recheck.checked&&pw.value!=="") {
        localStorage.username=userinput.value
        localStorage.password=pw.value
        localStorage.checkbox=recheck.value
    } 
    

    else{
    localStorage.username=""
    localStorage.password=""
    localStorage.checkbox=""
}

}
// CSS desgin
 document.getElementById('submit').style.color ='black'
 document.getElementById('submit').style.height='40px'
 document.getElementById('submit').style.width='60px'
 document.getElementById('submit').style.backgroundColor='grey'


 document.getElementById('remeberme').style.height='20px'
 document.getElementById('remeberme').style.width='30px'

document.getElementById('username').style.backgroundColor='transparent'
document.getElementById('pw').style.backgroundColor='transparent'
 //in this code all color are arya fav.. color important point
 
document.getElementById('h').style.color='grey'
document.getElementById('h2').style.color='grey'
document.getElementById('t').style.color='grey'
// document.body.style.backgroundColor='orange'
function my() {
    if (userinput.value=="aarya"&&pw.value=="281001") {
        window.location.href="hiii.html"
        
    }else{
        alert("invaild your not aarya")
    }
    
}



   