let mySym = Symbol("id");

let obj = {
  name : "ghania",
  age: 20,
  email: "user@gmail.com",
  [mySym] : "100"
}


console.log(obj[mySym]);
console.log(obj["name"]);

console.log(obj);

const {name: n , age: a  , l ="Not provided"} = obj;

console.log(n, a ,l)