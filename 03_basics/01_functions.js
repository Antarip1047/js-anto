
function sayMyName(){
    console.log("A");
    console.log("N");
    console.log("T");
    console.log("A");
    console.log("R");
    console.log("I");
    console.log("P");
}

//sayMyName()//to cll function

//function addTwoNums(num1,num2) {
//    console.log(num1+num2);
//}

//const result = addTwoNums(3,4)

//console.log("Result: ",result);

function sum(a1,a2) {
    //let result = a1+a2
    //return result
    return a1+a2
}

const result = sum(3,4)

//console.log("Result: ",result);

//function loginUserMessage(username){
//    return `${username} just logged in`
//}

//console.log(loginUserMessage("Antarip"));

function loginUserMessage(username){
    if(!username){
        console.log("Please enter username");
        return
    }
    return `${username} just logged in`
}

//console.log(loginUserMessage());

function calCartPrice(...n1){
    return n1
}
//console.log(calCartPrice(200,400,500,2000));

const user={
    username:"Antarip",
    price:100
}

function handleObj(abyobj){
    console.log(`Username is ${abyobj.username} and price is ${abyobj.price}`);
}

handleObj(user)

const myArr=[200,400,600]
function returnSecondVal(getArr){
    return getArr[1]
}

console.log(returnSecondVal(myArr));
