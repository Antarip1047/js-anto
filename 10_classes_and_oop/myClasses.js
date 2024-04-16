class User{
    constructor(username,email,password){
        this.username=username,
        this.email=email,
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }

    changeUsername(){
        return `${this.username.toUpperCase()}`
    }
}

const anto = new User("anto","anto@gmail.com",123)

console.log(anto.encryptPassword());
console.log(anto.changeUsername());