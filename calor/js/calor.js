$(window).bind("load",function() {setTimeout(addVideo, 1400);});

$(window).scroll(function (){
    gifCheck();
    //navCheck();
});

function addVideo(){
	document.getElementById('calor-smart-faucet-system').innerHTML= '<iframe src="http://player.vimeo.com/video/124192436?byline=0&amp;portrait=0&amp;color=deae62&amp;rel=0;" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
	document.getElementById('video-cartridge-mechanism').innerHTML= '<iframe src="http://player.vimeo.com/video/123803268?byline=0&amp;portrait=0&amp;color=deae62&amp;rel=0;" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
	document.getElementById('video-set-temp').innerHTML= '<iframe src="http://player.vimeo.com/video/123803900?byline=0&amp;portrait=0&amp;color=deae62&amp;rel=0;" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    document.getElementById('video-interaction').innerHTML= '<iframe src="http://player.vimeo.com/video/145598752?byline=0&amp;portrait=0&amp;color=deae62&amp;rel=0;" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    document.getElementById('video-mechanism').innerHTML= '<iframe src="http://player.vimeo.com/video/161575406?byline=0&amp;portrait=0&amp;color=deae62&amp;rel=0;" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
};

var gifDisplayArray = [false, false, false, false];
    
function gifCheck(){
    var viewportHeight = $(window).height();
    var imageHeight = $("#calor-app-sync").height();
    var currentViewTopEdgePosition = $(window).scrollTop();
    var gifElement = [$("#calor-app-sync"),
                      $("#calor-app-usage"),
                      $("#calor-app-stats"),
                      $("#calor-app-profile")
                     ];
    var gifSet = ["images/sync.gif",
                 "images/usage.gif",
                 "images/stats.gif",
                 "images/profile.gif"];
    
    var staticSet = ["images/sync-static.png",
                     "images/usage-static.png",
                     "images/stats-static.png",
                     "images/profile-static.png"
                     ];

    var imageTopOffset = [gifElement[0].offset().top, 
                          gifElement[1].offset().top,
                          gifElement[2].offset().top,
                          gifElement[3].offset().top,
                         ];
    
    var visibleArea = currentViewTopEdgePosition + viewportHeight;
    var imageArea = [(imageTopOffset[0] + imageHeight),
                     (imageTopOffset[1] + imageHeight),
                     (imageTopOffset[2] + imageHeight),
                     (imageTopOffset[3] + imageHeight),
                    ];
   
    //check the gif
    for (var i=0; i<imageArea.length; i++){
    if (currentViewTopEdgePosition < (imageTopOffset[i]+250) && visibleArea > imageArea[i]){
        if (!gifDisplayArray[i]){
            switch(i){
                case 0:
                    gifElement[i].attr("src", gifSet[0]);
                    break;
                 case 1:
                    gifElement[i].attr("src", gifSet[1]);
                    break;
                 case 2:
                    gifElement[i].attr("src", gifSet[2]);
                    break;
                 case 3:
                    gifElement[i].attr("src", gifSet[3]);
                    break;
            }
            gifDisplayArray[i] = true;
        }
    } else {
        if (gifDisplayArray[i]){
           switch(i){
                case 0:
                    gifElement[i].attr("src", staticSet[0]);
                    break;
                 case 1:
                    gifElement[i].attr("src", staticSet[1]);
                    break;
                 case 2:
                    gifElement[i].attr("src", staticSet[2]);
                    break;
                 case 3:
                    gifElement[i].attr("src", staticSet[3]);
                    break;
           }
            gifDisplayArray[i] = false;
        }
    }
    }
}



//should go to overall.js
//var navLinkArray = ["link-home", "link-projects", "link-resume", "link-about"];
//
//function navCheck(){
//    var currentViewTopEdgePosition = $(window).scrollTop();
//    if (currentViewTopEdgePosition > 625){
//        for (var i=0; i<navLinkArray.length; i++){
//            var linkName = "#"+navLinkArray[i];
//            $(linkName).css("color", "#555");
//        }
//        $("#indicator-dot").css("backgroundColor", "#555");
//        $("#cf").css("opacity", ".7");
//    } else {
//         for (var i=0; i<navLinkArray.length; i++){
//            var linkName = "#"+navLinkArray[i];
//            $(linkName).css("color", "#fff");
//        }
//        $("#indicator-dot").css("backgroundColor", "#fff");
//        $("#cf").css("opacity", ".1");
//    }
//
//}