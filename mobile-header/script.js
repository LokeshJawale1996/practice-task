

var menu = document.querySelector(".navMenu");
var click = document.querySelector(".clickMenu");
var head = document.querySelector(".head");
var close = document.querySelector(".close");
var goToHighj = document.querySelector(".goToHighJ");
var openHighJ = document.querySelector(".high-jewel");
var backMainNav = document.querySelector(".backMainNav");
var openJewel = document.querySelector(".jewel");
var goToJewel = document.querySelector(".goToJewel");
var backMainNav2 = document.querySelector(".backMainNav2");

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

goToHighj.addEventListener("click",function(){
  
    if(!openHighJ.classList.contains("hidden")){
        openHighJ.classList.add("hidden");
        click.classList.remove("hidden");
    }else{
        openHighJ.classList.remove("hidden");
        click.classList.add("hidden");


    }
})

goToJewel.addEventListener("click",function(){
  
    if(!openJewel.classList.contains("hidden")){
        openJewel.classList.add("hidden");
        click.classList.remove("hidden");
    }else{
        openJewel.classList.remove("hidden");
        click.classList.add("hidden");


    }
})

backMainNav.addEventListener("click",function(){
    if(!click.classList.contains("hidden")){
        click.classList.add("hidden");
      
    }else{
        click.classList.remove("hidden");
        openHighJ.classList.add("hidden");
        openJewel.classList.add("hidden")

    }

    

})
backMainNav2.addEventListener("click",function(){
    if(!click.classList.contains("hidden")){
        click.classList.add("hidden");
      
    }else{
        click.classList.remove("hidden");
        openJewel.classList.add("hidden");

    }

    

})