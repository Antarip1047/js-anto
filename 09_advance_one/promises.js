const promiseOne = new Promise(function(resolve,reject){
    //Do an async task
    // DB calls, cryptogrpahy, network
    setTimeout(function(){
        console.log('Async task is complete');
        resolve()//method used for connection with .then()
    },1000)
})

//consumption of promise
promiseOne.then(function(){//.then()is callback function
    console.log("Promise consumed");
}) 


//same thjing done all togwther with less steps and same logic and function or iife both can be used
new Promise(function(resolve,reject){
    setTimeout(() => {
        console.log("Async task 2");
        resolve()
    }, 1000);
}).then(function(){
    console.log("Async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"Anto",email:"anto@mail.com"})//any parameter,value,object,function can be called inside resolve method
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
})

const promiseFour =  new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username:"Antarip",password:"123"})
        }
        else{
            reject('ERROR: Something went wrong')//if not matchinbg with required qt.. reject method is used
        }
    },1000)
})

promiseFour
.then((user)=>{
    console.log(user);
    return user.username
})
.then((username)=>{
    console.log(username);
})
.catch(function(err){
    console.log(err);
})
.finally(()=>{
    console.log("The promise is either resolved or rejected");
})


const promiseFive= new Promise(function(resolve,reject){
    setTimeout(function(){
        let error =true
        if(!error){
            resolve({username:"JS",password:"123"})
        }
        else{
            reject('ERROR: JS went wrong')//if not matchinbg with required qt.. reject method is used
        }
    },1000)
})

async function consumePromiseFive(){
    try{const response = await promiseFive
    console.log(response);}
    catch(error){
        console.log(error);
    }
}
consumePromiseFive()


//async function getAllUsers(){
    //try{
        //const res = await fetch('https://jsonplaceholder.typicode.com/users')
        //const data =await res.json()
        //console.log(data);
    //}
    //catch(error){
        //console.log("E: ",error);
    //}
//}
//
//getAllUsers()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>console.log(error))