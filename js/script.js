var imageUrl = "url('images/giphy.gif')";
var imageStasiek = "url('images/stasiek.jpeg')";
var audio = new Audio("images/song.mp3");

document.getElementById("searchForm").onsubmit = (e) => {
  e.preventDefault();
  linkEl = document.getElementById("query");
  link = "https://www.google.com/search?q=";
  link += encodeURIComponent(linkEl.value);

  /* if (linkEl.value == "ryuko")
	{
		document.body.style.backgroundImage=imageUrl;
		
		document.getElementsByTagName("title")[0].innerHTML = "RYUKO"
		audio.play();
	} */
  window.open(link);
  linkEl.value = "";
};
const DarlingCode = ["r", "y", "u", "k", "o"];
let darlingCodePosition = 0;

const darlingCodeChecker = (event) => {
  const inputs = ["input", "select", "button", "textarea"];
  const aEl = document.activeElement;
  if (aEl && inputs.indexOf(aEl.tagName.toLowerCase()) !== -1) return;
  const key = event.key.toLowerCase();
  const requiredKey = DarlingCode[darlingCodePosition].toLowerCase();
  if (key != requiredKey) {
    darlingCodePosition = 0;
    return;
  }
  darlingCodePosition++;
  if (darlingCodePosition != DarlingCode.length) return;
  darlingCodePosition = 0;
  document.body.style.backgroundImage = imageUrl;

  audio.play();
  audio.loop = true;
  setInterval(loop, 800);
};
document.addEventListener("keydown", darlingCodeChecker);

const DarlingCode1 = ["s", "t", "a", "s", "i", "e", "k"];
let darlingCodePosition1 = 0;

const darlingCodeChecker1 = (event) => {
  const inputs = ["input", "select", "button", "textarea"];
  const aEl = document.activeElement;
  if (aEl && inputs.indexOf(aEl.tagName.toLowerCase()) !== -1) return;
  const key = event.key.toLowerCase();
  const requiredKey = DarlingCode1[darlingCodePosition1].toLowerCase();
  if (key != requiredKey) {
    darlingCodePosition1 = 0;
    return;
  }
  darlingCodePosition1++;
  if (darlingCodePosition1 != DarlingCode1.length) return;
  darlingCodePosition1 = 0;
  document.body.style.backgroundImage = imageStasiek;
};
document.addEventListener("keydown", darlingCodeChecker1);

let x = 0;

const TitleText = ["R", "RY", "RYU", "RYUK", "RYUKO", "uwu"];

function loop() {
  document.getElementsByTagName("title")[0].innerHTML =
    TitleText[x++ % TitleText.length];
}

function darkmode() {
  var element = document.body;
  element.classList.toggle("dark-mode");
  var image = document.getElementById("myImage");
  if (image.src.match("images/lightmode.png")) {
    image.src = "images/darkmode.png";
  } else {
    image.src = "images/lightmode.png";
  }
}
