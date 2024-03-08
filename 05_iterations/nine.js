const nums = [1,2,3]

//const total = nums.reduce(function (acc,currval){
    //console.log(`acc: ${acc} and currval: ${currval}`);
    //return acc+currval
//},0)

const total = nums.reduce((acc,curr)=>acc+curr,0)// same result but different line approach and same code
//console.log(total);


const shoppingcart = [
    {
        itenName:"js course",
        price: 2999
    },
    {
        itenName:"python course",
        price: 999
    },
    {
        itenName:"mobile dev course",
        price: 5999
    },
    {
        itenName:"data science course",
        price: 12999
    },
]

const price = shoppingcart.reduce((acc,item)=>acc+item.price,0)

console.log(price);