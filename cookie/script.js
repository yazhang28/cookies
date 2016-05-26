var cookieId = document.getElementById("cookie");
var enterBtnId = document.getElementById("enter_btn");
var landPageId = document.getElementById("landingPage");

		
enterBtnId.addEventListener("click", function() {displayHidden(landPageId)});
enterBtnId.addEventListener("mouseover", cookieAnimate);
enterBtnId.addEventListener("mouseout", cookieAnimate2);

function displayHidden(element) {
	element.style.display = "block";
}

function cookieAnimate() {
	cookieId.style.transform = "translate(0, -10px)";
	cookieId.style.transition = "0.5s";
	cookieId.style.transitionTimingFunction = "cubic-bezier(.35,.84,.62,.79)";
}

function cookieAnimate2() {
	cookieId.style.transform = "translate(0, 0)";
	cookieId.style.transition = "0.5s";
	cookieId.style.transitionDelay = "0.1s";
	cookieId.style.transitionTimingFunction = "cubic-bezier(.35,.84,.62,.79)";	
}