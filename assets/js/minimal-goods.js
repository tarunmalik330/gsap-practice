// hero-text-animation
gsap.registerPlugin(ScrollTrigger);
ScrollTrigger.matchMedia({
  "(min-width: 1400px)": () => animateHeroText(0.1, "69%"),
  "(min-width: 1200px) and (max-width: 1401px)": () =>
    animateHeroText(0.2, "85%"),
  "(min-width: 768px) and (max-width: 1199px)": () =>
    animateHeroText(0.2, "96%"),
  "(min-width: 641px) and (max-width: 767px)": () =>
    animateHeroText(0.2, "80%"),
  "(min-width: 401px) and (max-width: 640px)": () =>
    animateHeroText(0.3, "100%"),
  "(max-width: 400px)": () => animateHeroText(0.2, "93%"),
});

function animateHeroText(scaleVal, yVal) {
  gsap.to(".hero-text", {
    scrollTrigger: {
      trigger: ".hero-section",
      start: "top top",
      end: "bottom top",
      scrub: 1,
    },
    scale: scaleVal,
    y: yVal,
    transformOrigin: "center center",
    ease: "none",
  });
}
// navbar
ScrollTrigger.create({
  trigger: ".nav-section",
  start: "top top",
  // end: "+=14000",
  endTrigger: "#furnitureSection",
  end: "bottom bottom",
  pin: true,
  pinSpacing: false,
  //   markers: true,
});

// discover-section-animation
ScrollTrigger.matchMedia({
  "(min-width: 1200px)": function () {
    animatedDiscoverSection(250);
  },
  "(min-width: 767px) and (max-width: 1199px)": () =>
    animatedDiscoverSection(150),
  "(max-width: 768px)": () => animatedDiscoverSection(100),
});
function animatedDiscoverSection(yValue) {
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: "#discoverParent",
      start: "top top",
      end: "+=700",
      scrub: 1,
      markers: true,
    },
  });
  tl.to("#textOne", {
    y: yValue,
  })
    .to("#textTwo", {
      y: yValue,
    })
    .to("#textThree", {
      y: yValue,
    })
    .to("#textFour", {
      y: yValue,
    });
}

// circle-section-anmation
const tll = gsap.timeline({
  scrollTrigger: {
    trigger: "#CircleParent",
    start: "top top",
    end: "+=4000",
    scrub: 1,
    pin: true,
    // pinSpacing: false,
    markers: true,
  },
});
tll
  .to("#circle", {
    borderRadius: "0px",
    maxWidth: "100%",
    height: "100vh",
    duration: 6,
    scrub: 1,
    // ease: "power1.inOut"
  })
  .to(
    ["#CircleParent", ".nav-bg"],
    {
      backgroundColor: "#e8e2da",
      duration: 2,
      ease: "power1.inOut",
    },
    "<"
  )
  .to(
    ".nav-text",
    {
      color: "#2e2a27",
      duration: 2,
      ease: "power1.inOut",
    },
    "<"
  );

//   furniture-section-images-animation
gsap.utils.toArray(".furnitureImage").forEach((img) => {
  gsap.from(img, {
    y: 100,
    opacity: 0,
    duration: 1,
    ease: "power3.out",
    scrollTrigger: {
      trigger: img,
      start: "top 90%",
      toggleActions: "play reverse play reverse",
    },
  });
});

// furniture-section-animation
const furnitureSection = document.getElementById("furnitureSection");
const furnitureText = document.getElementById("furnitureText");
const navbar = document.querySelector(".nav-bg");
const navText = document.querySelectorAll(".nav-text");
// gsap.timeline({
//   scrollTrigger: {
//     trigger: "#furnitureSection",
//     start: "top top",
//     // end: "+=7000",
//     end: () => "+=" + window.innerHeight * 4,
//     scrub: 1,
//     pin: true,
//     pinSpacing: false,
//   },
// });
ScrollTrigger.create({
  animation: tl,
  trigger: "#furnitureSection",
  start: "top top",
  end: () => "+=" + window.innerHeight * 4,
  scrub: 1,
  pin: true,
  pinSpacing: false,
  markers: true, // 👈 Add this to see red & green markers
});

let currentState = { bg: "", color: "", text: "" };
function updateSection(bgColor, textColor, text) {
  if (
    currentState.bg === bgColor &&
    currentState.color === textColor &&
    currentState.text === text
  ) {
    return;
  }

  currentState = { bg: bgColor, color: textColor, text };
  if (window.innerWidth > 768) {
    gsap.to([furnitureSection, navbar], {
      backgroundColor: bgColor,
      borderColor: textColor,
      duration: 1.2,
      overwrite: "auto",
    });

    gsap.to([furnitureText, navText], {
      color: textColor,
      duration: 1.2,
      overwrite: "auto",
    });
  }
  furnitureText.textContent = text;
}
const transitions = [
  {
    trigger: "#section1",
    from: { bg: "#e8e2da", color: "#2a2a27", text: "Furniture" },
    to: { bg: "#2a2a27", color: "#e8e2da", text: "Furniture" },
  },
  {
    trigger: "#section3",
    from: { bg: "#2a2a27", color: "#e8e2da", text: "Decor" },
    to: { bg: "#e8e2da", color: "#2a2a27", text: "Decor" },
  },
  {
    trigger: "#section5",
    from: { bg: "#e8e2da", color: "#2a2a27", text: "Office" },
    to: { bg: "#2a2a27", color: "#e8e2da", text: "Office" },
  },
  {
    trigger: "#section6",
    from: { bg: "#2a2a27", color: "#e8e2da", text: "Tech" },
    to: { bg: "#e8e2da", color: "#2a2a27", text: "Tech" },
  },
];

transitions.forEach(({ trigger, from, to }) => {
  ScrollTrigger.create({
    trigger,
    start: "top bottom",
    end: "bottom top",
    scrub: 1,
    onUpdate: (self) => {
      if (self.progress >= 0.7) {
        updateSection(to.bg, to.color, to.text);
      } else {
        updateSection(from.bg, from.color, from.text);
      }
    },
  });
});
