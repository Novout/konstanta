import Controller from 'pixi.js-controller';

export const clearContext = () => {
  window.document.getElementById('canvas')?.remove();
};

export const clearListener = () => {
  Controller.reset();
};
