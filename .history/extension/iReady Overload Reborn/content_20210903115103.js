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
        margin-left:9px;
        margin-top:9px;
        transition: width 0.5s, height 0.5s;
    }
    .rounded-circle:hover {
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    }
    .rounded-circle {
        height:40px;
        width: 40px;
        transition: height;
        margin-left:20px;
        border-radius:5px;
        transition: width 0.25s, height 0.25s, border-radius 0.25s;
            position:absolute;
            top:99vh;
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
        display:none;
    }
    .expanded {
        width: 200px;
        height: 40px !important;
    }
    #collapse {
       display:inline-blokc;
    }

    </style>
    <section class="bg-blue rounded-circle" id="popup">
      <img src="${chrome.runtime.getURL("icon.png")}" alt="iready icon" class="iready-img">
        
        <div id="collapse">
        <i class="fas fa-forward"></i>
          </div>
          </section>
    </div>
    `;
    console.log("injected")
    document.body.appendChild(UI);
    const picture = document.querySelector(".iready-img");
const popup = document.querySelector("#popup");
const collapse = document.querySelector("#collapse");
console.log(picture, collapse, popup)
picture.addEventListener("click", ()=>{
    popup.classList.toggle("expanded")
    picture.classList.toggle("less-margin");
    collapse.classList.toggle("hidden")
})
}