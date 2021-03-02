import Controller from 'pixi.js-controller';

export const PlayerKeyboardWatcher = (player, context) => {
  Controller.Keyboard.events.on('pressed_KeyI', null, (keyCode, event) => {
    player.action.interactive_inventory = !player.action.interactive_inventory;
  });
};
