document.body.onloadstart = ()=>{
    const UI = document.createElement("div");
    UI.innerHTML = `
    <link rel="stylesheet" href="https://toert.github.io/Isolated-Bootstrap/versions/4.0.0-beta/iso_bootstrap4.0.0min.css">
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
        transition: width 0.25s, height 0.25s, border-radius 0.25s
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
    .expanded {
        width: 100px;
        height: 30px;
        border-radius: 5px !important;
    }
    
    .less-margin {
        margin-top: 0px;
        margin-left:5px;
    }
    #collapse {
        display: none;
        opacity: 0;
        transition: opacity 0.5s;
    }
    </style>
    <section class="bg-blue rounded-circle" id="popup">
      <img src="${chrome.runtime.getURL("icon.png")}" alt="iready icon" class="iready-img">
        
        <div id="collapse">
              Some placeholder content for the collapse component.
          </div>
          </section>
    </div>
    <script>const picture = document.querySelector(".iready-img");
    console.log(picture, collapse, popup)
    const popup = document.querySelector("#popup");
    const collapse = document.querySelector("#collapse");
    picture.addEventListener("click", ()=>{
        popup.classList.toggle("expanded")
        picture.classList.toggle("less-margin");
    })</script>
    `;
    console.log("injected")
    document.body.appendChild(UI);
}