const picture = document.querySelector(".iready-img");
console.log(picture, )
const popup = document.querySelector("#popup");
const collapse = document.querySelector("#collapse");
picture.addEventListener("click", ()=>{
    popup.classList.toggle("expanded")
    picture.classList.toggle("less-margin");
})