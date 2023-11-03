//moblie navi
$(function(){
let ismoblie= screen.availWidth > 320 && screen.availWidth <=600;
let isClicked = true
    $(".mo-menu").on("click",function(){
        if(ismoblie){
            console.log("현재 :"+isClicked);
            if(isClicked){
                $(".mo-menu span").text("close");
                $("navi").css("display","block");
                isClicked = false;
            } else{
                $(".mo-menu span").text("menu");
                $("navi").css("display","none");
                isClicked = true;
            }    
        }
    })

});