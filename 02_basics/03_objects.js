// singleton

// object literals
//Object.create//constrictor method

const mySmb = Symbol("myKey")

const JsUser = {
    name: "Antarip",
    [mySmb]: "myKey1",
    age: 21,
    location: "Kolkata",
    email: "antarip@gmail.com",
    isLoggedIn: false,
    lastloginDays: ["Monday","Saturday"]
}
//console.log(JsUser.email);//not preferred
//console.log(JsUser["email"]);//preferred with same result
//console.log(JsUser[mySmb]);

JsUser.email="anto@gmil.com"
//Object.freeze(JsUser)//freeze values and ccannot be altered
JsUser.email = "anz@gmail.com"//although changed but not updted due to freeze function
//console.log(JsUser);

JsUser.greeting = function() {
    console.log("Hello JS user");
}
JsUser.greetingTwo = function() {
    console.log(`Hello JS user, ${this.name}`);
}
console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());