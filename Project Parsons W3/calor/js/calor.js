$(window).bind("load", function() {  
	setTimeout(function() {addVideo()}, 1400);
}); 



function addVideo(){
	document.getElementById('promotion-panel').innerHTML= '<iframe src="http://player.vimeo.com/video/124192436?byline=0&amp;portrait=0&amp;color=deae62&amp;rel=0;" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
	document.getElementById('video-cartridge-mechanism').innerHTML= '<iframe src="http://player.vimeo.com/video/123803268?byline=0&amp;portrait=0&amp;color=deae62&amp;rel=0;" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
	document.getElementById('video-set-temp').innerHTML= '<iframe src="http://player.vimeo.com/video/123803900?byline=0&amp;portrait=0&amp;color=deae62&amp;rel=0;" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
	
};

