window.onload = ()=>{
    const UI = document.createElement("div");
    UI.innerHTML = `
    <link rel="stylesheet" href="https://toert.github.io/Isolated-Bootstrap/versions/4.0.0-beta/iso_bootstrap4.0.0min.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css" integrity="sha512-1ycn6IcaQQ40/MKBW2W4Rhis/DbILU74C1vSrLJxCq57o941Ym01SwNsOMqvEBFlcgUa6xLiPY/NS5R+E6ztJQ==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <div class="bootstrap">
    <style>
    .iready-img {
        height: 20px;
        width: 20px;
        text-align: center;
        margin-right:5px;
        // margin-top:9px !important;
        transition: width 0.5s, height 0.5s;
    }
    .rounded-circle:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .rounded-circle {
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
    /* Popup container */
.popup {
  position: relative;
  display: inline-block;
  cursor: pointer;
}

/* The actual popup (appears on top) */
.popup .popuptext {
  visibility: hidden;
  width: 160px;
  background-color: #555;
  color: #fff;
  text-align: center;
  border-radius: 6px;
  padding: 8px 0;
  position: absolute;
  z-index: 1;
  bottom: 125%;
  left: 50%;
  margin-left: -80px;
}

/* Popup arrow */
.popup .popuptext::after {
  content: "";
  position: absolute;
  top: 100%;
  left: 50%;
  margin-left: -5px;
  border-width: 5px;
  border-style: solid;
  border-color: #555 transparent transparent transparent;
}

/* Toggle this class when clicking on the popup container (hide and show the popup) */
.popup .show {
  visibility: visible;
  -webkit-animation: fadeIn 1s;
  animation: fadeIn 1s
}

/* Add animation (fade in the popup) */
@-webkit-keyframes fadeIn {
  from {opacity: 0;}
  to {opacity: 1;}
}

@keyframes fadeIn {
  from {opacity: 0;}
  to {opacity:1 ;}
}
    </style>
    <section class="bg-blue rounded-circle" id="popup">
      <img src="${chrome.runtime.getURL("icon.png")}" alt="iready icon" class="iready-img">
        
        <div id="collapse" class="hidden">
        <div class="popup" onclick="popup()">Click me!
        <span class="popuptext" id="myPopup">Popup text...</span>
        </div>
        <span id="skip"><i class="fas fa-forward"></i></span>
        <span id="time"><i class="fas fa-stopwatch"></i></span>
        <span id="diagnostic"><i class="fas fa-check-circle"></i></span>
        <br><p>I am text.</p>
          </div>
          </section>
    </div>
    `;
    function popupSkip() {
        var popup = document.getElementById("myPopup");
        popup.classList.toggle("show");
      }
    console.log("injected")
    document.body.appendChild(UI);
    const picture = document.querySelector(".iready-img");
const popup = document.querySelector("#popup");
const collapse = document.querySelector("#collapse");
const skipButton = document.querySelector("#skip");
console.log(picture, collapse, popup)
picture.addEventListener("click", ()=>{
    popup.classList.toggle("expanded")
    picture.classList.toggle("less-margin");
    collapse.classList.toggle("hidden")
})
skipButton.addEventListener("click", ()=>{
    popup.classList.toggle("big");
})
}