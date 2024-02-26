const myArr = [0,1,2,3,4,5]
//console.log(myArr[0]);
const heros= ["srk","sallu"]
const arr=new Array(1,2,3)
//console.log(heros);
myArr.push(6)
//console.log(myArr);

myArr.shift()
myArr.unshift(10)
//console.log(myArr);

//slice,splice
console.log("A ",myArr);
const myn1=myArr.slice(1,3);
console.log(myn1);
console.log("B ",myArr);

const myn2=myArr.splice(1,3);
console.log(myn2);
console.log("C ",myArr);
