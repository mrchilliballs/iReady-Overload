// gets lesson data
var csid = html5Iframe.src.split("?csid=")[1].split("&type")[0];
var minutes = 45;

// sets cookies in case something breaks
document.cookie = `csid=${csid};`
document.cookie = `minutes=${minutes};`
