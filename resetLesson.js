// this will reset a lesson or quiz to its original state

var lessonId = html5Iframe.src.split("/")[html5Iframe.src.split("/").length - 1];
var lessonType = lessonId.split("_")[lessonId.split("_").length - 1];
var csid = html5Iframe.src.split("?csid=")[1].split("&type")[0];

var slidesCompletedArr = [];
var scoreArr = [];
var slideCount;

fetch(`https://login.i-ready.com/student/v2/web/appstate/${csid}?bucket=short_term_unsecured&datatype=json`, {
		"headers": {
			"accept": "application/json, text/plain, */*",
			"accept-language": "en-US,en;q=0.9",
			"sec-fetch-dest": "empty",
			"sec-fetch-mode": "cors",
			"sec-fetch-site": "same-origin",
			"sec-gpc": "1"
		},
		"referrer": "https://login.i-ready.com/student/dashboard/home",
		"referrerPolicy": "strict-origin-when-cross-origin",
		"body": null,
		"method": "GET",
		"mode": "cors",
		"credentials": "include"
	}).then(response => response.json())
	.then(function(data) {
		slideCount = data.slideCompletedArr.length;

		slidesCompletedArr = [];
		scoreArr = [];

		for (var i = 0; i < slideCount; i++) {
			slidesCompletedArr.push(false);
			scoreArr.push(1);
		}

	});
