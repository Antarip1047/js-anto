const coding = ["js","ruby","java","python","cpp"]

//coding.forEach( (item)=>{
    //console.log(item);
    //return item
//})

const myNums = [1,2,3,4,5,6,7,8,9,10]

//const newNums = myNums.filter( (num) => num>4)//direct

const newNums = myNums.filter( (num) => {
    return num>4
})//indirect with return statement must

//console.log(newNums);

