import gsap from "gsap";
import { config1, config2, config3, config4 } from "./modules/config";

// gsap.fromTo(".box", {
//   x: 0
// }, {
//   ...config3,
//   x: 500,
// });

// gsap.to(".box", {
//   keyframes: [
//     config1,
//     config2,
//     config3
//   ]
// });

gsap.registerEffect({
  name: 'sampleAnimation',
  effect: (targets, fromConfig, toConfig) => {
    return gsap.fromTo(targets,
      {
        ...fromConfig
      }, {
      y: 200,
      scale: 1.5,
      ...toConfig,
    });
  },
  defaults: {duration: 20, rotation: 180, delay: 2}
});

gsap.effects.sampleAnimation(".box", {x: 100}, {
  ...config4
});