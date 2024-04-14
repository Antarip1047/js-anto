const user={
    username: "Antarip",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`username: ${this.username}`);//js doesnt know the context, sp this keyword e used to state the user is called
        //console.log(this);//prints everything thats present inside the {}'braces'
    }
}

//console.log(user.username);
//console.log(user.getUserDetails());

function User(username,loginCount,isLoggedIn){
    this.username=username;
    this.loginCount=loginCount;
    this.isLoggedIn=isLoggedIn

    return this
}

const userOne =new  User("antarip",10,true)

const userTwo =new  User("ant",1,false)
console.log(userOne.constructor);//refernce property about function

//console.log(userTwo);