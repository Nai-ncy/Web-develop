console.log("hello damini");
console.warn("you are wrong");
var u=5;
console.log(u);
console.log(typeof(u));
var marks = 90; //int - Number
var Name = "deepanshi"; //string - String
var percentage = 94.2; //float - Number
var gender = "F"; //char - String
var Pass = true; //boolean
var Rank; //undefined
var prize = null; //object [primitive datatype] exception
console.log("Scope 1");
console.table({ marks, Name, percentage, gender, Pass, Rank, prize }); //destructuring
 //scope1 
 
 const x = 20;
 console.log(x);
 {
 //scope 2
 const x = 10;
console.log(x);
}
 console.log(x);
 //x = 30;
 //console.log(x);
 let arr = [4, 5, 4, "deep", true];
console.log(arr );

let student = {
    Name: "Harsh",
    Section: "E",
    Age: 22,
    graduate: true,
  };
  
  console.log(student);



  function school() {
    console.log("I am a function amd my type is " + typeof school);
  }
  
  school();
  var date = new Date();
console.log(date.getDate());
console.log(typeof date);

var myVar =(34);
var myVar=myVar.toString();
console.log(myVar);
console.log(typeof myVar);


var myVar = "55.5";
myVar = Number(myVar);
console.log(myVar);
console.log(typeof myVar);


var myVar = "55.5";
myVar = parseInt(myVar);
console.log(myVar);
console.log(typeof myVar);

var rank = "55";
var status = 100;
// kon-cat-a-net
var result = rank + status;
console.log(result);
// EXERCISE
var _1my__name = "naina";
console.log( _1my__name)
console.log(typeof(_1my__name))
console.log(10 +"2")
console.log(10 - "7")
console.log("java" - "script")
console.log("  " + " ")
console.log(true +true)
console.log(Number. edccNaN === NaN);
console.log(3**3 )
var tomr = 'sunny'
// if-else 
if(tomr == 'rain'){
  console.log("take a raincoat")
}   
else{
  console.log("go with flow")
}
// if-else nesting
var year = 2020;
if(year % 4 === 0){
if (year % 100 ===0){
  if(year% 400 === 0){
    console.log("this year" + year + "is leap year")
  }else{
    console.log("this year" + year + "is not leap year")
  }
}
else{
  console.log("this year" + year + "is leap year")
}
}else{
  console.log("this year" + year + "is not leap year")
}
// conditinal ternary operator
var age = 18;
console.log((age >= 18)? "you are eligibleeeee to meeeeeeeeee ": "uh r beautifulllllllllll to meeeeeeeeee")
// if else if
var area = "triangle" 
var PI = 3.14, l=5, b=4, r=3;
if(area == "circle"){
  console.log(" area of circle is:" + PI*r**2 )
}else if( area== "triangle"){
  console.log(" area of triangl is:" + (l*b)/2 )
}else if (area == "reactangle"){
  console.log(" area of reactangle is:" + (l*b) )
}else{
  console.log ("enter valid data")
}

// switch caseeeeeeeee
var area = 'circle'; 
var PI = 3.14, l=5, b=4, r=3;
switch(area){
  case 'circle':
    console.log(" area of circle is:" + PI*r**2 );
  break;

  case 'triangle':  
    console.log(" area of triangl is:" + (l*b)/2 );
break;
  case 'reactangle':
      console.log(" area of reactangle is:" + (l*b));
break;
default:
  console.log ("enter valid data")  
}

// console.log("..........................................")
// WHILE LOOP STATEMENT..........................................................................

var num = 0;
 block scope
while(num<=10){
  console.log(num);
  num++;
}

// DO-WHILE LOOP STATEMENT......................
// var num = 0;
// do{ console.log(num);
//   num++;
// }while(num<=10); 

// FOR LOOP
//  for( initializer; Condition ; iteration);
// code execute 
  

// Question: wap to rint table of given number
 
// var num = 8;
// var i;
// for( i=1; i<=10; i++){
//   console.log( num + " * "+ i +  " = " + (num*i));
// }

// .............FUNCTION..................

// function declaration.......

