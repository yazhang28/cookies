var enterBtnId = document.getElementById("enterBtn");
var cookieId = document.getElementById("cookie");
var welcomeScreenId = document.getElementById("welcomeScreen-init");

var contactBtn = document.getElementById("contact");
var infoId = document.getElementById("info");

var pullTabWrapId = document.getElementById("pullTab-wrap");
var pullTabIconId = document.getElementById("pullTabBtnIcon");
var pullTabBtnId = document.getElementById("pullTabBtn");

var aboutId = document.getElementById("about");
var aboutHeadId = document.getElementById("aboutHead");
var aboutContentId = document.getElementById("aboutContent");

var shopTitleId = document.getElementById("shopTitle");
var underlineId = document.getElementById("underline");
var shopContentId = document.getElementById("shopContent");

var cookiesBtnId = document.getElementsByClassName("cookieBtn");
var cookiesBtnTxtId = document.getElementsByClassName("btnTxt");

var NavBtnLeftId = document.getElementById("upBtn");
var NavBtnRightId = document.getElementById("downBtn");
var closeBtnId = document.getElementById("closeBtn");
var currentRowIndex = 0;
var hide = 0;

var colsId = document.getElementsByClassName("tableCol");
var gap2Id = document.getElementById("gap2");
var gap3Id = document.getElementById("gap3");

var cookieDisId = document.getElementById("disWrap");
var cookieDes;
var cookieIngred;

var row1Dis = document.getElementsByClassName("row1");
var row2Dis = document.getElementsByClassName("row2");
var row3Dis = document.getElementsByClassName("row3");
var row4Dis = document.getElementsByClassName("row4");

var row1Ingred = document.getElementsByClassName("row1i");
var row2Ingred = document.getElementsByClassName("row2i");
var row3Ingred = document.getElementsByClassName("row3i");
var row4Ingred = document.getElementsByClassName("row4i");

// colVisible used to stop inView from being called until the cookie description column is visible
var colVisible = false;
var scrollTimer = -1;

var row1 = {
	one: "Chocolate Chip",
	two: "Toffee Crunch",
	three: "Oatmeal Raisin</br>w/Pecans"
};

var row2 = {
	one: "Old-Fashioned</br>Sugar",
	two: "Peanut Butter</br>Combo",
	three: "Snickerdoodle"
};

var row3 = {
	one: "Kitchen Sink",
	two: "Chocolate Chip</br>w/Walnuts",
	three: "Oatmeal Chocolate</br>Cherry"
};

var row4 = {
	one: "Brownie Cookie",
	two: "Milk Chocolate</br>Chunk",
	three: "Toffee Fudge</br>Brownie"
};

// array of cookie descriptions and ingredients
var rowsDes = [row1Dis, row2Dis, row3Dis, row4Dis];
var currentRowDes = rowsDes[0];

var rowsIngred = [row1Ingred, row2Ingred, row3Ingred, row4Ingred];
var currentRowIngred = rowsIngred[0];
var rows = [row1, row2, row3, row4];

// matrix of which cookie buttons to hide when a cookie button is clicked
var cookiebtnClicked = [[1,2],[0,2],[0,1]];


var description = document.getElementById("description");
var ingred = document.getElementById("ingred");
var ingredBtn = document.getElementById("ingredBtn");

// animate cookie icon when mousing over enter button
enterBtnId.addEventListener("mouseover", function () {
	cookieAnim("cookie-anim");
});

enterBtnId.addEventListener("mouseout", function () {
	cookieAnim("cookie");
});

// closes welcome screen and re-enable scroll when enter button clicked
enterBtnId.onclick = function () {
	window.scrollTo(0,0);
	elementHideOrShow(aboutHeadId, false, true);
	elementHideOrShow(aboutContentId, false, true);
	pullTabIconId.className = "glyphicon glyphicon-remove img-responsive";
	setTimeout(function () {
		welcomeAction("open");
	}, 300);
};

// return to welcome screen and disable scroll when tab is clicked
pullTabBtnId.onclick = function () {
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
};

// show contact on click and hide when scrolling
contactBtn.onclick = function () {
    contactBtn.classList.toggle("active");
    infoId.classList.toggle("show");
};

