fetch(`https://login.i-ready.com/student/v2/web/lesson_component//${lessonId.split("_").join(".").substring(0, lessonId.split("_").join(".").length - 3)}.phx.${lessonType}_71da0b35-cb71-4540-9e75-73203c6686dc_M_math/markprogress/DI.MATH.GEO.8.1005.phx.10_71da0b35-cb71-4540-9e75-73203c6686dc_M_math`, {
			"headers": {
				"accept": "*/*",
				"accept-language": "en-US,en;q=0.9",
				"content-type": "application/json;charset=UTF-8",
				"sec-fetch-dest": "empty",
				"sec-fetch-mode": "cors",
				"sec-fetch-site": "same-origin",
				"sec-gpc": "1"
			},
			"referrer": "https://login.i-ready.com/student/dashboard/home",
			"referrerPolicy": "strict-origin-when-cross-origin",
			"body": `{\"value\":\"{\\\"finalStageArr\\\":[],\\\"curSlideInt\\\":${slideCount - 1},\\\"slideCompletedArr\\\":${slidesCompletedArr},\\\"allScoreDataArr\\\":[],\\\"stateStoreDataObj\\\":{}}\",\"bucket\":\"short_term_unsecured\",\"datatype\":\"json\"}`,
			"method": "POST",
			"mode": "cors",
			"credentials": "include"
		});
