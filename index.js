//Boton Cambiar color de fondo
let background_red = document.getElementById("btn-bg-red");
background_red.addEventListener("click", clickButtonBackgroundColor);

function clickButtonBackgroundColor() {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: changeBackgroundColor,
    args: ["red"],
  });
}
function changeBackgroundColor(color) {
  document.body.style.backgroundColor = color;
}
let tabId;
chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
  var currTab = tabs[0];
  if (currTab) {
    tabId = currTab.id;
  }
});
//Boton cambiar los links
let change_links = document.getElementById("links-colors");
change_links.addEventListener("click", clickButtonChangeLinks);

function clickButtonChangeLinks() {
  let color = document.getElementById("link-color-picker").value;
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: changeLinksColor,
    args: [color],
  });
}
function changeLinksColor(color) {
  document.querySelectorAll("a").forEach((link) => {
    link.style.color = color;
  });
}
//Esborrar imatges
let imagesDelete = document.getElementById("delete-images");
imagesDelete.addEventListener("click", clickButtonDeleteImages);
function clickButtonDeleteImages() {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: deleteAllImages,
  });
}
function deleteAllImages() {
  document.querySelectorAll("img").forEach((img) => {
    img.remove();
  });
}
//Mostrar o ocultar contraseñas
let passwords = document.getElementById("show-passwords");
passwords.addEventListener("click", clickButtonPasswords);
function clickButtonPasswords() {
  chrome.scripting.executeScript({
    target: { tabId: tabId },
    func: showHidePasswords,
  });
}
function showHidePasswords() {
  let passwords = document.querySelectorAll(
    "input[type='password'], input[is_pass]"
  );
  passwords.forEach((input) => {
    if (input.getAttribute("is_pass") == "true") {
      input.type = "password";
      input.setAttribute("is_pass", "false");
    } else {
      input.type = "text";
      input.setAttribute("is_pass", "true");
    }
  });
}
