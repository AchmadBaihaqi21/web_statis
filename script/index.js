alert("Welcome To RBPedia");

const menu = document.querySelector(".navbar #menu");
const nav = document.querySelector(".navbar .navbar-nav");
//menu
menu.addEventListener("click", function () {
  nav.classList.toggle("active");
});

const hamburger = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !nav.contains(e.target)) {
    nav.classList.remove("active");
  }
});

//jam
function showTime() {
  var date = new Date();
  var h = date.getHours();
  var m = date.getMinutes();
  var s = date.getSeconds();
  var session = "AM";

  if (h == 0) {
    h = 12;
  }
  if (h > 12) {
    h = h - 12;
    session = "PM";
  }

  h = h < 10 ? "0" + h : h;
  m = m < 10 ? "0" + m : m;
  s = s < 10 ? "0" + s : s;

  var time = h + ":" + m + ":" + s + " " + session;

  document.getElementById("DisplayClock").innerText = time;

  setTimeout(showTime, 1000);
}

showTime();
