import Mouse from '@/pixi/plugins/mouse';
import Keyboard from 'pixi.js-keyboard';

export const clearContext = () => {
  window.document.getElementById('canvas')?.remove();
};

export const clearListener = () => {
  Keyboard.clear();
  Mouse.clear();
};
