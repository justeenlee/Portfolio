var navLinkArray = ["link-home", "link-projects", "link-resume", "link-about"];




//auto run function to set up when page is loaded
(function(){
    move("currentPath");
    setFullWidth();
    navCheck();
})();


$(window).scroll(function (){
    navCheck();
});
$(window).resize(function(){setFullWidth();});


    
function setFullWidth(){
    var newWidth = window.innerWidth;
    var newMarginLeft = (-(newWidth/2))+"px";
    $("#title-panel").width(newWidth);
    $("#title-panel").css("margin-left", newMarginLeft);
    $(".band").width(newWidth);
    $(".band").css("margin-left", newMarginLeft);
}
    
function move(input){
    var dot = document.getElementById("indicator-dot");
    if (input == "currentPath"){
        var currentPath = window.location.pathname.split("/")[(window.location.pathname.split("/").length)-2];
        var input = currentPath;
    }

    if (window.outerWidth > 680){
        if(input == "index"){
            //dot.style.left = "210px";
            dot.style.left = "18%";
        } else if (input == "resume"){
            //dot.style.left = "552px";
            dot.style.left = "65%";
        } else if (input == "about"){
            //dot.style.left = "695px";
            dot.style.left = "85%";
        } else {
            //dot.style.left = "395px";
            dot.style.left = "43.5%";
        }   
    }
}


function navCheck(){
    var currentViewTopEdgePosition = $(window).scrollTop();
    if (currentViewTopEdgePosition > 625){
        for (var i=0; i<navLinkArray.length; i++){
            var linkName = "#"+navLinkArray[i];
            $(linkName).css("color", "#555");
        }
        $("#indicator-dot").css("backgroundColor", "#555");
        $("#cf").css("opacity", ".7");
    } else {
         for (var i=0; i<navLinkArray.length; i++){
            var linkName = "#"+navLinkArray[i];
            $(linkName).css("color", "#fff");
        }
        $("#indicator-dot").css("backgroundColor", "#fff");
        $("#cf").css("opacity", ".1");
    }

}