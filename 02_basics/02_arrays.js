const marvel_heros = ["thor"  , "spiderman" , "ironman"]
const dc_heros = ["superman" , "flash", "batman"]
//marvel_heros.push(dc_heros)//creates subarray inside array and not good for searching and working in array

//console.log(marvel_heros);

const heros = marvel_heros.concat(dc_heros)
//console.log(heros);

const all_heros = [...marvel_heros, ...dc_heros]
//console.log(all_heros);

const arr = [1, 2, 3, [4, 5, 6], 7, [6,7, [4,5]]]
const real_arr =arr.flat(Infinity)//removes and writes the whole value under single array

//console.log(real_arr);

//console.log(Array.isArray("Antarip"));//cannot create Array
//console.log(Array.from("Antarip"));//creates array with each letter from string

let score1= 100
let score2= 200
let score3= 300

console.log(Array.of(score1,score2,score3));