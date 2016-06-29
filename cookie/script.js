var enterBtnId = document.getElementById("enterBtn");
var cookieId = document.getElementById("cookie");
var welcomeScreenId = document.getElementById("welcomeScreen-init");

var aboutId = document.getElementById("about");
var aboutHeadId = document.getElementById("aboutHead");
var aboutContentId = document.getElementById("aboutContent");

var shopTitleId = document.getElementById("shopTitle");
var shopContentId = document.getElementById("shopContent");
var cookiesBtnId = document.getElementsByClassName("cookieBtn");

var cookiesBtnTxtId = document.getElementsByClassName("btnTxt");
var NavBtnLeftId = document.getElementById("upBtn");
var NavBtnRightId = document.getElementById("downBtn");
var closeBtnId = document.getElementById("closeBtn");
var currentRowIndex = 0;
var hide = 0;

var pullTabWrapId = document.getElementById("pullTab-wrap");
var pullTabIconId = document.getElementById("pullTabBtnIcon");
var pullTabBtnId = document.getElementById("pullTabBtn");
var scrollTimer = -1;

var row1 = {
	one: "White </br> Chocolate Chip",
	two: "Chocolate Chip </br> with Walnuts",
	three: "Chocolate Chip"
};

var row2 = {
	one: "White Chocolate </br> Macadamia Nut",
	two: "Peanut Butter </br> Chocolate Chip",
	three: "Peanut Butter"
};

var row3 = {
	one: "Chocolate </br> Macadamia Nut",
	two: "Sugar",
	three: "Oatmeal Raisin"
};

var row4 = {
	one: "Butter Almond",
	two: "Chocolate Pecan",
	three: "Snickerdoodle"
};

var rows = [row1, row2, row3, row4];

// matrix of which cookie buttons to hide when a cookie button is clicked
var cookiebtnClicked = [[1,2],[0,2],[0,1]];

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
				element.className = element.className.replace('cookieShowUp' , 'cookieHide' );
		} else {
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
		loopDelay(0, true);
	} else {
		loopDelay(0, false);
	}
}

// function loops through cookie btn ids to hide or show in sequence
function loopDelay(i, hide) {
	setTimeout(function () {
		elementHideOrShow(cookiesBtnId[i], true, hide);
		i++;
		if (i < 3) {
			loopDelay(i, hide);
		}
	}, 200);
}

// when up cookie nav button is clicked
NavBtnLeftId.addEventListener("click", function () {
	navClicked(true);
});

// when down cookie nav button is clicked
NavBtnRightId.addEventListener("click", function () {
	navClicked(false);
});

// when back button selected displays nav buttons and previous cookies
closeBtnId.addEventListener("click", function () {
	elementHideOrShow(NavBtnLeftId,true,false);
	elementHideOrShow(NavBtnRightId,true,false);
	elementHideOrShow(closeBtnId,true,true);
	loopDelay(0,false);
});

// when user clicks up down nav button, hides current row of cookies and cycles to next row
function navClicked(up) {
	loopDelay(0,true);
	setTimeout(function () {
		setTimeout(function () {
			cycleCookies(up);
		}, 500);
		loopDelay(0,false);
	}, 1000);
}

// change text of cookie buttons to imitate cycling
function cycleCookies(up) {
	if (up == true) {
		if (currentRowIndex == 3) {
			currentRowIndex = 0;
		} else {
			currentRowIndex++;
		}
	} else {
		if (currentRowIndex == 0) {
			currentRowIndex = 3;
		} else {
			currentRowIndex--;
		}
	}

	cookiesBtnTxtId[0].innerHTML = rows[currentRowIndex].one;
	cookiesBtnTxtId[1].innerHTML = rows[currentRowIndex].two;
	cookiesBtnTxtId[2].innerHTML = rows[currentRowIndex].three;
}

// cookie button when clicked hides all other cookie buttons, nav buttons and displays back button
for (var row = 0; row < 3; row++) {
	// var hide = 0;
	(function (row) {
		cookiesBtnId[row].addEventListener("click", function () {
			for (var col = 0; col < 2; col++) {
				hide = cookiebtnClicked[row][col];
				elementHideOrShow(cookiesBtnId[hide],true,true);
				elementHideOrShow(NavBtnLeftId,true,true);
				elementHideOrShow(NavBtnRightId,true,true);
				elementHideOrShow(closeBtnId,true,false);
			}
		});
	})(row);
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