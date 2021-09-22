const injected_code = ~
const picture = document.querySelector(".iready-img");
const popup = document.querySelector("#popup");
const collapse = document.querySelector("#collapse");
picture.addEventListener("click", ()=>{
    popup.classList.toggle("expanded")
    picture.classList.toggle("less-margin");
})