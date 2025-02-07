const scores = [40, 55, 30, 70, 49, 85];

const total = scores
  .map(score => (score < 50 ? score + 15 : score)) 
  .filter(score => score > 50) 
  .reduce((sum, score) => sum + score, 0); 

console.log(total);

//Question 2
let lastId = 0;

const Tab = [
  { id: ++lastId, name: "Alice", age: 25 },
  { id: ++lastId, name: "Bob", age: 30 },
  { id: ++lastId, name: "Charlie", age: 22 }
];

Tab.push({ id: ++lastId, name: "David", age: 28 });

Tab.unshift({ id: ++lastId, name: "Eve", age: 35 });

console.log("Tableau mis à jour :", Tab);

import { Search } from "./Ecmascript/fonction.js";


const result = Search(Tab, 3); 
console.log("Résultat de la recherche :", result);
