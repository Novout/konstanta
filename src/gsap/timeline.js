import GSAP, { Expo } from 'gsap';

export const OpacityContainerSwitch = (enter, quit, cb) => {
  const start = () => {
    const tl = new GSAP.timeline();
    tl.to(enter, 0.25, { alpha: 1, ease: Expo.easeIn }, 'ref')
      .to(quit, 0.25, { alpha: 0, ease: Expo.easeOut }, 'ref')
      .call(cb);
  };

  return { start };
};

export const OpacityContainerLeave = (container, cb) => {
  const start = () => {
    const tl = new GSAP.timeline();
    tl.to(container, 0.25, { alpha: 0, ease: Expo.easeOut }, 'ref').call(cb);
  };

  return { start };
};
