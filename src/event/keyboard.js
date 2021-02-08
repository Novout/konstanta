import Keyboard from 'pixi.js-keyboard';

export const PlayerKeyboardListener = (delta, player, player_base) => {
  let stop = true;
  
  if (Keyboard.isKeyDown('ArrowLeft', 'KeyA')) {
    stop = false;
    player.anchor.x = 0.75; 
    player.scale.x = -2.5;
    if(player.texture_actually !== "run") {
      player.textures = player_base.texture.run;
      player.texture_actually = "run";
      if(!player.playing) player.play();
    } 
    if(player.x <= 0) return;
    player.x -= player.vx * delta;
  }

  if (Keyboard.isKeyDown('ArrowRight', 'KeyD')) {
    stop = false;
    player.anchor.x = 0; 
    player.scale.x = 2.5;
    if(player.texture_actually !== "run") {
      player.textures = player_base.texture.run;
      player.texture_actually = "run";
      if(!player.playing) player.play();
    } 
    if(player.x >= 63 * 150) return;
    player.x += player.vx * delta;
  }

  if (Keyboard.isKeyDown('ArrowUp', 'KeyW')) {
    stop = false;
    if(player.texture_actually !== "run") {
      player.textures = player_base.texture.run;
      player.texture_actually = "run";
      if(!player.playing) player.play();
    } 
    if(player.y <= 0) return;
    player.y -= player.vy * delta;
  }

  if (Keyboard.isKeyDown('ArrowDown', 'KeyS')) {
    stop = false;
    if(player.texture_actually !== "run") {
      player.textures = player_base.texture.run;
      player.texture_actually = "run";
      if(!player.playing) player.play();
    } 
    if(player.y >= 63 * 150) return;
    player.y += player.vy * delta;
  }

  if(stop) {
    if(player.texture_actually !== "stand") {
      player.textures = player_base.texture.stand;
    }
    player.texture_actually = "stand";
    if(!player.playing) player.play();
  } 
}