// sends fetch request to stop timer
fetch(`https://login.i-ready.com/student/v1/web/lesson_component/${csid}?action=resume`, {
	"headers": {
		"accept": "application/json, text/plain, */*",
		"accept-language": "en-US,en;q=0.9",
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin"
	},
	"referrer": "https://login.i-ready.com/student/dashboard/home",
	"referrerPolicy": "strict-origin-when-cross-origin",
	"body": null,
	"method": "GET",
	"mode": "cors",
	"credentials": "include"
});
