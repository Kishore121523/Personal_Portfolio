//Intersection Video
const header = document.querySelector("header");
const sectionOne = document.querySelector("#home-section");
const sectionOneOptions = {
  rootMargin: "-50px 0px 0px 0px",
};
const sectionOneObserver = new IntersectionObserver(function (
  entries,
  sectionOneObserver
) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      header.classList.remove("nav-open");
      header.classList.add("nav-close");
    } else {
      header.classList.remove("nav-close");
      header.classList.add("nav-open");
    }
  });
},
sectionOneOptions);

sectionOneObserver.observe(sectionOne);

// // Video animation
// const intro = document.querySelector(".intro");
// const video = intro.querySelector("video");
// const text1 = intro.querySelector(".note1");
// const text2 = intro.querySelector(".note2");

// //End section
// const end = document.querySelector("#about-section");

// //ScrollMagic
// const controller = new ScrollMagic.Controller();
// const controller1 = new ScrollMagic.Controller();

// // Scenes
// let scene = new ScrollMagic.Scene({
//   duration: 6800,
//   triggerElement: intro,
//   triggerHook: 0,
// })
//   .setPin(intro)
//   .addTo(controller);

// // TextAnimation
// let textanim1 = TweenMax.fromTo(text1, 1, { opacity: 1 }, { opacity: 0 });
// let textanim2 = TweenMax.fromTo(text2, 1, { opacity: 0 }, { opacity: 1 });
// let textanim3 = TweenMax.fromTo(text2, 1, { opacity: 1 }, { opacity: 0 });

// let scene1 = new ScrollMagic.Scene({
//   duration: 2500,
//   offset: 1000,
//   triggerElement: intro,
//   triggerHook: 0,
// })
//   .setTween(textanim1)
//   .addTo(controller1);

// let scene2 = new ScrollMagic.Scene({
//   duration: 2000,
//   offset: 3700,
//   triggerElement: intro,
//   triggerHook: 0,
// })
//   .setTween(textanim2)
//   .addTo(controller1);

// let scene3 = new ScrollMagic.Scene({
//   duration: 4700,
//   offset: 4700,
//   triggerElement: intro,
//   triggerHook: 0.1,
// })
//   .setTween(textanim3)
//   .addTo(controller1);

// // controller.remove([scene1]);
// // Animation
// let accelamount = 0.1;
// let scrollposition = 0;
// let delay = 0;

// scene.on("update", (e) => {
//   scrollposition = e.scrollPos / 1000;
// });

// setInterval(() => {
//   delay += (scrollposition - delay) * accelamount;
//   video.currentTime = delay;
// }, 70);

// Mail Send Function
function sendMail() {
  Email.send({
    SecureToken: "b9409e6f-9fd5-47cd-b3ee-6f7c0ad00783",
    To: "contactkishorework@gmail.com",
    From: `${document.getElementById("email").value}`,
    Subject: `Sender Name - ${document.getElementById("name").value}`,
    Body: `${document.getElementById("message").value}`,
  });
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("message").value = "";
  // .then((message) => alert(message));
}

// TypeWriter Animation
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    delta = this.period;
    this.isDeleting = true;
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.type = "text/css";
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #fff}";
  document.body.appendChild(css);
};

function myFunction() {
  document.getElementById("myForm").reset();
}
// animate on scroll
AOS.init();

//cursor animation
var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove", function (e) {
  cursor.style.cssText = cursor2.style.cssText =
    "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

//init scrollspy
$("body").scrollspy({ target: "#main-nav" });

// Add smooth scrolling
$("#main-nav a").on("click", function (e) {
  // Check for a hash value
  if (this.hash !== "") {
    // Prevent default behavior
    e.preventDefault();

    // Store hash
    const hash = this.hash;

    // Animate smooth scroll
    $("html, body").animate(
      {
        scrollTop: $(hash).offset().top,
      },
      900,
      function () {
        // Add hash to URL after scroll
        window.location.hash = hash;
      }
    );
  }
});
