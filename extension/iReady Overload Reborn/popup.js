const backgroundColor = document.querySelector("#background_color");
const messageBox = document.querySelector("#message");
const inputs = document.querySelectorAll("input");
const msgObj = {};
const submitBtn = document.querySelector("#submit_btn");
submitBtn.addEventListener("click", ()=>{
    for (let input of inputs) {
        console.log("change")
        messageBox.textContent = "Please reload the page for changes to take place";
        msgObj[input.getAttribute("name")] = input.value;
}
chrome.tabs.query({active: true, currentWindow: true}, (tabs)=> {
    chrome.tabs.sendMessage(tabs[0].id, msgObj);
});
})