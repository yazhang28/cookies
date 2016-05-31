var enterBtnId = document.getElementById("enter-btn");
var cookieId = document.getElementById("cookie");
var welcomeScreenId = document.getElementById("welcomeScreen-init");
var wrapAboutId = document.getElementById("wrap-about");
var aboutId = document.getElementById("about");
var aboutContentId = document.getElementById("about-content-init");
var aboutHeadId = document.getElementById("about-head-init");

window.addEventListener("scroll", divPassed);

function divPassed() {
	var bottomLeft = wrapAboutId.clientHeight + wrapAboutId.clientTop;
	if (scrollY > bottomLeft) {
		console.log("passed");
		aboutId.style.opacity = "0";
		aboutId.style.transition = "0.1s";
	} else {
		console.log("not passed");
		aboutId.style.opacity = "1";
		aboutId.style.transition = "1s";
	}
}

function hideElement(element) {
	element.style.opacity = "0";
}

// animate cookie icon when mousing over enter button
enterBtnId.addEventListener("mouseover", function () { cookieAnim("cookie-anim")});
enterBtnId.addEventListener("mouseout", function () {cookieAnim("cookie")});

// closes welcome screen and re-enable scroll when enter button clicked
enterBtnId.addEventListener("click", function() {closeWelcome()});

// show about after welcome page transitions
welcomeScreenId.addEventListener("webkitTransitionEnd", showAbout);
welcomeScreenId.addEventListener("mozTransitionEnd", showAbout);
welcomeScreenId.addEventListener("oTransitionEnd", showAbout);

function cookieAnim(setId) {
	cookieId.id = setId;
}

function closeWelcome() {
	document.body.style.overflow = "auto";
	welcomeScreenId.id = "welcomeScreen-final";
	enterBtnId.id = "enter-btn-final";
	cookieId.id = "cookie-final";
}

function showAbout() {
	aboutContentId.id = "about-content-final";
	aboutHeadId.id = "about-head-final";
}
