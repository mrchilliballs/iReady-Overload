window.onload = ()=>{
    const UI = document.createElement("div");
    //UI = Popup
    UI.innerHTML = `
    <link src="${chrome.runtime.getURL("libs/bootstrap-5.0.2-dist/css/bootstrap-iso.min.css")}">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
    .iready-img {
        height: 20px;
        width: 20px;
        text-align: center;
        margin-right:6px;
        margin-left:1px;
        margin-top:4px !important;
        transition: width 0.5s, height 0.5s;
    }
    .rounded-circle-1:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .rounded-circle-1 {
        height:40px;
        width: 40px;
        z-index:999999;
        transition: height;
        padding:5px;
        padding-left:8px;
        margin-left:20px;
        /*border-top-left-radius:5-px !important;
        border-bottom-left-radius:5px !important;*/
        border-radius:20px;
        transition: width 0.25s, height 0.25s, border-radius 0.25s;
            position:absolute;
            top:98.5vh;
            transform:translateY(-100%);
    }
    /* .rounded-circle:hover {
        width: 200px;
        height: 200px;
        border-radius: 5px !important;
    }
    .iready-img:hover {
        display: none;
    } */
    .bg-blue {
        background-color: #00bfff;
        border: gray 1px solid;
    }
    .hidden {
        display:none !important;
    }
    .expanded {
        width: 200px;
        height: 200px !important;
    }
    #collapse {
       display:inline;
       margin-left:10px;
    }
    .big {
        height:100px;
        width:200px;
    }
    .fas {
        margin-right:5px;
    }
    #button1 {
        height:100%;
    }
    #score {
        border-radius:50px;
    }
    </style>
    <section class="bg-blue rounded-circle-1 bootstrap-iso" id="popup">
      <img src="${chrome.runtime.getURL("icon.png")}" alt="iready icon" class="iready-img">
        <div id="collapse" class="hidden">
         
        <span id="skip"><i class="fas fa-forward" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"></i></span>
        <span id="time"><i class="fas fa-stopwatch"></i></span>
        <span id="diagnostic"><i class="fas fa-check-circle"></i></span>
        <span id="scoreT">100</span><br>
        <br><p id="textbox">UI by mrchilliballs. <br>Hacks by ArjhanToteck. <br>This extension is NOT affiliated with Curriculum Associates, LLC</p>
        <input type="range" id="score" min="0" max="100" placeholder="score" value="100"><br>
          </div>
          </section>
    `;
    document.body.appendChild(UI);
//needed for collapsing/expanding popup
const picture = document.querySelector(".iready-img");
const popup = document.querySelector("#popup");
const collapse = document.querySelector("#collapse");
const textBox = document.querySelector("#score");
const textBox2 = document.querySelector("#scoreT");
//all buttons_______________________________________________________
const skipButton = document.querySelector("#skip");
const timeButton = document.querySelector("#time");
const diagnosticSkipButton = document.querySelector("#diagnostic");
//recieves popup settings___________________________________________
chrome.runtime.onMessage.addListener(msgObj => {
    //adds values to localstorage
    console.log("response from popup.js:");
    console.log(msgObj);
    for (const setting of Object.keys(msgObj)) {
        console.log(setting);
        console.log("localstorage item", setting.toString(), "set to", msgObj[setting]);
        localStorage.setItem(setting.toString(), msgObj[setting]);
    }
});
//sets background
popup.style.backgroundColor = localStorage.getItem("background_color");
//sets display
if(localStorage.getItem("show") == false){
    popup.style.display = "none";
} else {
    popup.style.display = "block";
}
popup.style.color = localStorage.getItem("color");
if(localStorage.getItem("rounded") == false){
    popup.classList.remove("rounded-circle-1");
} else {
    popup.classList.add("rounded-circle-1")
}
console.log(picture, collapse, popup)
//event listener for toggling exapanded class
picture.addEventListener("click", ()=>{
    if(collapse.classList.contains("hidden")){
        popup.classList.toggle("expanded");
        picture.classList.toggle("less-margin");
        setTimeout(()=>{
            collapse.classList.toggle("hidden");
        }, 200)
    } else {
        collapse.classList.toggle("hidden");
        setTimeout(()=>{
            popup.classList.toggle("expanded");
            picture.classList.toggle("less-margin");
        }, 200)
    }
})
function changeText(txt){
    textBox.innerHTML = txt;
}
textBox.addEventListener("input", ()=>{
    textBox2.textContent = textBox.value;
})
//event listener for the minute farming button
timeButton.addEventListener("click", ()=>{
        //midgetfuckers minute farming script
    // checks if currently farming minutes
		if (minuteFarming) {
			csid = getCookie("csid");

			// sends fetch request to stop timer and update time
			fetch(`https://login.i-ready.com/student/v1/web/lesson_component/${csid}?action=pause`, {
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

			// resets some variables
			document.cookie = `csid=; expires=Thu, 18 Dec 1970 12:00:00 UTC"`;
			buttonId.innerText = "Farm minutes";
			minuteFarming = false;

			alert("The minutes should now be in your account.");
		}
		// checks if lesson/quiz is open
		if (!!window["html5Iframe"]) {
			// gets lesson data
			var csid = html5Iframe.src.split("?csid=")[1].split("&type")[0];
			var minutes = 45; // change the 45 to the amount of time you want. This is only neccessary for the alternate hack.

			// sets cookies in case something breaks
			document.cookie = `csid=${csid}; expires=Thu, 18 Dec 2999 12:00:00 UTC"`;
			document.cookie = `minutes=${minutes}; expires=Thu, 18 Dec 2999 12:00:00 UTC"`;

			alert("Neccessary data to farm minutes have now been collected. To begin farming minutes, go to the iReady menu by closing this lesson/quiz. Then, press this button again.");
		} else if (!getCookie("csid")) {
			// lesson isn't open and cookie isnt set
			alert("You do not have a lesson currently open. You must open a lesson to begin the proccess.")
		} else {
			// lesson isn't open and cookie is set
			csid = getCookie("csid");

			// sends fetch request to start timer
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

			// sets variable to know minutes are being farmed
			minuteFarming = true;
			buttonId.innerText = "Stop farming minutes";

			alert("The minute farming proccess has now begun. Do not close this page. Do not turn off your computer. After you press \"ok,\" every minute that passes will be added to your account. When you want to stop the timer and add the farmed minutes to your account, press the button labeled \"Stop farming minutes\". Press \"ok\" to begin.");
		}
})
//event listener for diagsnostic skip button
diagnosticSkipButton.addEventListener("click", ()=>{
    //midgetfuckers diagnostic skip script
    //checks if diagnostic hack is enabled
		if (!!XMLHttpRequest.prototype.realSend) {
			// disables hack
			XMLHttpRequest.prototype.send = XMLHttpRequest.prototype.realSend;
			XMLHttpRequest.prototype.realSend = undefined;
			alert("Hack was disabled.")
			buttonId.innerText = "Enable hack";
		} else {
			// checks if diagnostic is open
			if (typeof diagnosticIFrame == "undefined") {
				alert("Diagnostic not detected. Open the diagnostic first to use the hack.")
			} else if (!XMLHttpRequest.prototype.realSend) {
				var duration = 1000;

				// hijacks XMLHttpRequest.send() to modify requests
				XMLHttpRequest.prototype.realSend = XMLHttpRequest.prototype.send;
				XMLHttpRequest.prototype.send = function(body) {
					// modifies inputted request
					newBody = JSON.parse(body);
					if (newBody.correct == false) newBody.correct = true;
					if (newBody.durationSeconds != undefined) newBody.durationSeconds = duration;

					// sends actual request
					this.realSend(JSON.stringify(newBody));
				}
				alert("Hack was enabled. All answers inputted in diagnostic will be correct. Please do not answer questions too fast or your test will be marked as rushed.");
				buttonId.innerText = "Disable hack";
			}
		}
})
//skip lesson button event listener
skipButton.addEventListener("click", ()=>{
    //midgetfuckers lesson skip script
    if (!window["html5Iframe"] && !window["closereading_lesson"]) {
        alert("You do not have a lesson currently open. You must open a lesson to skip it.");
    }
    else {
        var csid;

        //close reading lesson
        if (document.getElementsByTagName("iframe")[0].id == "closereading_lesson") {
            if(!!closereading_lesson.contentDocument.getElementsByClassName("button fa fa-play pulse")[0]) closereading_lesson.contentDocument.getElementsByClassName("button fa fa-play pulse")[0].click();
            csid = closereading_lesson.src.split("?csid=")[1].split("#")[0];
        } else // normal lesson
        {
            csid = html5Iframe.src.split("?csid=")[1].split("&type")[0];
        }
        var scoreInput = csid.includes("10_") && document.getElementsByTagName("iframe")[0].id != "closereading_lesson" ? null : prompt("Quiz detected. What score would you like (out of 100)?", 100);
        var score = csid.includes("10_") && document.getElementsByTagName("iframe")[0].id != "closereading_lesson" ? null : `{"score":${scoreInput}}`;

        // tricks server into thinking specific lesson was completed
        fetch("https://login.i-ready.com/student/lesson/componentCompleted", {
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
            "body": `{\"componentStatusId\":\"${csid}\",\"instructionLessonOutcome\":${score}}`,
            "method": "POST",
            "mode": "cors",
            "credentials": "include"
        });

        alert("Close the lesson/quiz and you should see it was skipped.");
    }
})
//getcookie funtion by midgetfucker
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
}	