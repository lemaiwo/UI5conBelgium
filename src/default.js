/*
 * Web-site pages
 */
require('file-loader?name=[name].[ext]!./index.html');

/*
 * Shows/hides the scroll-to-top button depending on the scroll state
 */
window.onscroll = function() {
	if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
		document.getElementById("navTopButton").style.display = "block";
	} else {
		document.getElementById("navTopButton").style.display = "none";
	}
};

/*
 * Scrolls to the top of the document
 */
window.scrollToTop = function() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
};

//Internal pixel
new Image().src = "https://openui5.hana.ondemand.com/resources/sap/ui/core/themes/base/img/1x1.gif?page=ui5conbelgium&ref=" + encodeURIComponent(document.referrer);