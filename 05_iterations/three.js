//================        Array specific loops       =============================================
//              ---- for of

// let array = [1,20,3,40,4,50]
// for (const i of array) {
//     // console.log(i)
    
// }

// const str = "shubham"
// for (const i of str) {
//     // console.log(i);                           //---can apply on string also
// }

// const num = 1256488
// for (const i of num) {
//     // console.log(i);                         //---cant apply on num , num is not iterable
// }

//=====================================================================================================

//==========================================  map  ====================================================
//      --- map is a object type of data type which holds value in key pair 
//      --- it remember the order of insertion 
//      --- no duplicate key is allowed


const map = new Map()
map.set("a",1)
map.set("b",2)
map.set("c",3)
map.set("d",4)


// console.log(map);

//===============================================================================================
//-------------        for of loop on map       ------------------------------------

for (const [key,value] of map) {
    // console.log(key,':',value);
    
}
//=================================================================================================


//-----------------      forof on object     -------------------------------

const myObj = {
    a:"A",
    b:"B",
    c:"C",
    d:"D"
}

// console.log(myObj);

// for (const i of myObj) {
    // console.log(i);                 //         --------   forof doesnt iterate the object
    
// }
//=================================================================================================

// -  --------------------------forin loop for object iteration
for (const key in myObj) {
    // console.log(`${key} and their values ${myObj[key]}`);    //----only gives keys
    
}

//================================================================================

//------------------------------------for in in array -------------------------

const array1 = [1,2,3,45]
for (const key in array1) {
    //  console.log(array1[key]);        // ---------------- forin loop only gives array index

}

//=================================================================================

//--------------------------map is also not iterable by using forin
//--------------------------learn more about map
//--------------------in small summary , on array use forof and for object use forin loops



//===================================================================================================


//-------------------    for each loop   -----------------------------------------------

const arr1 = [56,1,20,45,85]
// arr1.forEach(  function (item){
//     console.log(item);
// }   )


// arr1.forEach(  (item) => console.log(item)  )
//==========================================================================================

//---------------------foreach in array of object

const arrObj = [
    {
        1:"a",
        2:"b"
    },
    {
        1:"c",
        2:"d"
    },
    {
        1:"e",
        2:"f"
    },
    {
        1:"g",
        2:"h"
    }
]

arrObj.forEach(  (items) => {
    console.log(items[1]);
}  )