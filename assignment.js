console.log("hye naina")


// <<<-----list properties------>
let obj = {a: 1, b: 2, c: 3};
let pro = Reflect.ownKeys(obj);
console.log(pro)


//  <<<----delete----->>
const biodata = {
    pencil:4,
    pen : 777,
    book : "science",
    copy: "classmate",
}
console.log(biodata);
delete biodata.book;
console.log(biodata);


// <<<<-------length---->>>>
objsize = function(Myobj) {
    var size = 0, key;
    for (key in Myobj) {
        if (Myobj.hasOwnProperty(key)) 
        size++;
    }
    return  size;
};
var student = { 
    name : "naincy kamthan", 
    class : "13B", 
    rollno : 27 };
    
    var objsize = objsize(student);
    console.log(`Size of the current object ${objsize}`);   


// <-----volume of cylinder--->


function cylinder(cyl_height, cyl_radius) {
    this.cyl_height = cyl_height;
    this.cyl_radius = cyl_radius;
  }
  
  cylinder.prototype.volume = function () {
    return this.cyl_height * Math.PI *this.cyl_radius *this.cyl_radius;
  }
  
  var cyl = new cylinder(7,4);
 
  console.log( cyl.volume().toFixed(4));


//   <----bubble sort algorithm--->>>

function bubbleshort(arr1){
    for(let i=0; i< arr1.length; i++){
        for(let j =0; j< (arr1.length - i -1);j++){
            if(arr1[j]>arr1[j+1]){
                let a = arr1[j];
                arr1[j]=arr1[j+1];
                arr1[j+1]=a
            }
        }
    }
    console.log(arr1);

}

   var arr1 = [2,89,76,6,45,99,3,8];
   bubbleshort(arr1);

  







