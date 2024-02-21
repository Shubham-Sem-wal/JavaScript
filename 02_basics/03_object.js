//============================     objects in javascript   =======================================
//   are key value pairs
//    object can be created by two methods   1- by using constructor  2-by using literals
//    by using constructor a singleton object created , means ye apne type ka ek hi object hota hai

//object.create                  //---------- using constructor
// const mySym = Symbol(56)      //-------------using litrals
// console.log(mySym);

const obj1 = {
    Fname : "shubham",
    Lname : "semwal",
    Email : "shubham@gmail.com",
    isLoggedIn : false,
}
// console.log(obj1);
// console.log(obj1.Email);        //---------acess method1
// console.log(obj1["Email"]);     //---------access method2

// console.log(obj1(`hello ${this.}`));

obj1.Email = "semwal@gmail.com" //----->change the key value
console.log(obj1)

//---------------------        object.freez(object_name)         ------------------------------------
// Object.freeze(obj1)
// obj1.Email="shubh@mail.com"//----------will not change

//--------------------  how to add symbol in object and how to access them -------------------------





//=======================   learn about symbol  ===================================================

obj1.greeting = function(){
    console.log(`hello JS user ${this.Fname}`);
}

console.log(obj1.greeting());


