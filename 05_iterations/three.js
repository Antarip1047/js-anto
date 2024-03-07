//for of 

const arr = [1,2,3,4,5]

for(const num of arr){
    //console.log(num);
}

const greetings = "hello world"
for(const greet of greetings){
    //console.log(`Each char is ${greet}`);
}

//Maps

const map = new Map()
map.set('IN',"INDIA")
map.set('USA',"UNITED STATES OF INDIA")
map.set('FR',"FRANCE")

//console.log(map);

for (const [key,value] of map) {
    console.log(key, ':- ',value);
}

const myObject = {
    'game1':'BGMI',
    'game2': 'VALORANT'
}
//for (const [key,value] of muObject) {
    //console.log(key, ':- ',value);
//}