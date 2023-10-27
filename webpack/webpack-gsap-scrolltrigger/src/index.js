import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

gsap.to('.box', {
  x: 200,
  scrollTrigger: {
    trigger: '.box',
    start: 'center center+=100',
    end: 'center center-=100',
    markers: true,
  }
})