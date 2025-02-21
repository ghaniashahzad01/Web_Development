let mySym = Symbol("id");

let obj = {
  name : "ghania",
  age: 20,
  email: "user@gmail.com",
  [mySym] : "100"
}


console.log(obj);
