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

export const OpacityContainerLeave = (
  container,
  cb,
  especific_container = false,
  value = 0.1,
  spin = false,
  text = false
) => {
  const start = () => {
    const tl = new GSAP.timeline({ onComplete: cb });
    if (text) {
      tl.to(
        text.style,
        0.25,
        { fontSize: text.style.fontSize + 6, ease: Expo.easeInOut },
        'item'
      )
        .to(text, 0.25, { x: text.x - 12, ease: Expo.easeInOut }, 'item')
        .to(
          text.style,
          0.5,
          { fontSize: text.style.fontSize - 6, ease: Expo.easeIn },
          'item+=0.4'
        )
        .to(text, 0.5, { x: text.x + 12, ease: Expo.easeIn }, 'item+=0.4');
    }
    tl.to(
      especific_container ? especific_container.scale : container.scale,
      0.3,
      {
        x: especific_container
          ? especific_container.scale.x + value
          : container.scale.x + value,
        y: especific_container
          ? especific_container.scale.y + value
          : container.scale.y + value,
        ease: Expo.easeOut
      },
      'item'
    );
    if (spin) {
      tl.to(
        especific_container ? especific_container : container,
        1,
        { rotation: 2 * Math.PI, ease: Expo.easeOut },
        'item+=0.3'
      );
    }
    tl.to(
      container,
      0.4,
      { alpha: 0, ease: Expo.easeOut },
      spin ? 'out+=0.3' : 'out'
    );
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
