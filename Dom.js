document.body.style.background = "grey"
// document.style.color = "red"
// alert(location.href);
// if(confirm("wnna to visit")){
//     location.href= "http://www.youtube.com"
// }

console.log("program to get link in a page  that include specific word");
 
let word= "python"
let links = document.links
console.log(links);
let href;
Array.from(links).forEach(function(element){
href= element.href;
if(href.includes(word)){
    console.log(href);
}
});



console.log("localstorage aand session storage")

localStorage.setItem("key",'naincy')
let name= localStorage.getItem("key")
console.log(name);

localStorage.removeItem("key");
localStorage.clear();


console.log(" if the key data is not string type")

let array = ['yellow', 'green', 'pink'];
localStorage.setItem("color",JSON.stringify(array))
let colorr =JSON.parse( localStorage.getItem('colorr'));
console.log(colorr)   

