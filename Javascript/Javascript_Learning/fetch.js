(async () => {
     try{
        let response = await fetch("https://api.github.com/users/ghaniashahzad01");
        let data = await response.json();
        console.log(data);
     }
     catch(error)
     {
        console.log(error);
        
     }
})();