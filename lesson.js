var lessonId = html5Iframe.src.split("/")[html5Iframe.src.split("/").length - 1];
var lessonType = lessonId.split("_")[lessonId.split("_").length - 1];

var slideCount;

fetch(`https://login.i-ready.com/student/v2/web/appstate/${lessonId.split("_").join(".").substring(0, lessonId.split("_").join(".").length - 3)}.phx.${lessonType}_71da0b35-cb71-4540-9e75-73203c6686dc_M_math?bucket=short_term_unsecured&datatype=json`, {
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

		var slidesCompletedArr = [];

		for (var i = 0; i < slideCount; i++) {
			slidesCompletedArr.push(true);
		}
	});
