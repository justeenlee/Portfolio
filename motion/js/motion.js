$(document).ready(function() {
	
$("#dots").hover(
	function()
	{
		$(this).attr("src", "images/bring-life-surprise-and-delight.gif");
	},
	function()
	{
		$(this).attr("src", "images/bring-life-surprise-and-delight.jpg");
	}                         
);	
    
$("#flashynyc").hover(
	function()
	{
		$(this).attr("src", "images/FlashyNYC.gif");
	},
	function()
	{
		$(this).attr("src", "images/FlashyNYC-static.jpg");
	}                         
);		

$("#dynamiccube").hover(
	function()
	{
		$(this).attr("src", "images/Dynamic-Cube@800.gif");
	},
	function()
	{
		$(this).attr("src", "images/Dynamic-Cube@800-static.jpg");
	}                         
);	
	
$("#blobject").hover(
	function()
	{
		$(this).attr("src", "images/Blobular-Slices@800.gif");
	},
	function()
	{
		$(this).attr("src", "images/Blobular-Slices@800-static.jpg");
	}                         
);
	
$("#badge").hover(
	function()
	{
		$(this).attr("src", "images/fireworks-badge-wide.gif");
	},
	function()
	{
		$(this).attr("src", "images/fireworks-badge-static.jpg");
	}                         
);
$("#parsons").hover(
	function()
	{
		$(this).attr("src", "images/parsonsNYC500.gif");
	},
	function()
	{
		$(this).attr("src", "images/parsonsNYC-static.jpg");
	}                         
);  
$("#symbio").hover(
	function()
	{
		$(this).attr("src", "images/symbio.gif");
	},
	function()
	{
		$(this).attr("src", "images/symbio-static.jpg");
	}                         
);
$("#worldCup").hover(
	function()
	{
		$(this).attr("src", "images/worldCup14Final.gif");
	},
	function()
	{
		$(this).attr("src", "images/worldCup-static.jpg");
	}                         
);
$("#ring").hover(
	function()
	{
		$(this).attr("src", "images/0805Ring.gif");
	},
	function()
	{
		$(this).attr("src", "images/ring-static.jpg");
	}                         
);
$("#bounce").hover(
	function()
	{
		$(this).attr("src", "images/0806ball.gif");
	},
	function()
	{
		$(this).attr("src", "images/bounce-static.jpg");
	}                         
);
	
	
	
	
	
	
	
	
	
});

$(window).scroll(
	function(){
	pauseAnimation();
	}
);

function pauseAnimation(){
	var scrolled = $(window).scrollTop();
	//console.log(scrolled);
	if (scrolled >= 500){
		$("#letter-o-left").removeClass("animation-first-spin");
		$("#letter-o-right").removeClass("animation-second-spin");
	}
	else{
		$("#letter-o-left").addClass("animation-first-spin");
		$("#letter-o-right").addClass("animation-second-spin");
	}
};

$(window).resize(
	function() {
		resizeSpinner();
	}
);

$(window).load(
	function() {
		resizeSpinner();
	}
);

function resizeSpinner(){
	var titlePicWidthRatio = ($("#title-pic").width())/880;
	var newWidth = 85*titlePicWidthRatio;;
	var newWidthAttribute = newWidth + "px";
		//console.log(newWidthAttribute);
	var titlePicHeightRatio = ($("#title-pic").height())/543;
	var newTop = 229*titlePicHeightRatio;;
	var newTopAttribute = newTop + "px";
		//console.log(newTopAttribute);
	$("#letter-o-left").attr("width", newWidthAttribute);
	$("#letter-o-right").attr("width", newWidthAttribute);
	$("#first-o").css("top", newTopAttribute);
	$("#second-o").css("top", newTopAttribute);
	$("#first-o").css("display", "initial");
	$("#second-o").css("display", "initial");

	
	var newMotionGifHeight = $('#blobject').height();
		//console.log(newMotionGifHeight);
	$('[data-type="motion-gif"]').css("height", newMotionGifHeight);
	
	
	
	//adjust margin top temporarily
	var adjustmentElements = new Array(
		'#symbio',
		'#parsons',
		'#worldCup',
		'#ring',
		'#bounce',
		'#badge'
	);
	
	for (var i=0; i<adjustmentElements.length; i++){
		var newMarginTop = Math.ceil($(adjustmentElements[i]).height())/2;
		$(adjustmentElements[i]).css("margin-top",-newMarginTop);
	};
	
	
};

