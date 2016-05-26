var enterBtnId = document.getElementById("enter_btn");
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

function displayHidden(element) {
	element.style.display = "block";
}

function closeWelcome() {
	document.getElementById("welcomeScreen").style.height = "0%";
	
}

function cookieAnim(transf, transi, transDelay, transFunction) {
	var cookieId = document.getElementById("cookie");
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