$(window).load(function(){
	  $('.flexslider').flexslider({
		animation: "slide",
		start: function(slider){
		  $('div').removeClass('loading');
		}
	  });
	});
	//load video
	$(window).bind("load",
		function() {
			setTimeout(addVideo, 1400);
		}
	);
	function addVideo(){
		document.getElementById("playing-demo").innerHTML =	'<iframe src="http://player.vimeo.com/video/115917456?portrait=0&amp;color=35a1e1" width="100%" height="543px" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		document.getElementById("reload-demo").innerHTML = '<iframe src="http://player.vimeo.com/video/115918874?portrait=0&amp;color=35a1e1" width="100%" height="543px" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		document.getElementById("shooting-test").innerHTML = '<iframe src="http://player.vimeo.com/video/116455376?portrait=0&amp;color=35a1e1" width="100%" height="543px" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		document.getElementById("step-test").innerHTML = '<iframe src="http://player.vimeo.com/video/116455375?portrait=0&amp;color=35a1e1" width="100%" height="543px" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
	};