

var menu = document.querySelector(".navMenu");
var click = document.querySelector(".clickMenu");
var head = document.querySelector(".head");
var close = document.querySelector(".close");
    menu.addEventListener("click",function(){
        if(!click.classList.contains("hidden")){
            click.classList.add("hidden");
            head.classList.add("hidden");
          
        }else{
            click.classList.remove("hidden");
           

        }

    })

   close.addEventListener('click',function(){
    click.classList.add("hidden")
    
    // if(!click.classList.contains("reverseHead")){
    //     click.classList.add("reverseHead");
    //     click.classList.add("hidden");
    // }else{
    //     click.classList.remove("reverseHead");
    //     click.classList.remove("hidden");


    // }
})