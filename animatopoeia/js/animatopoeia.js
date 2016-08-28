$(window).bind("load",function() {setTimeout(addVideo, 1400);});

function addVideo(){
	document.getElementById('video-correct-match').innerHTML= '<iframe src="http://player.vimeo.com/video/143092412?byline=0&amp;portrait=0&amp;color=eee&amp;rel=0;" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    document.getElementById('video-incorrect-match').innerHTML= '<iframe src="http://player.vimeo.com/video/143092744?byline=0&amp;portrait=0&amp;color=eee&amp;rel=0;" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
    
}
