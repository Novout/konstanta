import GSAP, { Expo } from 'gsap';

export const OpacityContainerSwitch = (
  enter,
  quit,
  cb_finish = () => {},
  cb_init = () => {}
) => {
  const start = () => {
    const tl = new GSAP.timeline({ onStart: cb_init });
    tl.to(enter, 0.2, { alpha: 1, ease: Expo.easeIn }, 'ref')
      .to(quit, 0.2, { alpha: 0, ease: Expo.easeOut }, 'ref')
      .call(cb_finish);
  };

  return { start };
};

export const OpacityContainerLeave = (container, cb) => {
  const start = () => {
    const tl = new GSAP.timeline({ onComplete: cb });
    tl.to(container, 0.2, { alpha: 0, ease: Expo.easeOut });
  };

  return { start };
};

export const OpacityContainerEnter = (container, cb) => {
  const start = () => {
    const tl = new GSAP.timeline({ onStart: cb });
    tl.call(cb).to(container, 0.2, { alpha: 1, ease: Expo.easeIn });
  };

  return { start };
};

export const FloatingItem = (container) => {
  const tl = new GSAP.timeline({ repeat: -1 });

  const start = () => {
    tl.to(container, 0.5, { y: -3, ease: Expo.easeOut })
      .to(container, 1, { y: 6, ease: Expo.easeInOut })
      .to(container, 0.5, { y: 0, ease: Expo.easeIn });
  };

  const pause = () => {
    tl.pause();
  };
  const resume = () => {
    tl.resume();
  };

  return { start, pause, resume };
};

export const EffectText = (
  container,
  options = { color_default: 0xffffff, color_effect: 0x66bd99 }
) => {
  const tl = new GSAP.timeline({
    onStart: () => {
      container.style.fill = options.color_effect;
    },
    onComplete: () => {
      container.style.fill = options.color_default;
    }
  });

  const start = () => {
    tl.to(container.style, 0.3, {
      fontSize: 18,
      ease: Expo.easeInOut
    }).to(container.style, 0.1, {
      fontSize: 10,
      ease: Expo.easeIn
    });
  };

  return { start };
};
