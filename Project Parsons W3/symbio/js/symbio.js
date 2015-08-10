$(window).bind("load", function() {  
	setTimeout(function() {addVideo()}, 1400);
}); 

$(window).scroll(
	function (){
	console.log(window.pageYOffset);
	addAnimation1();
	addAnimation2();
	}
);

function addVideo(){
	document.getElementById('promotion-panel').innerHTML= '<iframe src="http://player.vimeo.com/video/99761829?byline=0&amp;portrait=0&amp;color=f3af8a" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
	
};

function addAnimation2(){
	if (window.pageYOffset > 16020){
		if (window.pageYOffset < 16200){
			document.getElementById('animation-network').innerHTML='<img src="images/animation-network-small.gif" width="880px">';
			console.log("animation2 added");
			}
		}
		if (window.pageYOffset > 16200) {
			document.getElementById('animation-network').innerHTML="";
			console.log("animation2 withdrawn");
		}
		if (window.pageYOffset < 16020) {
			document.getElementById('animation-network').innerHTML="";
			console.log("animation2 withdrawn");
		}
};

function addAnimation1(){
	if (window.pageYOffset > 13480){
		if (window.pageYOffset < 13980){
			document.getElementById('animation-symbio').innerHTML='<img src="images/attempt1.gif" width="600px">';
			console.log("animation1 added");
			}
		}
		if (window.pageYOffset > 13980) {
			document.getElementById('animation-symbio').innerHTML="";
			console.log("animation1 withdrawn");
		}
		if (window.pageYOffset < 13480) {
			document.getElementById('animation-symbio').innerHTML="";
			console.log("animation1 withdrawn");
		}	
};

