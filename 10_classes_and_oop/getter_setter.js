class User{
    constructor(email,password){
        this.email=email 
        this.password=password
    }
    //getter and setter should be written together, incompletye without one another
    get password(){
        return this._password.toUpperCase()
    }
    set password(value){
        this._password=value
    }
}

const antarip =new User("ant@gmail.com","abc")
console.log(antarip.password);