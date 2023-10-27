const config1 = {
  x: 1000,
  duration: 3
};
const config2 = {
  y: 200,
  duration: 5
};
const config3 = {
  autoAlpha: 0,
  y: -100,
  rotation: 90,
  duration: 2,
  ease:"bounce",
  delay: 0.5, //最初のアニメーションのdelay
  repeat: 3,
  // repeat: -1, //infinity
  yoyo: true, //変化後と変化前が交互に起こる
  repeatDelay: 0.1, //2回目以降のrepeatのdelay
}
const config4 = {
  x: 500,
  y: 500,
  rotation: 0,
  duration: 5
}

export { config1, config2, config3, config4 }