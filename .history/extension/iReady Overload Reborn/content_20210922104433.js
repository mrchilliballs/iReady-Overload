window.onload = ()=>{
    const UI = document.createElement("div");
    UI.innerHTML = `
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js" integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div class="bootstrap">
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
        <span id="skip" tabindex="0" data-bs-toggle="popover" data-bs-trigger="hover focus" data-bs-content="Disabled popover"><i class="fas fa-forward"></i></span>
        <span id="time"><i class="fas fa-stopwatch"></i></span>
        <span id="diagnostic"><i class="fas fa-check-circle"></i></span>
        <br><p>I am text.</p>
          </div>
          </section>
    </div>
    `;
    console.log("injected")
    document.body.appendChild(UI);
    const picture = document.querySelector(".iready-img");
const popup = document.querySelector("#popup");
const collapse = document.querySelector("#collapse");
const skipButton = document.querySelector("#skip");
console.log(picture, collapse, popup)
picture.addEventListener("click", ()=>{
    if(!picture.classList.contains("hidden")){
        popup.classList.toggle("expanded")
        picture.classList.toggle("less-margin");
        setTimeout(()=>{
            collapse.classList.toggle("hidden")
        }, 200)
    } else {
        setTimeout(()=>{})
        collapse.classList.toggle("hidden")
    }
})
skipButton.addEventListener("click", ()=>{
    popup.classList.toggle("big");
})
}
var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
  return new bootstrap.Popover(popoverTriggerEl)
})