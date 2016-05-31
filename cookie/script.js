var enterBtnId = document.getElementById("enter-btn");
var cookieId = document.getElementById("cookie");
var welcomeScreenId = document.getElementById("welcomeScreen-init");
var wrapAboutId = document.getElementById("wrap-about");
var aboutHeadId = document.getElementById("about-head-init");
var aboutContentId = document.getElementById("about-content-init");

// animate cookie icon when mousing over enter button
enterBtnId.addEventListener("mouseover", function () { cookieAnim("cookie-anim")});
enterBtnId.addEventListener("mouseout", function () {cookieAnim("cookie")});

// closes welcome screen and re-enable scroll when enter button clicked
enterBtnId.addEventListener("click", function() {closeWelcome()});

// check if element is in viewport
window.addEventListener("scroll", divPassed);

function cookieAnim(setId) {
	cookieId.id = setId;
}

function closeWelcome() {
	document.body.style.overflow = "auto";
	welcomeScreenId.id = "welcomeScreen-final";
	enterBtnId.id = "enter-btn-final";
	cookieId.id = "cookie-final";
	setTimeout(showAbout, 500);
}

function showAbout() {
		aboutHeadId.id = "about-head-final";
		aboutContentId.id = "about-content-final";
}

// make function usable for all elements
function divPassed() {
	var bottomLeft = wrapAboutId.clientHeight + wrapAboutId.clientTop;
	if (scrollY > bottomLeft) {
		console.log("passed");
		aboutHeadId.id = "about-head-init";
		aboutContentId.id = "about-content-init";
	} else {
		console.log("not passed");
		showAbout();
	}
}