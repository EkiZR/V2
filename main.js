gsap.to(".parallax #bwh_kiri", {
  scrollTrigger: {
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  },
  x: "-100em",
  ease: "none"
});

gsap.to("#bwh_kanan", {
  scrollTrigger: {
    start: "top top",
    end: "bottom bottom",
    scrub: 1
  },
  x: "100em",
  ease: "none"
});

gsap.to("#bg_6", {
  scrollTrigger: {
    scrub: 1
  },
  y: "-30%",
});

gsap.to("#bg_9", {
  scrollTrigger: {
    scrub: 1
  },
  y: "-60%",
});

gsap.to("#bg_10", {
  scrollTrigger: {
    scrub: 1
  },
  y: "-15%",
});

gsap.to("#bg_11", {
  scrollTrigger: {
    scrub: 1
  },
  y: "70%",
});

gsap.to("#bg_12", {
  scrollTrigger: {
    scrub: 1
  },
  y: "20%",
});

gsap.to("#bg_13", {
  scrollTrigger: {
    scrub: 1
  },
  y: "100%",
});

gsap.to("#bg_14", {
  scrollTrigger: {
    scrub: 1
  },
  y: "90%",
});

gsap.to("#bg_15", {
  scrollTrigger: {
    scrub: 1
  },
  y: "80%",
});

gsap.to("#bg_16", {
  scrollTrigger: {
    scrub: 1
  },
  y: "20em",
});

gsap.to("#bg_1", {
  scrollTrigger: {
    scrub: 1
  },
  y: "2em",
  x: "2em",
});

gsap.to("#bg_2", {
  scrollTrigger: {
    scrub: 1
  },
  y: "1em",
});

gsap.to("#bg_3", {
  scrollTrigger: {
    scrub: 1
  },
  y: "3em",
});

gsap.to("#bg_7", {
  scrollTrigger: {
    scrub: 1
  },
  y: "-30%",

});

gsap.to("#bg_8", {
  scrollTrigger: {
    scrub: 1
  },
  y: "-30%",

});

gsap.to(".Welcome", {
  scrollTrigger: {
    scrub: 1
  },
  y: "-100vh",
});

gsap.fromTo(".loading-page", { opacity: 1 },
{
  opacity: 0,
  duration: 1.5,
  delay: 3.5,
});


gsap.fromTo(".logo-name", {
  y: 50,
  opacity: 0
}, {
  y: 0,
  opacity: 1,
  duration: 2,
  delay: 0.5,
});

let share = document.querySelector(".share");

share.addEventListener('click', () => {
  share.classList.toggle("active");
});
