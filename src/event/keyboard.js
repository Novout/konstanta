import Keyboard from 'pixi.js-keyboard';

export const PlayerKeyboardListener = (delta, player) => {
  if (Keyboard.isKeyDown('ArrowLeft', 'KeyA')) {
    player.anchor.x = 0.75; 
    player.scale.x = -2.5;
    if(player.x <= 0) return;
    player.x -= player.vx * delta;
  }

  if (Keyboard.isKeyDown('ArrowRight', 'KeyD')) {
    player.anchor.x = 0; 
    player.scale.x = 2.5;
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