var enterBtnId = document.getElementById("enter_btn");
var cookieId = document.getElementById("cookie");
var welcomeScreenId = document.getElementById("welcomeScreen");

// show about after welcome page transitions
welcomeScreenId.addEventListener("webkitTransitionEnd", showAbout);
welcomeScreenId.addEventListener("mozTransitionEnd", showAbout);
welcomeScreenId.addEventListener("oTransitionEnd", showAbout);

// closes welcome page when enter button clicked
enterBtnId.addEventListener("click", function() {closeWelcome()});

// cookie transition when hovering over enter button
enterBtnId.addEventListener("mouseover",
	function() {cookieAnim("translate(0, -15px)",
		"0.5s",
		"", 
		"cubic-bezier(.35,.84,.62,.79)")})

// cookie transition when mouse moves away from enter button
enterBtnId.addEventListener("mouseout", 
	function() {cookieAnim("translate(0, 0)",
		"0.5s",
		"0.1s",
		"cubic-bezier(.35,.84,.62,.79)")})

function showAbout() {
	var aboutContentId = document.getElementById("about-content");
	var aboutHeadId = document.getElementById("about-head");

	aboutContentId.style.marginTop = "20px";
	aboutHeadId.style.marginTop = "20px";
	aboutContentId.style.opacity = "1";
	aboutHeadId.style.opacity = "1";

	aboutHeadId.style.transition = "opacity 0.6s, margin-top 0.6s";
	aboutHeadId.style.webkitTransition = "opacity 0.6s, margin-top 0.6s";

	aboutHeadId.style.webkitTransitionDelay = "0.6s";
	aboutHeadId.style.transitionDelay = "0.6s";

	aboutContentId.style.webkitTransition = "opacity 0.6s, margin-top 0.6s";
	aboutContentId.style.transition = "opacity 0.6s, margin-top 0.6s";

	aboutContentId.style.webkitTransitionDelay = "0.8s";
	aboutContentId.style.transitionDelay = "0.8s";

}

// closes welcome screen and re-enable scroll
function closeWelcome() {
	document.body.style.overflow = "auto";
	welcomeScreenId.style.height = "0%";
	enterBtnId.style.opacity = "0";
	cookieId.style.opacity = "0";

	welcomeScreenId.style.transition = " height 0.8s"
	welcomeScreenId.style.WebkitTransition = "height 0.8s";

	cookieId.style.transition = "opacity 0.6s";
	cookieId.style.WebkitTransition = "opacity 0.6s";

	enterBtnId.style.transition = "opacity 0.6s";
	enterBtnId.style.WebkitTransition = "opacity 0.6s";

	welcomeScreenId.style.transitionDelay = "0.2s";
	cookieId.style.transitionDelay = "0.2s";
	enterBtnId.style.transitionDelay = "0.2s";
}

function cookieAnim(transf, transi, transDelay, transFunction) {
	cookieId.style.transform = transf;
	cookieId.style.msTransform = transf; // IE
	cookieId.style.WebkitTransform = transf; // Chrome & Safari

	cookieId.style.transition = transi;
	cookieId.style.WebkitTransition = transi;

	cookieId.style.transitionDelay = transDelay;
	cookieId.style.WebkitTransitionDelay = transDelay;

	cookieId.style.transitionTimingFunction = transFunction;	
	cookieId.style.WebkitTransitionTimingFunction = transFunction;	
}