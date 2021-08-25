// what is event object
// Event object is a parentobject of event object
// for example MouseEvent, KeyboardEvent, FocusEvent, pointer event etc

//<----------- OBJECT LITERAL----------->
// key value pair
 
// <--1st way-->
// let Biodata = {
//     myname: {
//         realname : "you are awsome"},
//     age: 20,
//     getdata : function(){
//         console.log(`my name ${Biodata.myname} and age ${Biodata.age}` )
//     }
// }

// console.log(Biodata.myname.realname);

// <--2nd way--->

// let BioData = {
//     Myname: 'naijjjcy',
//     Age: 67355,
//     Retdata (){
//         console.log(`my name ${BioData.Myname} and age ${BioData.Age}`)                                                                                                                                                                                                                                                                                                                                            
//     }
// }
// BioData.Retdata();
 
// //  console.log(this.alert('awsome'))

//  const obj = {
//      mylife : 98,
//      myage(){ 
//          console.log(this)
//      }
//  }
//   console.log(obj.myage( ))

//   let Biodata = {
//       myname: {
//         realname : "you are awsome"},
//      age: 20,
//      getdata : function(){
//         console.log(`my name ${this.myname.realname} and age ${this.age}` );
//      }
//     } 
// Biodata.getdata()


//  ECMA srcipt...................................................>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
 
// aarray destructuring...>>>>>>

// const mydata =['nindi', 'mauli', 'gajar'];
//  const[bindi, mynauli, gajarr, age ="9"] = mydata;
//  console.log(mydata);
//  console.log(mynauli);
//  console.log(age)


//  object destructuring...>>>>

// const data ={
//     bag : 9,
//     cutter : "its my stay away",
//     pencil: 7878, 
// }
// let{bag, cutter, pencil} = data;
// console.log(bag ) 

// object property

// let name = 'naincy kamathan';
// const hye ={ 
//     [name] : 'wowwwwww',
//     me : 'Hellow',
// }
// console.log(hye); 

// const arr =[
//     ['apple','boy'], 
//     ['cat', 'dog'],
//     ['egg','fish'],
//     ['grass',['hen','hat']]
// ];

// let arrflat = arr.reduce((accuum,currval) => {
//     return accuum.concat(currval);
// });


// console.log(arr.flat(2));


// const add =( a,b) => {
//     return a+b;
// }
// const sub = (a,b) => {
//     return Math.abs(a-b);
// }
// const mul = (a,b) => {
//     return a*b;
// }


// const calculator = ( num1,num2, operation) => {
//     return operation(num1,num2);
// }

// a = calculator(5,7,add)
// console.log(a)

// async js

const fun2 =()=> {
    setTimeout(()=>{console.log('hye im 2')},2000)
}
 

const fun1 = () => {
 console.log('this is 1st function');
 fun2();
 console.log('this is function 3');
}
fun1()  

// function curring

// function hye(num1){
//     return function(num2){
//         return function(_num3){
//             console.log(num1,num2,_num3);
//         }
//     }
// }
const hyye=(num1)=>(num2)=>(num3)=>console.log(num1,num2,num3);

hyye(5)(3)(8);

// call back hell...........................>>>>>>
setTimeout(()=>{
    console.log('im function 1');
    setTimeout(()=>{
        console.log('2');
        setTimeout(()=>{
            console.log('number3')
            setTimeout(()=>{
                console.log('number4');
                setTimeout(()=>{
                    console.log('im function 5')
                },2000)
            },2000)
        },2000)
    },2000)
},2000);


// ajas call using xmlhttp request


