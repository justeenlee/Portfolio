$(window).bind("load",function() {setTimeout(addVideo, 1400);});

$(window).scroll(function (){
    gifCheck();
    //navCheck();
});

function addVideo(){
	document.getElementById('flash-trailer').innerHTML= '<iframe src="http://player.vimeo.com/video/147631280?byline=0&amp;portrait=0&amp;color=deae62&amp;rel=0;" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

};