// function sum(){
//   var a=5, b=7;
//   var tot= a+b;
//   console.log (tot)
// } 



// function call.....
// sum(); 


// function parameter''''''''''

// function sum(a,b){ 
//  var tot = a+b;          
//   console.log(tot);
// } 
 
// function argument.........
// sum(20,39);

// function expression...............................
// function sume(a,b){
//   var total;
//   return total = a+b;
// }
  
// var exp = sume(3,5); 

//  console.log('the sum of these value' + exp );

// // function anonomyous
// var funexp = function(a,b){
//   return total = a+b;
// }

// var sum = funexp(5,8);
// console.log("the sum of two no. is" + sum);
   

// ***********************ECMA script*********************

//.... var vs let vs const.....
// function biodata(){
//   var myfirstname ="naina";
// console.log (myfirstname);
 
// if(true){
//   var mylastname ="kamthan"
//   console.log('inner' + mylastname)
//   console.log ("inner" + myfirstname);
// }

// console.log('inner' + mylastname) 
// }

// biodata();
// // .............................................

 
// function biodata(){
//   let myfirstname ="naina";
// console.log (myfirstname);

// if(true){
//   let mylastname ="kamthan"
//   console.log('inner' + mylastname)
//   console.log ("inner" + myfirstname);
// }

// console.log('inner' + mylastname) 
// }

// biodata();


// .............template string.............

// console.log("table of" num + "*" + i + "=" + (num *i) )
// console.log(`table of ${num} * ${i} = ${num*i}`)

// ..........................

// function mult(a,b= 5){
//   return a*b;
// }

// console.log(mult(3));


// // ...........arrow function...........

// first define then call*****

// const sum = () =>  `the sum of two no is ${(a=5)+(b=9)}`;

// console.log (sum());  

// ***********************ARRAY**************************

// var arrn =  new Array;      
// new instance handle by java script



// var arrn = [ 'naina' ,0,  'kamthan' ];
//  console.log( arrn[2]);
//  console.log( arrn.lengh);

//  for loop in array...........

// var myname = [ 'naina', 'khushi', 'rohan', 'mummy', 'papa'];

// for( var i=0; i< myname.length; i++){
//   console.log (myname[i]);
// }

// // after es6 
// for( let element in myname){
//   console.log(element);
// }

// for( let element of myname){ 
//   console.log(element);
// }
  
// // ...........foreach....................

// var myname = [ 'naina', 'khushi', 'rohan', 'mummy', 'papa'];
// myname.forEach(function( element, index, array){
//   console.log( element + " having  index" + index + " " + array)
// }); 

//  myname.forEach(( element, index, array) => {
//   console.log( element + " having  index" + index + " " + array)
// }); 

// // index of
// console.log(myname.indexOf("mummy"));

let arr = [45, 10, 44, 88, 44, 66, 1, 2, 5];
let line = "hello my Name is 3 baar blah";
console.log(line.toUpperCase());
console.log(line.toLowerCase());
console.log(arr.indexOf(44));
console.log(arr.lastIndexOf(44));
console.log(line.indexOf("a"));
console.log(line.lastIndexOf("a"));
console.log(line.charAt(10));
console.log(arr[8]);
console.log(line.endsWith());
console.log(arr.length);
console.log(line.substring(6, 12));
console.log(arr.slice(4));
console.log(arr.slice(-4));
console.log(arr.slice(4, 8));
arr.forEach(arr > 45)
{
  console.log(arr);
// 

 
console.log( arr.join("*"))
console.log( arr.push(9))
console.log( arr)
console.log( arr.unshift(5));
console.log( arr)

console.log( arr.pop())
console.log( arr)
console.log( arr.shift());
console.log( arr)

console.log( arr.
  filter
// map)
// some)
// every
// fill....................... fill everything with 5
// arr = Array.from..................................\ string to array
// arr = Array.of...................................\kuch bhi in string

// console.log( arr.fill(5))

// console.log("hello world js");

// console.warn("Password in incorrect");
// console.info("Password in incorrect");
// console.error("Password in incorrect");
// console.count("hello");
// console.count();
// console.count("hello");
// // console.error("Password in incorrect")
// 