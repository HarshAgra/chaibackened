const marvel_heros= ["thor", "Ironman", "spiderman"];
const dc_heros= ["superman", "flash", "batman"];

// console.log(marvel_heros.concat(dc_heros));

const allnew_heros= [...marvel_heros, ...dc_heros];
console.log(allnew_heros);

const another_array= [1,2,3,[4,5,6],7,[6,7,[4,5]]];
const real_another_array= another_array.flat(Infinity);
console.log(real_another_array);

console.log(Array.isArray("Harsh"));
console.log(Array.from("Harsh"));
console.log(Array.from({name: "Harsh"})); //interesting

let score1=100;
let score2=200;
let score3= 300;
console.log(Array.of(score1,score2,score3));
