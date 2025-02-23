let mymap = new Map();

mymap.set("name","ghania");
mymap.set("age", "20");
mymap.set("email","user@gmail.com");


console.log(mymap.get("name"));

console.log(mymap);

mymap.forEach((value, key) => console.log(value, key));

for (const keys of mymap.keys()) {
    console.log(keys);
} 


for (const [key,value] of mymap)  {
    console.log('key: ${key}, value is: ${value}');
    
}