var btn1 = document.getElementById("btn1");
var btn2 = document.querySelector(".btn2");
var btn3 = document.querySelector(".btn3");
var btn4 = document.querySelector(".btn4");
var btn5 = document.querySelector(".btn5");
var btn6 = document.querySelector(".btn6");
var btn7 = document.querySelector(".btn7");

var descTitle = document.querySelector(".descTitle");
var descDetail = document.querySelector(".descDetail");

var header = document.querySelector(".header");
var nav = document.querySelector(".nav");

header.addEventListener("click", function () {
  header.classList.toggle("active");
  nav.classList.toggle(".active");
});

btn1.addEventListener("mouseover", function () {
  descTitle.style.display = "none";
  descDetail.innerHTML = `  <div class="contactCont">
    <h1>Enter Your Critic Here</h1>
    <form action="#">
      <input
        type="email"
        name="email"
        id="emailId"
        placeholder="Enter Your Email Here"
      />
      <input
        type="text"
        name="name"
        id="nameId"
        placeholder="Enter Your Name Here"
      />
      <input
        type="text"
        name="critic"
        id="criticId"
        placeholder="Enter Your Critic Here"
      />

      <button type="submit" id="submitBtn">Submit</button>
    </form>

  </div>`;
  descDetail.style.opacity = "100%";
  descDetail.style.display = "block";
  descTitle.style.transition = "1.5s";
  descDetail.style.transition = "1.5s";
  descDetail.style.marginLeft = "40px";
});

btn2.addEventListener("mouseover", function () {
  descTitle.style.display = "none";
  descDetail.innerHTML = `<div class="shareSocial">
<div class="igSect">
  <ion-icon name="logo-instagram"></ion-icon>
  <h1>ssdsdsdadadad</h1>
</div>

<div class="fbSect">
  <ion-icon name="logo-facebook"></ion-icon>
  <h1>ssdsdsdadadad</h1>
</div>

<div class="WASect">
  <ion-icon name="logo-whatsapp"></ion-icon>
  <h1>ssdsdsdadadad</h1>
</div>

<div class="linkSect">
  <ion-icon name="logo-linkedin"></ion-icon>
  <h1>ssdsdsdadadad</h1>
</div>
</div>
`;
  descDetail.style.opacity = "100%";
  descDetail.style.display = "block";
  descTitle.style.transition = "1.5s";

  descDetail.style.transition = "1.5s";
  descDetail.style.marginLeft = "0px";
});

btn3.addEventListener("mouseover", function () {
  descTitle.style.display = "none";
  descDetail.innerHTML = `    <div class="mapouter"><div class="gmap_canvas"><iframe src="https://maps.google.com/maps?q=jakarta&amp;t=&amp;z=10&amp;ie=UTF8&amp;iwloc=&amp;output=embed" frameborder="0" scrolling="no" style="width: 350px; height: 570px;"></iframe><style>.mapouter{position:relative;height:570px;width:350px;background:#fff;} .maprouter a{color:#fff !important;position:absolute !important;top:0 !important;z-index:0 !important;}</style><a href="https://blooketjoin.org">blooket join</a><style>.gmap_canvas{overflow:hidden;height:570px;width:350px}.gmap_canvas iframe{position:relative;z-index:2}</style></div></div>
`;
  descDetail.style.opacity = "100%";
  descDetail.style.display = "block";
  descTitle.style.transition = "1.5s";

  descDetail.style.transition = "1.5s";
  descDetail.style.marginLeft = "40px";
});

var btnCircle = document.querySelector("#btnCircle");

btnCircle.addEventListener("click", function () {
  btnCircle.classList.toggle("active");
});

document.body.scroll({ behavior: "smooth" });

var posY = 0;
var jarak = 20;

function smoothScroll(id) {
  var target = document.getElementById(id).offsetTop;

  var scrollAnimate = setTimeout(function () {
    smoothScroll(id), 2;
  });

  posY = posY + jarak;

  if (posY >= target) {
    clearTimeout(scrollAnimate);
    posY = 0;
  } else {
    window.scroll(0, posY);
  }
}

