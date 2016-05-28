var enterBtnId = document.getElementById("enter_btn");
var cookieId = document.getElementById("cookie");
var welcomeScreenId = document.getElementById("welcomeScreen");

welcomeScreenId.addEventListener("webkitTransitionEnd", showAbout);
welcomeScreenId.addEventListener("mozTransitionEnd", showAbout);
welcomeScreenId.addEventListener("oTransitionEnd", showAbout);
enterBtnId.addEventListener("click", function() {closeWelcome()});
enterBtnId.addEventListener("mouseover",
	function() {cookieAnim("translate(0, -15px)",
		"0.5s",
		"", 
		"cubic-bezier(.35,.84,.62,.79)")})

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

	aboutHeadId.style.transition = "opacity 1s, margin-top 1s";
	aboutHeadId.style.webkitTransition = "opacity 1s, margin-top 1s";

	aboutContentId.style.webkitTransition = "opacity 1s, margin-top 1s";
	aboutContentId.style.transition = "opacity 1s, margin-top 1s";

	aboutContentId.style.webkitTransitionDelay = "0.5s";
	aboutContentId.style.transitionDelay = "0.5s";

}

function closeWelcome() {
	welcomeScreenId.style.height = "0%";
	enterBtnId.style.opacity = "0";
	cookieId.style.opacity = "0";

	welcomeScreenId.style.transition = " height 1s"
	welcomeScreenId.style.WebkitTransition = "height 1s";

	cookieId.style.transition = "opacity 0.7s";
	cookieId.style.WebkitTransition = "opacity 0.7s";

	enterBtnId.style.transition = "opacity 0.7s";
	enterBtnId.style.WebkitTransition = "opacity 0.7s";
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