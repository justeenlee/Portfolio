$(window).bind("load", function() {  
	setTimeout(function() {addVideo()}, 1400);
}); 



function addVideo(){
	document.getElementById('trax').innerHTML= '<iframe src="http://player.vimeo.com/video/102564768?portrait=0&amp;color=ffffff" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
	document.getElementById('puppyWatch').innerHTML = '<iframe src="http://player.vimeo.com/video/101643280?portrait=0&amp;color=e6ca5e" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>'
};



