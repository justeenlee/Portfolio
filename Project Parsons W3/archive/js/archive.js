//load video
$(window).bind("load",
	function() {
		setTimeout(addVideo, 1400);
	}
);
function addVideo(){
	document.getElementById("puppy-watch").innerHTML =	'<iframe src="http://player.vimeo.com/video/101643280?portrait=0&amp;color=35a1e1" width="100%" height="543px" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
	document.getElementById("little-chef").innerHTML =	'<iframe src="http://player.vimeo.com/video/107313978?portrait=0&amp;color=35a1e1" width="100%" height="543px" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';

};
