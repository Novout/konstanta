import Controller from 'pixi-controller';

export const clearContext = () => {
  window.document.getElementById('canvas')?.remove();
};

export const clearListener = () => {
  Controller.reset();
};
