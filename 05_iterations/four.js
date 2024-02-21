const array = [1,2,3,4,5]
// array.forEach( (i) =>{
//     console.log(i);
// } )


// const value = array.forEach( (i) =>{
//     console.log(i);
// } )

// console.log(typeof value);

// for (const iterator of array) {
//     console.log(iterator);
// }

// for (const key in array) {
//     console.log(array[key]);
    
// }
//==================================================================================================

// --------------------     fliter() method               -----------------------------

// const nums = [1,2,3,4,5,6,7,8,9,10]


// const newNums = nums.filter( (items) => items > 4 )
// console.log(newNums);       // --- filter() method does not change the original array



// const newNums = nums.filter( (items) => {
//     const i = items > 4
//     return i
// } )
// console.log(newNums);

// const arr = []
// nums.forEach( (item) => {
//     if(item>4){
//         arr.push(item)
//     }
// }  )
// console.log(arr);
//===================================================================================================

//--------------------          map()              -----------------------------------------

// const number = [1,2,3,4,5,6,7,8,9,10]
// const newNumber = number.map( (items) => items + 10 )
// console.log(newNumber);

// const newNumber = number.filter( (i) =>   )
// console.log(newNumber);
// Chaining : when we use filter map foreach one after one

//======================================================================================================


//==============   reduce()   =======================

const Cart = [1,2,3,4]
const inival = 0
const sum = Cart.reduce( (acc , cval) => acc + cval , inival )

    console.log(sum);


// const sum = Cart.reduce( function (acc , cval) {
//     return acc + cval
// },0)  

// console.log(sum);



