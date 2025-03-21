const promiseOne = new Promise(function(resolve, reject) { 
     setTimeout( function(){
          resolve();
     },1000)
   
    })

promiseOne.then(function(){
    console.log("First promise created");
    
})


const PromiseTwo = new Promise(function(resolve, reject){
    let success = true;

     if(success){
       resolve("Promise is created successfully");
     }

     else{
        reject("Something went wrong");
     }
});


PromiseTwo.then(function(message){
    console.log(message);
    
})

PromiseTwo.catch(function(error){
    console.log(error);
})