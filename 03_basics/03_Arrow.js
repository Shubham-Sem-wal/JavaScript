const user = {
    userName : "shubham",
    price : 999,
    welcomeMsg : function(){
        console.log(`hey ${this.userName} , welcome to cokestudio`);
    }
}
//----> this keyword tells us about current context 
// user.welcomeMsg()
// user.userName = "ajay rawat"
// user.welcomeMsg()

// console.log(this);

//------------------------------arrow function-----------------------------------

// const addTwo = (num1,num2) => {
//     return num1+num2;
// }
// console.log(addTwo(5,8));

//------------implicit return-----------------

// const addTwo = (num1,num2) => num1+num2;
// console.log(addTwo(5,8));

const addTwo = (num1,num2) => (num1+num2)
// console.log(addTwo(5,8));










// const chai = () => {
//     let userName = " shubham"
//     console.log(this.userName);
// }

// chai()

//=================   note:  --------this in normal function behaves different and in arrow function
//===================                it returns an empty object
function fun1(){
    let a = 53;
    let b = 63;
    // console.log(this);
}
fun1()

const hello = ()=>{
    let a = 58;
    let b = 68;
    // console.log(this);
}
// hello()
//========================================================================================


const add = (num1,num2) => {
    return num1+num2;

}
console.log(add(3,5));
//           --------another syntax called implicit return-------
const add1 = (num1,num2) => num1+num2

console.log(add1(8,0));
