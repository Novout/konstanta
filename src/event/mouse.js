import Mouse from 'pixi.js-mouse';

export const PlayerMouseListener = (delta, player, player_base, options) => {
  if (Mouse.isButtonDown(Mouse.Button.LEFT)) {
    if(true) { // player.inventory.actually_item?.type_general === 'primary_weapon_melee'
      if(player.action.attack_time >= 0 && player.action.attack_time <= player.action.attack_velocity) {
        if(player.texture_actually !== 'light_attack_1') {
          if(player.action.attack_time === player.action.attack_velocity / 2) player.action.attack_hit = true;
          else player.action.attack_hit = false;
          player.textures = player_base.texture.light_attack.first;
          player.texture_actually = 'light_attack_1';
        }
      } else if(player.action.attack_time <= player.action.attack_velocity * 2) {
        if(player.texture_actually !== 'light_attack_2') {
          if(player.action.attack_time === player.action.attack_velocity * 1.5) player.action.attack_hit = true;
          else player.action.attack_hit = false;
          player.textures = player_base.texture.light_attack.second;
          player.texture_actually = 'light_attack_2';
        }
      } else if(player.action.attack_time <= player.action.attack_velocity * 3) {
        if(player.texture_actually !== 'light_attack_3') {
          if(player.action.attack_time === player.action.attack_velocity * 2.5) player.action.attack_hit = true;
          else player.action.attack_hit = false;
          player.textures = player_base.texture.light_attack.third;
          player.texture_actually = 'light_attack_3';
        }
      } else {
        player.action.attack_time = 0;
      }
      if (!player.playing) player.play();
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

  Mouse.update();
};
