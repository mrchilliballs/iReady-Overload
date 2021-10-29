const backgroundColor = document.querySelector("#background_color");
const messageBox = document.querySelector("#message");
const inputs = document.querySelectorAll("input");
const msgObj = {}
for (const input of inputs) {
    input.addEventListener("change", ()=>{
        messageBox.textContent = "Please reload the page for changes to take place";
        if (el.type && el.type === 'checkbox') {
            msgObj[input.getAttribute("name")] = input.isChecked;
         } else {
            msgObj[input.textContent] = input.value;
         }
    })
}
chrome.tabs.query({active: true, currentWindow: true}, (tabs)=> {
    chrome.tabs.sendMessage(tabs[0].id, msgObj);
});