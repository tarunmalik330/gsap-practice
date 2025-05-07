// basic
gsap.to("#box", {
  x: 1000,
  duration: 2,
  delay: 1,
});
gsap.from("#box1", {
  x: 1200,
  y: 300,
  duration: 2,
  delay: 1,
  rotate: 360,
  backgroundColor: "red",
  scale: 1.2,
});

// fromTO
gsap.fromTo(
  "#box2",
  {
    x: 300,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1.5,
    backgroundColor: "orange",
    ease: "power2.out",
  }
);

// gsap.set("#box3", {
//   x: 400,
//   opacity: 0,
//   delay: 1,
// });
gsap.to("#circle", {
  x: 1000,
  duration: 2,
  delay: 1,
  rotate: 360,
  repeat: -1,
  yoyo: true,
  // yoyoEase: true,
});

// tl
var tl = gsap.timeline();
tl.from(".logo", {
  y: -30,
  opacity: 0,
  duration: 1,
  delay: 1,
});
tl.from(".links", {
  y: -20,
  opacity: 0,
  duration: 1,
  delay: 1,
  stagger: 0.5,
});

tl.to("#square1", {
  x: 1000,
  rotate: 360,
  duration: 1.5,
  delay: 1,
});
tl.to("#square2", {
  x: 1000,
  rotate: 360,
  duration: 1.5,
  backgroundColor: "yellow",
});
tl.to("#square3", {
  x: 1000,
  scale: 1.1,
  duration: 1.5,
});
tl.set(".box", {
  // without animation (delay, duration)
  x: 100,
  opacity: 1,
});
// ADD
let moveBox = gsap.to(".addBox", {
  x: 200,
  duration: 2,
});
let fadeBox = gsap.to(".addBox", {
  opacity: 0.5,
  duration: 2,
});
tl.add(moveBox).add(fadeBox, "-=1.5");
// TEXT ANIMATION
gsap.registerPlugin(TextPlugin);
const Style = document.getElementById("style");
gsap.to(Style, {
  duration: 5,
  // text: "The Code Creative",
  text: {
    value: "The Code Creative",
    oldClass: "text-white",
    newClass: "text-red-500",
  },
  delay: 2,
});
