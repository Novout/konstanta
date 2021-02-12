import Mouse from 'pixi.js-mouse';

export const PlayerMouseListener = (delta, player, player_base, options) => {
  Mouse.update();
  if (Mouse.isButtonDown(Mouse.Button.LEFT)) {
    if(true) { // player.inventory.actually_item?.type === 'primary_weapon'
      if(player.action.attack_time >= 0 && player.action.attack_time <= 30) {
        if(player.texture_actually !== 'light_attack_1') {
          player.textures = player_base.texture.light_attack.first;
          player.texture_actually = 'light_attack_1';
        }

        if (!player.playing) player.play();
      } else if(player.action.attack_time > 30 && player.action.attack_time <= 60) {
        if(player.texture_actually !== 'light_attack_2') {
          player.textures = player_base.texture.light_attack.second;
          player.texture_actually = 'light_attack_2';
        }

        if (!player.playing) player.play();
      } else if(player.action.attack_time > 60 && player.action.attack_time <= 90) {
        if(player.texture_actually !== 'light_attack_3') {
          player.textures = player_base.texture.light_attack.third;
          player.texture_actually = 'light_attack_3';
        }
        
        if (!player.playing) player.play();
      } else {
        player.action.attack_time = 0;
      }
      player.action.attack = true;
      player.action.attack_time++;
    } 
  } else {
    player.action.attack = false;
    player.action.attack_time = 0;
  }

  if (Mouse.isButtonDown(Mouse.Button.RIGHT)) {
    console.log('right');
  }
};
