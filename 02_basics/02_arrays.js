//-------------------------merging two array into single array-------------------
// const fruit = ["orange","mango","apple","grapes"]
// const vegie = ["potato","ladyfinger","capsicum"]

// fruits.push(vegies)      // this method actually push entire array into first one,not a good practice
// console.log(fruits);

// const myNewArray = fruits.concat(vegies) //concat() method combines both array and make the new one for them
// console.log(myNewArray);
//......spread operator

// const array = [...fruit,...vegie]
// console.log(array);

// const arr1 =[10,20,30,40]
// const arr2 = [50,60,70]
// const arr3 =  [...arr1,...arr2]
// const arr4 = arr1.concat(arr2)
// console.log(arr3);
// console.log(arr4);
//=========================================== merging done =================================



//-------------------------------- flat method --------------------------------------

const array = [1,2,3,[40,50,60],7,8,[90,100,[110,120,130]]]
const newArray = array.flat(1)              //flat() method return new array with all merged subarray
console.log(newArray);

//============================= flat() method done ==========================================



//----------------------          isArray() ---- Array.from()           ------------------------------------
// const name = "shubham";
// console.log(name);
// console.log(Array.isArray(name));//-->checks if name is array or not ;false
// console.log(Array.from(name));//-->converts into the array ---it makes array either from keys or values
//======================== done =============================================================


//------------------------------     Array.of        ------------------------------------------------
const score1 = 100;
const score2 = 200;
const score3 = 300;
// console.log(Array.of(score1,score2,score3));
//-----------------------         Array.of done           -----------------------------------------------