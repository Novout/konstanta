import Keyboard from 'pixi.js-keyboard';

export const PlayerKeyboardListener = (delta, player) => {
  if (Keyboard.isKeyDown('ArrowLeft', 'KeyA')) {
    if(player.x <= 0) return;
    player.x -= player.vx * delta;
  }

  if (Keyboard.isKeyDown('ArrowRight', 'KeyD')) {
    if(player.x >= 63 * 150) return;
    player.x += player.vx * delta;
  }

  if (Keyboard.isKeyDown('ArrowUp', 'KeyW')) {
    if(player.y <= 0) return;
    player.y -= player.vy * delta;
  }

  if (Keyboard.isKeyDown('ArrowDown', 'KeyS')) {
    if(player.y >= 63 * 150) return;
    player.y += player.vy * delta;
  }
}