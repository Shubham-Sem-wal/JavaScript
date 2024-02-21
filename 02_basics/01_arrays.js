/**---array is a collection of multiple items under single variable.
 * ---array in javascript are resizable and can contain mix datatypes.
 * ---arrays are object type.
 * 
 * 
 */
//-----------------------------------------------------------------------------------------------------
//------note: copy of array ---3 methods
//---by spread syntax

const fruits =["mango","grapes","orange","banana"]          //--------------our original array

const fruitsCopy = [...fruits]               //----------------by using spread syntax
// console.log(fruitsCopy);

const fruitsCopy1 = Array.from(fruits)      //.................by using from() method
// console.log(fruitsCopy1);

const fruitsCopy2 = fruits.slice()          //..................by using slice() method
// console.log(fruitsCopy1);
//-----------------------------------------------------------------------------------------------

//------------------------------------------------------------------------------------------
//there is a concept of shallow copy and deep copy of array learn them

//--------------------------------------------------------------------------------------






















//----------------------------------Declaration of array---------------------------
// let myArray = [10,20,30,40,20,50];              //------------first way
// console.log(myArray)

// let myArray1 = new Array(5,8,4,6,9)                 ///------------second way
// console.log(myArray1)

//.....----------------------------.push......pop......methods............
// myArray.push(60)
// console.log(myArray)
// myArray.pop()
// console.log(myArray)
                      //--------------push and pop works on the last index of array 

//--------------------------------------unshift and shift--------------------------------------
// console.log(myArray)
// myArray.unshift(9)    //it will insert element at starting position
// console.log(myArray)
// myArray.shift()         //it deletes element from first position
// console.log(myArray)

/***********************************************************/

// console.log(myArray)
// console.log(myArray.length)
// console.log(myArray.findIndex(20,1)) //-----> check what FindIndex does???
// console.log(myArray.indexOf(20))
// console.log(myArray.includes(402))
// console.log(myArray.splice(3,5))
// console.log(myArray.slice(3,5))
// console.log(myArray.reverse())
// console.log(myArray.lastIndexOf(20))

/*-----------------------------------------join()--------------------------------*/

const arr1 = [2,1,4,3,6,5]
const newArr = arr1.join() //-----join simply converts array to string
// console.log(typeof(arr1)) //-----OBJECT type
// console.log(typeof(newArr))//------STRING type
//--------------------------------------------------------------------------------------

//---------------------------slice() and splice()--------------------------------------------












