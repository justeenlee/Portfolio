var navLinkArray = ["link-home", "link-projects", "link-resume", "link-about"];
var navItemArray = ["justeenlee.com","projects","resume","about"];


var currentPath = window.location.pathname.split("/")[(window.location.pathname.split("/").length)-2];


//auto run function to set up when page is loaded
(function(){
    move(currentPath);
    setFullWidth();
    navCheck();
    //console.log("break1"+currentPath);
})();


$(window).scroll(function (){
    navCheck();
});

$(window).resize(function(){
    setFullWidth();
    if (window.innerWidth>679){
        document.getElementById("indicator-dot").style.opacity = "1";
        move("currentPath");
        
    } else{
        document.getElementById("indicator-dot").style.opacity = "0";
    }
});

    
function setFullWidth(){
    var newWidth = window.innerWidth;
    var newMarginLeft = (-(newWidth/2))+"px";
    $("#title-panel").width(newWidth);
    $("#title-panel").css("margin-left", newMarginLeft);
    $("#cf").width(newWidth);
    $("#cf").css("margin-left", newMarginLeft);
    $(".band").width(newWidth);
    $(".band").css("margin-left", newMarginLeft);
}
    
function move(input){
    var dot = $("#indicator-dot");
    //so that all navigation have the same tags
    if (input == "currentPath"){
        input = currentPath;
    }
    if ((input =="Portfolio")||(input=="justeenlee.com")){
        input = "index";
    }

    console.log("break2"+input);
    if (window.outerWidth > 680){
        if(input == "index"){
            //dot.style.left = "210px";
            dot.css("left","18.5%");
        } else if (input == "resume"){
            //dot.style.left = "552px";
            dot.css("left","65%");
        } else if (input == "about"){
            //dot.style.left = "695px";
            dot.css("left","85%");
        } else {
            //dot.style.left = "395px";
            dot.css("left","43.5%");
        }   
    }
}


function navCheck(){
    var toChangeNavColor = false;
    var i = 0;
    if (toChangeNavColor){    
        var currentViewTopEdgePosition = $(window).scrollTop();
        if (currentViewTopEdgePosition > 625){
            setDefaultNavColor();
        } else {
            for (var i=0; i<navLinkArray.length; i++){
                var linkName = "#"+navLinkArray[i];
                $(linkName).css("color", "#fff");
            }
            $("#indicator-dot").css("backgroundColor", "#fff");
            $("#cf").css("opacity", ".1");
        }
    }

}


//only each project is set here, else set in css
function setDefaultNavColor(){
     for (var i=0; i<navLinkArray.length; i++){
            var linkName = "#"+navLinkArray[i];
            $(linkName).css("color", "#555");
        }
        $("#indicator-dot").css("backgroundColor", "#555");
        $("#cf").css("opacity", ".7");
}
