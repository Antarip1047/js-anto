const coding = ["js","ruby","java","python","cpp"]

//coding.forEach( function (item) {
    //console.log(item);
//})

//coding.forEach( (item)=>{
    //console.log(item);
//})

//functin print(item){
    //console.log(item);
//}
//
//coding.forEach(print)

const mycoding = [
    {
        name: "javascript",
        filename:"js"
    },
    {
        name: "java",
        filename:"java"
    },
    {
        name: "python",
        filename:"py"
    },
]

mycoding.forEach( (item)=> {
    console.log(item.name);
})