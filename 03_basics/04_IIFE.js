//-----immediately invoked function expression-----

// function chai(){
//     console.log(`DB CONNECTED`);
// }

// chai();
/*********************************************************** */

// (function chai(){
//     console.log(`DB CONNECTED`);
// })(); //------->semicolon must

/*********************************************** */

// (  () => {
//     console.log(`DB CONNECTED 2`);

// } )();

/****************************************************** */

// (  (name) => {
//     console.log(`DB CONNECTED 2 ${name}`);

// } )("shubham");
/********************************************************* */


//------------example
// (function Foo(){
//     // console.log(`function foo`);
// })();

// ((a,b)=>{
//     // console.log(a+b);
// })(4,5)




(function chai(){
    console.log("connected");
})();

// chai()

(  () =>{
    console.log("connect");
}  )();