import Keyboard from 'pixi.js-keyboard';

export const PlayerKeyboardWatcher = (player) => {
  Keyboard.events.on('pressed_KeyI', null, (keyCode, event) => { 
    player.action.interactive_inventory = !player.action.interactive_inventory;
  });
}