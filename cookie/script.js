var enterBtnId = document.getElementById("enterBtn");
var cookieId = document.getElementById("cookie");
var welcomeScreenId = document.getElementById("welcomeScreen-init");
var wrapAboutId = document.getElementById("row-about");
var aboutHeadId = document.getElementById("aboutHead-init");
var aboutContentId = document.getElementById("aboutContent-init");
var pullTabWrapId = document.getElementById("pullTab-wrap");
var pullTabIconId = document.getElementById("pullTabBtnIcon");
var pullTabBtnId = document.getElementById("pullTabBtn");
var scrollTimer = -1;

// animate cookie icon when mousing over enter button
enterBtnId.addEventListener("mouseover", function () {
	cookieAnim("cookie-anim");
});

enterBtnId.addEventListener("mouseout", function () {
	cookieAnim("cookie");
});

// closes welcome screen and re-enable scroll when enter button clicked
enterBtnId.addEventListener("click", function() {
	window.scrollTo(0,0);
	aboutAction("hide");
	pullTabIconId.className = "glyphicon glyphicon-remove img-responsive";
	setTimeout(function () {
		welcomeAction("open");
	}, 300);
});

// return to welcome screen and disable scroll when tab is clicked
pullTabBtnId.addEventListener("click", function () {
	pullTabIconId.className = "glyphicon glyphicon-chevron-up img-responsive";
	setTimeout(function () {
		welcomeAction("close");
	}, 300);
	setTimeout(function () {
		window.scrollTo(0,0);
		aboutAction("hide");
		pullTabWrapId.id = "pullTab-wrap";
	}, 1000);
});


// check if element is in viewport
window.addEventListener("scroll", function () {
	pullTabWrapId.id = "pullTab-wrap";
	divPassed();

	// check if user stop scrolling
	if (scrollTimer != -1) {
		clearTimeout(scrollTimer);
	}
	scrollTimer = window.setTimeout(function () {
		scrollFinished();
	}, 500);
});

// show pull tab button when user stops scrolling
function scrollFinished() {
	setTimeout(function () {
		pullTabWrapId.id = "pullTab-wrap-show";
	}, 150)
}

function cookieAnim(setId) {
	cookieId.id = setId;
}

function welcomeAction(action) {
	if (action == "open") {
		document.body.style.overflow = "auto";
		welcomeScreenId.id = "welcomeScreen-final";
		enterBtnId.id = "enterBtn-final";
		cookieId.id = "cookie-final";
		setTimeout(function () {
			aboutAction("show");
			pullTabWrapId.id = "pullTab-wrap-show"
		}, 500);

	} else {
		document.body.style.overflow = "hidden";
		welcomeScreenId.id = "welcomeScreen-init";
		enterBtnId.id = "enterBtn";
		cookieId.id = "cookie";
		pullTabWrapId.id = "pullTab-wrap-final";
	}
}

function aboutAction(action) {
	if (action == "hide") {
		aboutHeadId.id = "aboutHead-init";
		aboutContentId.id = "aboutContent-init";
	} else {
		aboutHeadId.id = "aboutHead-final";
		aboutContentId.id = "aboutContent-final";
	}
}

// make function usable for all elements
function divPassed() {
	var bottomLeft = wrapAboutId.clientHeight + wrapAboutId.clientTop;
	if (scrollY > bottomLeft) {
		aboutAction("hide")
	} else {
		aboutAction("show");
	}
}