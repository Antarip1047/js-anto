//Immediately invoked Function Expressions (IIFE)

(function chai(){
    //named iife
    console.log(`DB Connected`);
})();//used to voide pollution from global scope and faster execution

( (name)=>{
    //unnamed iife
    console.log(`DB CONNECTED TWO ${name}`);
})('Antarip')