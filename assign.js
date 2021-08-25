
let mail = prompt("enter email id");
 let s = /[^\s@]+@[^\s@]+\.[^\s@]+/

   
     if(s.test(mail))
     {
         alert("vaildemail");
        
 }
     else{  
         alert("invalid email please input vaild email eg(amjreh@email.com)");
    
    }
     console.log(mail)


     let pw = prompt("enter password")
     if ( pw=="" )
     {
        alert("invalid password make a strong password ");

     }

     else if(pw.length<8 ) {
         alert("invalid password make a strong password");
        
     }
     else if(pw.length>10)  

     alert("correct password u can go");
     
     else{
           alert("correct password u can go")
      
     }
     console.log(pw);

//let x  =   document.getElementById(" ");
// console.log(x)  

