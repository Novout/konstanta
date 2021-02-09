import Keyboard from 'pixi.js-keyboard';

const PlayerIsRun = (player, player_base) => {
  if(player.texture_actually !== "run") {
    player.textures = player_base.texture.run;
    player.texture_actually = "run";
    if(!player.playing) player.play();
  } 
}

const PlayerIsStop = (player, player_base) => {
  if(player.texture_actually !== "stand") {
    player.textures = player_base.texture.stand;
  }
}

export const PlayerKeyboardListener = (delta, player, player_base, options) => {
  let stop = true;
  
  if (Keyboard.isKeyDown('ArrowLeft', 'KeyA')) {
    stop = false;
    player.anchor.x = 0.75; 
    player.scale.x = -2.5;
    PlayerIsRun(player, player_base);
    if(player.x <= 0) return;
    player.x -= player.vx * delta;
  }

  if (Keyboard.isKeyDown('ArrowRight', 'KeyD')) {
    stop = false;
    player.anchor.x = 0; 
    player.scale.x = 2.5;
    PlayerIsRun(player, player_base);
    if(player.x >= (options.size - 1) * 150) return;
    player.x += player.vx * delta;
  }

  if (Keyboard.isKeyDown('ArrowUp', 'KeyW')) {
    stop = false;
    PlayerIsRun(player, player_base);
    if(player.y <= 0) return;
    player.y -= player.vy * delta;
  }

  if (Keyboard.isKeyDown('ArrowDown', 'KeyS')) {
    stop = false;
    PlayerIsRun(player, player_base);
    if(player.y >= (options.size - 1) * 150) return;
    player.y += player.vy * delta;
  }

  if(stop) {
    PlayerIsStop(player, player_base);
    player.texture_actually = "stand";
    if(!player.playing) player.play();
  } 
}