class User{
    constructor(username){
        this.username=username
    }

    logMe(){
        console.log(`USERNAME IS ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username,email,password){
        super(username)
        this.email=email
        this.password=password
    }

    addCourse(){
        console.log(`A new course was added by ${this.username}`);
    }
}

const anto = new Teacher("Antarip","an@gmail.com",151)

anto.addCourse();

const antoz =new User("antarip")

antoz.logMe();
console.log(anto===antoz);