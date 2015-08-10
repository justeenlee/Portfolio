$(window).bind("load", function() {  
	setTimeout(function() {addVideo()}, 1400);
}); 

function addVideo(){
	document.getElementById('current-site').innerHTML= 
	'<iframe src="http://player.vimeo.com/video/115043886?portrait=0&amp;color=00f0b8" width="100%" height="500px" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
};


