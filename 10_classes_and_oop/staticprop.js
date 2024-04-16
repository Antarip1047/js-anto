class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`username: ${this.username}`);
    }

    static createId(){//not give access everytime
        return `123`
    }
}

const antarip = new User("antarip")
//console.log(antarip.createId());

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email=email
    }
}

const ab= new Teacher("anto","a@12.com")
ab.logMe()