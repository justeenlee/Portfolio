$(window).bind("load",function() {setTimeout(addVideo, 1400);});

function addVideo(){
	document.getElementById('bristol-overview').innerHTML= '<iframe src="http://player.vimeo.com/video/142019964?byline=0&amp;portrait=0&amp;color=eee&amp;rel=0;" width="100%" height="100%" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
}

$(window).scroll(function (){
    //load animation
    $("#bristol-animation").hover(
		function()
		{
			$(this).attr("src", "images/product-animation-turning.gif");
		},
		function()
		{
			$(this).attr("src", "images/product-animation-turning-static.jpg");
		}
        );
});	
    

