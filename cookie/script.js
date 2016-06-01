var enterBtnId = document.getElementById("enterBtn");
var cookieId = document.getElementById("cookie");
var welcomeScreenId = document.getElementById("welcomeScreen-init");
var wrapAboutId = document.getElementById("wrap-about");
var aboutHeadId = document.getElementById("aboutHead-init");
var aboutContentId = document.getElementById("aboutContent-init");
var pullTabIconId = document.getElementById("pullTabBtnIcon");
var pullTabBtnId = document.getElementById("pullTabBtn");

// animate cookie icon when mousing over enter button
enterBtnId.addEventListener("mouseover", function () {
	cookieAnim("cookie-anim");
});

enterBtnId.addEventListener("mouseout", function () {
	cookieAnim("cookie");
});

// closes welcome screen and re-enable scroll when enter button clicked
enterBtnId.addEventListener("click", function() {
	pullTabIconId.className = "glyphicon glyphicon-chevron-up img-responsive";
	setTimeout(function () {
		welcomeAction("open");
	}, 300);
});

// return to welcome screen and disable scroll when tab is clicked
pullTabBtnId.addEventListener("click", function () {
	pullTabIconId.className = "glyphicon glyphicon-remove img-responsive";
	setTimeout(function () {
		welcomeAction("close");
		hideAbout();
	}, 300);
});


// check if element is in viewport
window.addEventListener("scroll", divPassed);

function cookieAnim(setId) {
	cookieId.id = setId;
}

function welcomeAction(action) {
	if (action == "open") {
		document.body.style.overflow = "auto";
		welcomeScreenId.id = "welcomeScreen-final";
		enterBtnId.id = "enterBtn-final";
		cookieId.id = "cookie-final";
		setTimeout(showAbout, 500);
	} else {
		document.body.style.overflow = "hidden";
		welcomeScreenId.id = "welcomeScreen-init";
		enterBtnId.id = "enterBtn";
		cookieId.id = "cookie";
	}
}

function showAbout() {
		aboutHeadId.id = "aboutHead-final";
		aboutContentId.id = "aboutContent-final";
}

function hideAbout() {
	aboutHeadId.id = "aboutHead-init";
	aboutContentId.id = "aboutContent-init";
}

// make function usable for all elements
function divPassed() {
	var bottomLeft = wrapAboutId.clientHeight + wrapAboutId.clientTop;
	if (scrollY > bottomLeft) {
		// aboutHeadId.id = "aboutHead-init";
		// aboutContentId.id = "aboutContent-init";
		hideAbout();
	} else {
		showAbout();
	}
}