var toggleDark = document.querySelector(".toogleDark");
var bodyContent = document.querySelector(".bodyContent");
toggleDark.addEventListener("click", function () {
  toggleDark.classList.toggle("active");
  bodyContent.classList.toggle("active");
});

function Scroll() {
  var Scrolls = document.querySelectorAll(".reveal");
  var header = document.querySelector(".header");
  var bodyContent = document.querySelector(".bodyContent");
  var btnHam = document.querySelectorAll(".btnHam");

  if (document.documentElement.scrollTop > 0) {
    header.style.position = "fixed";
    header.style.backgroundImage = "linear-gradient(to left, #ff3434, #8c0000)";
    header.style.transition = "1.5s";
    for (var i = 0; i < btnHam.length; i++) {
      btnHam[i].style.backgroundColor = "white";
    }
  } else {
    header.style.background = "transparent";
    header.style.position = "relative";
    header.style.transition = "1.5s";
    for (var i = 0; i < btnHam.length; i++) {
      btnHam[i].style.backgroundImage =
        "linear-gradient(to left, #ff3434, #8c0000)";
    }
  }

  for (var i = 0; i < Scrolls.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = Scrolls[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      Scrolls[i].classList.add("active");
    } else {
      Scrolls[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", Scroll);

var img1 = document.getElementById("img1");
var img2 = document.getElementById("img2");
var img3 = document.getElementById("img3");
var slide1 = document.getElementById("slide1");
var slide2 = document.getElementById("slide2");
var slide3 = document.getElementById("slide3");

slide1.addEventListener("click", function () {
  img1.style.transform = "translateX(0px) scale(1)";
  img1.style.transition = "3s all ease-in-out";
  img1.style.width = "320px";
  img1.style.opacity = "100%";
  img2.style.transform = "translateX(0px) scale(0.8)";
  img2.style.transition = "3s all ease-in-out";
  img2.style.width = "0px";
  img2.style.opacity = "0%";
  img3.style.transform = "translateX(0px) scale(0.8)";
  img3.style.transition = "3s all ease-in-out";
  img3.style.width = "0px";
  img3.style.opacity = "0%";
  slide2.style.backgroundColor = "black";
  slide1.style.backgroundColor = "#AD0000";
  slide3.style.backgroundColor = "black";
});
slide2.addEventListener("click", function () {
  img1.style.transform = "translateX(-20px) scale(0.8)";
  img1.style.transition = "3s all ease-in-out";
  img1.style.width = "0px";
  img1.style.opacity = "0%";
  img2.style.transform = "translateX(-20px) scale(1)";
  img2.style.transition = "3s all ease-in-out";
  img2.style.width = "360px";
  img2.style.opacity = "100%";
  img3.style.transform = "translateX(-20px) scale(0.8)";
  img3.style.transition = "3s all ease-in-out";
  img3.style.width = "0px";
  img3.style.opacity = "0%";
  slide2.style.backgroundColor = "#AD0000";
  slide1.style.backgroundColor = "black";
  slide3.style.backgroundColor = "black";
});

slide3.addEventListener("click", function () {
  img1.style.transform = "translateX(-20px) scale(0.8)";
  img1.style.transition = "3s all ease-in-out";
  img1.style.width = "0px";
  img1.style.opacity = "0%";
  img2.style.transform = "translateX(-20px) scale(0.8)";
  img2.style.transition = "3s all ease-in-out";
  img2.style.width = "0px";
  img2.style.opacity = "0%";
  img3.style.transform = "translateX(-20px) scale(1)";
  img3.style.transition = "3s all ease-in-out";
  img3.style.width = "360px";
  img3.style.opacity = "100%";
  slide1.style.backgroundColor = "black";
  slide3.style.backgroundColor = "#AD0000";
  slide2.style.backgroundColor = "black";
});
