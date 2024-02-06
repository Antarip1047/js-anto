//basic two types of data types:
//1.primitive   2.non-primitive
//primitve
//string,number,boolean,null,undefined,symbol(use for maing unique value),BigInt


const score=100
const scoreval=10.3
const isLoggedIn=false
const temp=null
let userEmail;

const id=Symbol('123')
const anotherId=Symbol('123')

console.log(id === anotherId);

const BigInt=1255695898836636637n;

//non-primitive
//arrays,objects,functions
//array
const heros=["shaktiman","naagraj","doga"];
//object
let myObj={
    name:"Antarip",
    age:21,
}
//function
const myFunction = function(){
    console.log("Hello Antarip");
}

//refer ecma to know return type of datatypes all
//return type of all nonprimitive data type are function
// return type of function is object function 