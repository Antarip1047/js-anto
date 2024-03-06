const userEmail = []

//if(userEmail){
    //console.log("got user email");
//}
//else{
    //console.log("dont have user email");
//}

//falsy value

//false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy value

// "0", 'false', " " , [] , {}, function(){}

//if(userEmail.length ===0){
    //console.log("Array is empty");
//}

const emptyobj = {}

//if(Object.keys(emptyobj).length === 0)
//{
    //console.log("obj is empty");
//}


//Nullish Coalishing Operator (??): null undefined

let val1;
//val1 = 5??10 //5
//val1 = null??10 //10

//console.log(val1);

//ternary operator

//codition ? true : false

const iceTeaPrice = 100
iceTeaPrice >= 80 ? console.log("more than 80") : console.log("less than 80");