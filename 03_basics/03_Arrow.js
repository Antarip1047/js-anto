const user = {
    username: "antarip",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website`);//this refers to current context
        console.log(this);
    }
}

//user.welcomeMessage()
//user.username= "sam"
//user.welcomeMessage()

//console.log(this);// gives empty parenthesis as it is saved in empty node

//function one(){
//    let name= "anto"
//    console.log(this.name);
//}
//one()

const chai = () => {
    let name= "anto"
    console.log(this.name);
}
//chai()

const add = (n1,n2) => {
    return n1+n2//explicit return
}

//console.log(add(3,4));