let a=300
//var not used as its value changes inside scope evben if mentioned outside
if(true){
    let a=10
    const b=20
    //console.log("inner: ",a);
}


//console.log(a);
//console.log(b);
//console.log(c);


function one(){
    const username="antarip"

    function two() {
        const website="youtube"
        //console.log(username);
    }
    //console.log(website);

    two()
}
one()

if(true){
    const username="antrip"
    if(username==="antrip"){
        const web=" youtube"
        //console.log(username + web);
    }
    //console.log(website);
}
//console.log(username)


//*interesting

function addone(num){
    return num+1
}
addone(5)

const addtwo=function(num){
    return num+2
}
console.log(addtwo(5));

