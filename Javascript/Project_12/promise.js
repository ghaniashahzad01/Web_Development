const promiseOne = new Promise(function(resolve, reject) { 
     setTimeout( function(){
          resolve();
     },1000)
   
    })

promise.then(function(){
    console.log("First promise created");
    
})

