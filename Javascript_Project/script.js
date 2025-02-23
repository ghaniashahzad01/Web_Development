const boxes = document.querySelectorAll(".box");
const body = document.querySelector("body");

boxes.forEach(function (button) {
    button.addEventListener('click', function(event){
 
        if(event.target.id === "grey")
        {
            body.style.backgroundColor = event.target.id;
        }
        if(event.target.id === "yellow")
        {
            body.style.backgroundColor = event.target.id;
         }
        if(event.target.id === "blue")
        {
            body.style.backgroundColor = event.target.id;
        } 
        if(event.target.id === "pink")
        {
            body.style.backgroundColor = event.target.id;
        }
     
    });
});