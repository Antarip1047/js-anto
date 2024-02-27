//const tinderUser = new Object()
const tinderUser = {}

tinderUser.id="abc123"
tinderUser.name="anto"
tinderUser.isLoggedIn = false

//console.log(tinderUser);

const regUser = {
    email: "antz@gmail.com",
    fullname: {
        userfullname: {
            firstname: "antarip",
            lastname: "saha"
        }
    }
}

//console.log(regUser.fullname.userfullname.firstname);

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "c",4: "d"}
//const obj3 = Object.assign({},obj1,obj2)
const obj3 = {...obj1,...obj2}
//console.log(obj3);

const users = [
    {
        id: 1,
        email: ""
    },
    {
    },
    {
    },
]

users[1].email
//console.log(tinderUser);

//console.log(Object.keys(tinderUser));
//console.log(Object.values(tinderUser));
//console.log(tinderUser.hasOwnProperty('isLoggedIn'));//check presence of keys

const course = {
    coursename: "Javascript",
    price: "1000",
    courseIns: "Hitesh"
}

//destructuring
const {courseIns: Inst} = course// rename keys to shorter name for easier approch

console.log(Inst);

//{
//   "name": "Antarip",
//    "coursename": "Jsvascript",
//    "price": "free"
//}

[
    {},
    {},
    {}
]