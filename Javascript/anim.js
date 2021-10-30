// Video animation
const intro = document.querySelector(".intro");
const video = intro.querySelector("video");
const text1 = intro.querySelector(".note1");
const text2 = intro.querySelector(".note2");
const text3 = intro.querySelector(".note3");
const text4 = intro.querySelector(".note4");
const text5 = intro.querySelector(".note5");

//ScrollMagic
const controller = new ScrollMagic.Controller();
const controller1 = new ScrollMagic.Controller();
// Scenes
let scene = new ScrollMagic.Scene({
  duration: 11000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);
// TextAnimation
var wipeAnimation = new TimelineMax()
  .fromTo(text1, 1, { opacity: 1 }, { opacity: 0 })
  .fromTo(text2, 1, { opacity: 0 }, { opacity: 1 })
  .to(text2, 1, { opacity: 0 })
  .fromTo(text3, 1, { opacity: 0 }, { opacity: 1 })
  .fromTo(text3, 1, { x: "-90%" }, { x: "150%", ease: Linear.easeNone })
  .fromTo(text4, 1, { opacity: 0 }, { opacity: 1 })
  .to(text4, 1, { opacity: 0 })
  .fromTo(text5, 1, { opacity: 0 }, { opacity: 1 })
  .to(text4, 1, { opacity: 0 });

new ScrollMagic.Scene({
  triggerElement: intro,
  triggerHook: "onLeave",
  duration: 11000,
})
  .setPin(scene)
  .setTween(wipeAnimation)
  .addTo(controller1);

// Animation
let accelamount = 0.1;
let scrollposition = 0;
let delay = 0;

scene.on("update", (e) => {
  scrollposition = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollposition - delay) * accelamount;
  video.currentTime = delay;
}, 70);
