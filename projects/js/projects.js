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

var links = new Array(
	"../motion/motion.html",
	"../expression/expression.html",
	"../archive/archive.html",
	"../steam/steam.html",
	"../soaphero/soaphero.html",
	"../symbio/symbio.html",
	"../drive/drive.html",
	"../native/native.html",
	"../bristol/bristol.html",
	"../turo/turo.html",
	"../calor/calor.html"
);

$(document).ready(
	hoverLoop()
);


function hoverLoop(){
	for (var i = 0; i < projects.length; i++) {	$(projects[i]).mouseover(fadeImage(projects[i]));
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



function move(input){
    var dot = document.getElementById("indicator-dot");
    //for setting up dot position after page loaded
    
    if (input == "currentPath"){
        var input = currentPath;
    }

    if (window.outerWidth > 680){
        if(input == "index"){
            //dot.style.left = "210px";
            dot.style.left = "18%";
        } else if (input == "resume"){
            //dot.style.left = "552px";
            dot.style.left = "65%";
        } else if (input == "about"){
            //dot.style.left = "695px";
            dot.style.left = "85%";
        } else {
            //dot.style.left = "395px";
            dot.style.left = "43.5%";
        }   
    }
}

function getRandom(){
    var num = Math.floor(Math.random() * 11);
    console.log(num);
        console.log($("#random").attr("href"));

    $("#random").attr("href", links[num]);
}




