//----scoping is important concept
//-----block scope and global scope

const a = 10;
let b = 30;
var c = 145;

if(true){

    c = 500;
   const a = 25;
   let b = 65;


}
// console.log(a,b,c);

// function one(){
//     const Fname = "shubham"
//     const Lname = "semwal"

//     function two(){
//         const fruit = "mango"
//         console.log(Fname,Lname);
//     }

//     two()
//     console.log(fruit);


// }

//  one()


 function addOne(num){
    return num+1
 }
//  console.log(addOne(5))

 console.log(two(5))           //------------Cannot access 'two' before initialization
 const two = function addTwo(num){
    return num+2
 }

 
//  console.log(typeof two);