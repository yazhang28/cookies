var enterBtnId = document.getElementById("enterBtn");
var cookieId = document.getElementById("cookie");
var welcomeScreenId = document.getElementById("welcomeScreen-init");
var aboutId = document.getElementById("about");
var aboutHeadId = document.getElementById("aboutHead");
var aboutContentId = document.getElementById("aboutContent");
var shopTitleId = document.getElementById("shopTitle");
var shopContentId = document.getElementById("shopContent");
var cookiesBtnId = document.getElementsByClassName("cookieBtn");
var cookieArrLen = cookiesBtnId.length;
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
	elementHideOrShow(aboutHeadId, false, true);
	elementHideOrShow(aboutContentId, false, true);
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
		elementHideOrShow(aboutHeadId, false, true);
		elementHideOrShow(aboutContentId, false, true);
		elementHideOrShow(shopTitleId, false, true);
		pullTabWrapId.id = "pullTab-wrap";
	}, 1000);
});


// check if element is in viewport and apply appropriate animation
window.addEventListener("scroll", function () {
	pullTabWrapId.id = "pullTab-wrap";

	scrollAnim();

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
			elementHideOrShow(aboutHeadId, false, false);
			elementHideOrShow(aboutContentId, false, false);
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

// function applies hide or show animation to div
function elementHideOrShow(element, isCookie, hide) {
	if (isCookie == true) {
		if (hide == true) {
				// console.log("cookie hide");
				// console.log(element.className);
				element.className = element.className.replace('cookieShowUp' , 'cookieHide' );
		} else {
				// console.log("cookie show");
				// console.log(element.className);
				element.className = element.className.replace('cookieHide' , 'cookieShowUp' );
		}
	} else {
		if (hide == true) {
			element.className = element.className.replace('element-final-style' , 'element-init-style' );
		} else {
			element.className = element.className.replace('element-init-style', 'element-final-style');
		}
	}
}

function scrollAnim() {
	var i = 0;

	var aboutInView = inView(aboutId);
	var shopTitleInView = inView(shopTitleId);
	var shopContentInView = inView(shopContentId);

	if (aboutInView == false) {
		elementHideOrShow(aboutHeadId, false, true);
		elementHideOrShow(aboutContentId, false, true);
	} else {
		elementHideOrShow(aboutHeadId, false, false);
		elementHideOrShow(aboutContentId, false, false);
	}

	if (shopTitleInView == false) {
		elementHideOrShow(shopTitleId, false, true);
	} else {
		elementHideOrShow(shopTitleId, false, false);
	}

	if (shopContentInView == false) {
		(function loop(i) {
			setTimeout(function () {
				elementHideOrShow(cookiesBtnId[i], true, true);
				i++;
				if (i < cookieArrLen) {
					loop(i);
				}
			}, 300);
		})(i);
	} else {
		(function loop(i) {
			setTimeout(function () {
				elementHideOrShow(cookiesBtnId[i], true, false);
				i++;
				if (i < cookieArrLen) {
					loop(i);
				}
			}, 300);
		})(i);
	}
}

// function checks if div element is in viewport or not
function inView(el) {
	var rect = el.getBoundingClientRect();
	
	return (
	rect.bottom >= 0 && rect.right >= 0 &&
	rect.top <= (window.innerHeight || document.documentElement.clientHeight) &&
	rect.left <= (window.innerWidth || document.documentElement.clientWidth)
	);
}