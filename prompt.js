
let r = /[^\s@]+@[^\s@]+\.[^\s@]+/


for(let i=0; i<=2; i++){
    let email = prompt(" enter your email")
    if(r.test(email)){
        alert('validmail')
        break;
    }
    else{
        alert('invalid')
    }
    
        window.location.reload(true);
    }
    

for( let i=0; i<=2; i++){
    let pass= prompt("Enter password");
    if(pass || pass.length <= 8){
        alert("This is an empty value, please enter a valid value");
        if(i === 2){
            window.location.reload();
        }
    }
    else{
        break;}
        
    }
