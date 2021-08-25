// <<<<<----------------AJAX CALLING USING HTTP REQUEST------>>>>>

  const container   = document.getElementById("Container");

  const request = new XMLHttpRequest;
  request.open('get','https://restcountries.eu/rest/v2/name/nepal');
  request.send();

  request.addEventListener('load', function(){
      const [data]= JSON.parse(this.responseText);
      const htmldata=` `
    //   <div id="card">
    //       <div> 
    //         <img src="${data.flag}" alg="" class="cardbody">
    //         <h1>    
    //            ${data.name}<span></span>
    //         </h1>
    //         <p>capital:${data.capital}</p>
    //      </div>
    //   </div>`;


container.insertAdjacentHTML("afterbegin",htmldata)

  })      


//   <<<<<<----------------FETCH  API-- (PROMISES)-------->>>>>>>>>>


const jokes = document.getElementById("joke");
const jokeBtn = document.getElementById('jokebtn');

const generatejoke =()=>{
  
    setHeader={
        header:{
            accept:"application/json"
        }
    }

    fetch("https://icanhazdadjoke.com", setHeader)
    .then((res) => res.json())
    .then((data)=>
    {jokes.innerHTML=data.joke; 
    }).catch((error)=>{
        console.log(error);
    })
 
}

jokeBtn.addEventListener('click',generatejoke);
generatejoke();


//   <<<<<<----------------FETCH  API-- (ASYNC AWAIT)-------->>>>>>>>>>


const jokes = document.getElementById("joke");
const jokeBtn = document.getElementById('jokebtn');


const generatejoke = async () =>{

    try{const setHeader={
        header:{
            accept: 'applicationjson'
        }
     }

     const res= await fetch("http://youtube.com", setHeader);
     const data= await res.json();
     jokes.innerHTML=data.joke
   }
    catch(err){
    console.log(error);}
}

jokeBtn.addEventListener("click",generatejoke);
generatejoke();



