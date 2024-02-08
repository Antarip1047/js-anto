const name= "Antarip Saha"
const repoCount = 5

//console.log(name+repoCount+"numbers"); //outdated versions

//console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); 

const gameName =  new String('Anto-z');//taken as object

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);

//console.log(gameName.charAt(3));

const newString=gameName.substring(0,2)
//console.log(newString);

const anotherString = gameName.slice(-1,3)
//console.log(anotherString);

const newS="   antarip   "
//console.log(newS);
//console.log(newS.trim());

const url = "https://antarip.com/antarip%20saha"

//console.log(url.replace('%20','-'));

console.log(gameName.split('-')); // divides into array and split on given condition