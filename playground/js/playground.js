$(window).bind("load",function(){
		init();
);

$( window ).resize(function() {
  setOverviewMarginTop();
});

$(window).scroll(function() {
	fadeInteractivePanel(); 
});


function init() {
	setOverviewMarginTop();
}


function setOverviewMarginTop(){
	var newMarginTop = ($(window).height())-10;
	$("#overview").css(
		"margin-top", newMarginTop
	);
	$("#overview").css("opacity",1)
}


function fadeInteractivePanel() {
	scrolled = $(this).scrollTop();
	$("#interactive-panel").css({
		  'opacity' : 1-(scrolled/468)
	});
}
	







