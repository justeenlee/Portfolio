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
	if (window.pageYOffset > 14798){
		if (window.pageYOffset < 15209){
			document.getElementById('animation-network').innerHTML='<img src="images/animation-network-small.gif" width="100%">';
			console.log("network added");
			}
		}
		if (window.pageYOffset > 14798) {
			document.getElementById('animation-network').innerHTML="";
			console.log("network withdrawn");
		}
		if (window.pageYOffset < 15209) {
			document.getElementById('animation-network').innerHTML="";
			console.log("network withdrawn");
		}
};

function addAnimation1(){
	if (window.pageYOffset > 12430){
		if (window.pageYOffset < 12814){
			document.getElementById('animation-symbio').innerHTML='<img src="images/attempt1.gif" width="100%">';
			console.log("dribbble added");
			}
		}
		if (window.pageYOffset > 12430) {
			document.getElementById('animation-symbio').innerHTML="";
			console.log("dribbble withdrawn");
		}
		if (window.pageYOffset < 12814) {
			document.getElementById('animation-symbio').innerHTML="";
			console.log("dribbble withdrawn");
		}	
};

