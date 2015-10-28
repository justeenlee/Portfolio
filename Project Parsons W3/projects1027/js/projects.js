var fadeInSpeed = 500;
var fadeOutSpeed = 650;
var projects = new Array(
	"#project-crown",
	"#project-christmas-design",
	"#project-bridge",
	"#project-parsons",
	"#project-ixda",
	"#project-expression",
	"#project-motion",
	"#project-archive",
	"#project-turo",
	"#project-symbio",
	"#project-native",
	"#project-steam",
	"#project-soaphero",
	"#project-lift",
	"#project-drive",
	"#project-calor",
	"#project-bristol"
);

$(document).ready(
	hoverLoop
);

function hoverLoop(){
	for (var i = 0; i < projects.length; i++) {
		$(projects[i]).mouseover(fadeImage(projects[i]));
	}
};

function fadeImage(projectName){
	$(projectName).hover(
		function() {
			$(projectName).stop().fadeTo(fadeInSpeed, 0);
		},
		function() {
			$(projectName).stop().fadeTo(fadeOutSpeed,1);
		}
	);
};
