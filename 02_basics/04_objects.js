//============================          more about object         ======================================

// const tinderUser = new Object()                       ----this is singleton object
// const tinderUser = {}                                 ----this is non singleton object
//----------------            what is singleton and non singleton              --------------------------------



//-------------------------------- learn about singlton and non singlton ------------------------

const tinderUser = {name:"shubham",
                    mob : "895469",
                    email: "shubham@"}         //----> it is non singleton object


//---------------------------------------------------------------------------------------------------


//---------------------        merging two object    --------------------------------------------
const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}

// const obj3 = {obj1,obj2}                                    //----not a good practice
const obj3 = Object.assign({},obj1,obj2)                   //--> {} is target , rests are source
// console.log(obj3);

const obj4 = {...obj1,...obj2}                             //----spread method , mostly used
// console.log(obj4);
//===========================      done        =======================================================


//-------------------------------------------------------------------------------------
// console.log(Object.keys(tinderUser))         //---only key can be accessed, data type will be array
// console.log(object.values(tinderUser));      //---only values
// console.log(Object.entries(tinderUser))      // --- key values both in array form

// console.log(tinderUser.hasOwnProperty("mob"));         //---cheks if property exists or not

//----------------------------------------------------------------------------------------------












/***------------------------more on objects------  object destructring    -------------------********/

const course = {
    name : "js in hindi",
    price : "999",
    courseInstructor : "shubham semwal"
}
// console.log(course.courseInstructor);

// const {courseInstructor} =course
// console.log(courseInstructor);
//---------also
const {courseInstructor:abc} =course ///-----for making easy
// console.log(abc);


const objShubh = {
    Fname : "shubham",
    class : "12th",
    mob : "89546989",
    school_name : "sbvmandir"
}

console.log(objShubh.Fname);   //--------generally ese hi access krte hian

const{Fname : a} = objShubh  // -----lekin ham customize bhi kar sakte hain
console.log(a);
