window.onload = ()=>{
    const UI = document.createElement("div");
    UI.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <style>
    .iready-img {
        height: 20px;
        width: 20px;
        text-align: center;
        margin-right:6px;
        margin-left:1px;
        // margin-top:9px !important;
        transition: width 0.5s, height 0.5s;
    }
    .rounded-circle:hover {
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
    </style>
    <section class="bg-blue rounded-circle-1" id="popup">
      <img src="${chrome.runtime.getURL("icon.png")}" alt="iready icon" class="iready-img">
        
        <div id="collapse" class="hidden">
        <span id="skip"><i class="fas fa-forward" data-bs-toggle="tooltip" data-bs-placement="top" title="Tooltip on top"></i></span>
        <span id="time"><i class="fas fa-stopwatch"></i></span>
        <span id="diagnostic"><i class="fas fa-check-circle"></i></span>
        <br><p>I am text.</p>
          </div>
          </section>
    `;
    console.log("injected")
    document.body.appendChild(UI);
    const picture = document.querySelector(".iready-img");
const popup = document.querySelector("#popup");
const collapse = document.querySelector("#collapse");
const skipButton = document.querySelector("#skip");
console.log(picture, collapse, popup)
picture.addEventListener("click", ()=>{
    if(collapse.classList.contains("hidden")){
        popup.classList.toggle("expanded")
        picture.classList.toggle("less-margin");
        setTimeout(()=>{
            collapse.classList.toggle("hidden")
        }, 200)
    } else {
        collapse.classList.toggle("hidden")
        setTimeout(()=>{
            popup.classList.toggle("expanded")
            picture.classList.toggle("less-margin");
        }, 200)
    }
})
skipButton.addEventListener("click", ()=>{
    alert("clicked")
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
}
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})