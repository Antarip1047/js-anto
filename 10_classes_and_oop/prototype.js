// let myName= "antarip    "

// console.log(myName.truelength);


let myHeros = ["thor","spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman: "sling",

    getSpiderPower: function(){
        console.log(`spidy power is ${this.spiderman}`);
    }
}

Object.prototype.antarip =function(){
    console.log(`antarip is present in all object`);
}

Array.prototype.heyAnto =function(){
    console.log(`Antarip says hello!!!`);
}

//heroPower.antarip()
myHeros.antarip()
myHeros.heyAnto()