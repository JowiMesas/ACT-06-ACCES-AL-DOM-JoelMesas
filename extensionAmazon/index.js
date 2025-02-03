let tabId;
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  var currTab = tabs[0];
  if (currTab) {
    tabId = currTab.id;
  }
});

let info_img = document.getElementById("btn-img-info");
info_img.addEventListener("click", clickButtonInfoImages);

function clickButtonInfoImages() {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: showInfoImages,
  });
}
function showInfoImages() {
    let images = document.querySelectorAll("img");
    images.forEach((img)=> {
        if(!img.dataset.tooltipAdded) {
            
        }
    })
}