// check if element is in viewport and apply appropriate animation
window.addEventListener("scroll", function () {
	contactBtn.classList.remove("active");
	infoId.classList.remove("show");

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

// when up cookie nav button is clicked
NavBtnLeftId.onclick = function () {
    navClicked(true);
};

// when down cookie nav button is clicked
NavBtnRightId.onclick = function () {
    navClicked(false);
};

// when back button selected displays nav buttons and previous cookies
closeBtnId.onclick = function () {
    elementHideOrShow(NavBtnLeftId,true,false);
    elementHideOrShow(NavBtnRightId,true,false);
    elementHideOrShow(cookieDisId,false,true);
    elementHideOrShow(closeBtnId,true,true);
    description.classList.remove("h");
    ingred.classList.remove("s");
    ingredBtn.innerHTML = "ingredients";

    colVisible = false;
    for (var i = 0; i < 3; i++) {
        hideCol(colsId[i], cookieDes, cookieIngred, false);
    }
    loopDelay(0,false);
};

// ingredient button clicked to show ingredients and back option
ingredBtn.onclick = function () {
    description.classList.toggle("h");
    ingred.classList.toggle("s");
    if (ingred.classList.contains("s")) {
        ingredBtn.innerHTML = "back";
    } else {
        ingredBtn.innerHTML = "ingredients";
    }
};

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
		closeBtnId.click();
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

// function re-positions columns to reveal cookie description column and selected cookie description
function hideCol(element, cookieDes, cookieIngred, hide){
	if (hide == true) {
		setTimeout(function () {
			cookieDisId.className = cookieDisId.className.replace('hideCol', 'showCol');
			cookieDes.className = cookieDes.className.replace('hideCol', 'showCol');
			cookieIngred.className = cookieIngred.className.replace('hideCol', 'showCol');
			setTimeout(function () {
				colVisible = true;
				elementHideOrShow(cookieDisId,false,false);
			}, 10);
			gap2Id.className = gap2Id.className.replace('showCol', 'hideCol');
			gap3Id.className = gap3Id.className.replace('showCol', 'hideCol');
			element.className = element.className.replace('showCol', 'hideCol');
		}, 900);
	} else {
		setTimeout(function () {
			colsId[3].className = colsId[3].className.replace('showCol', 'hideCol');
			gap2Id.className = gap2Id.className.replace('hideCol', 'showCol');
			gap3Id.className = gap3Id.className.replace('hideCol', 'showCol');
			element.className = element.className.replace('hideCol', 'showCol');
			cookieDes.className = cookieDes.className.replace('showCol', 'hideCol');
			cookieIngred.className = cookieIngred.className.replace('showCol', 'hideCol');
		}, 1300);
	}
}

function scrollAnim() {
	var underlineInView = inView(underlineId);
	var aboutInView = inView(aboutId);
	var shopTitleInView = inView(shopTitleId);
	var shopContentInView = inView(shopContentId);
	var cookieDisInView = inView(cookieDisId);

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

	if (underlineInView == false) {
		underlineId.classList.remove('col-xs-8');
		underlineId.classList.add('col-xs-1');
		underlineId.classList.remove('col-xs-offset-2');
		underlineId.classList.add('col-xs-offset-6');
	} else {
		underlineId.classList.remove('col-xs-1');
		underlineId.classList.add('col-xs-8');
		underlineId.classList.remove('col-xs-offset-6');
		underlineId.classList.add('col-xs-offset-2');

	}

	if (shopContentInView == false) {
		loopDelay(0, true);
	} else {
		loopDelay(0, false);
	}
	if (colVisible == true) {
		if (cookieDisInView == false) {
			elementHideOrShow(cookieDisId, false, true);
		} else {
			elementHideOrShow(cookieDisId, false, false);
		}
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
	currentRowDes = rowsDes[currentRowIndex];
	currentRowIngred = rowsIngred[currentRowIndex];
	cookiesBtnTxtId[0].innerHTML = rows[currentRowIndex].one;
	cookiesBtnTxtId[1].innerHTML = rows[currentRowIndex].two;
	cookiesBtnTxtId[2].innerHTML = rows[currentRowIndex].three;
}

// cookie button when clicked hides all other cookie buttons, nav buttons and displays back button
for (var row = 0; row < 3; row++) {
	(function (row) {
		cookiesBtnId[row].addEventListener("click", function () {
			cookieDes = currentRowDes[row];
			cookieIngred = currentRowIngred[row];
			for (var col = 0; col < 2; col++) {
				hide = cookiebtnClicked[row][col];
				elementHideOrShow(cookiesBtnId[hide],true,true);
				hideCol(colsId[hide], cookieDes, cookieIngred, true);
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