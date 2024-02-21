//------------------------------   functions    -----------------------------------------
function addTwoNumbers(a,b,){
    // console.log(a + b);
    return a+b;
}

// addTwoNumbers(3,7)
let result = addTwoNumbers(3,7);
// console.log(result)

function userLoggedIn(userName){
    if(!userName){
        // console.log("enter");
        return
    }
    return `${userName} just logged in`
}

// console.log(userLoggedIn(undefined));
//=====================================================================================================

//------------         rest operator        -->for more than 2 parameters or we dont know how much */

function CalculateCaretPrice(...num){
    return num;

}
// console.log(CalculateCaretPrice(20,30,50,80))

//------------------------note

function CalculateCaretPrice1(val1,val2,...num){
    return num;

}
// console.log(CalculateCaretPrice1(20,30,50,80))//-----> 20,30 = val1 and val2
//====================================================================================================


//------------------------     passing object in function      --------------------------------------

const user = {
    userName : "shubham",
    price : "999"
}

// function ObjectHandle(anyObject){
//     console.log(`hello ${anyObject.userName} the price is ${anyObject.price}`);
// }

// ObjectHandle(user)

// ObjectHandle({
//     userName : "ajay",//---------------------can pass directly also
//     price : 999

// })
//====================================================================================================



//------------------------      passing array into function        -----------------------------------

const MyArray = [20,40,50,80,56];

function SecondValue(getArray){
    return getArray[1];
}

// console.log(SecondValue(MyArray))
//==============================================================================================





// function cart(...nums){
//     return nums;

// }
// console.log(cart(2,3,4,5));

function cart(val1,val2,...nums){
    return val1;

}
console.log(cart(2,3,4,5));       //---------will give array

function myfun(){

}




















