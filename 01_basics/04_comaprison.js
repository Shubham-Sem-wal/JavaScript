/*in js comparison and eqality check works diffrently */

// console.log("2" == 2);//convert string into number
// console.log("2" === 2); //this one strictly check,also check datatype

// console.log(null>0);//isne null ko 0 me convert kiya but 0>0 : false
// console.log(null==0);// : false
// console.log(null>=0);//0>=0 : true

// console.log(undefined>0);//false
// console.log(undefined<0);//false
// console.log(undefined==0);//false

/******************MEMORY********************* */
/*   STACK(premitive data type) AND HEAP(non-premitive or object) */

let person1 = "Shubham"
let person2 = person1
person1 = "ajay"

console.log(person1);
console.log(person2);
