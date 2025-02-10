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
  images.forEach((img) => {
    if (!img.dataset.tooltipAdded) {
      img.addEventListener("mouseenter", () => {
        const informationDiv = document.createElement("div");
        informationDiv.className = "remove";
        informationDiv.textContent = img.alt || "No description";
        informationDiv.style.position = "absolute";
        informationDiv.style.background = "lightblue";
        informationDiv.style.padding = "6px";
        informationDiv.style.border = "1px solid black";
        informationDiv.style.fontSize = "16px";
        informationDiv.style.zIndex = 10000;
        document.body.appendChild(informationDiv);
        const rect = img.getBoundingClientRect();
        informationDiv.style.top = `${rect.top + window.scrollY - 30}px`;
        informationDiv.style.left = `${rect.left}px`;
      });
      img.addEventListener("mouseleave", () => {
        let deleteInformationDiv = document.querySelectorAll(".remove");
        deleteInformationDiv.forEach((divRemove) => {
          divRemove.remove();
        });
      });
      img.dataset.tooltipAdded = "true";
    }
  });
}
let min_price = document.getElementById("btn-min-price");
min_price.addEventListener("click", clickButtonMinPrice);

function clickButtonMinPrice() {
  
}