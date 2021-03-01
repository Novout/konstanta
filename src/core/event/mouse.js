import Mouse from '@/pixi/plugins/mouse';

export const PlayerMouseListener = (delta, player, player_base, options) => {
  if (Mouse.isButtonDown(Mouse.Button.LEFT)) {
    if (player.action.position.x === 'left') {
      player.anchor.x = 0.75;
      player.scale.x = -2.5;
    } else {
      player.anchor.x = 0;
      player.scale.x = 2.5;
    }

    if (player.inventory.actually_item.base.type_tags.includes('melee')) {
      if (
        player.action.attack_time >= 0 &&
        player.action.attack_time <= player.action.attack_velocity
      ) {
        if (player.texture_actually !== 'light_attack_1') {
          player.textures = player_base.texture.light_attack.first;
          player.texture_actually = 'light_attack_1';
        }

        if (player.action.attack_time === player.action.attack_velocity / 2)
          player.action.attack_hit = true;
        else player.action.attack_hit = false;
      } else if (
        player.action.attack_time <=
        player.action.attack_velocity * 2
      ) {
        if (player.texture_actually !== 'light_attack_2') {
          player.textures = player_base.texture.light_attack.second;
          player.texture_actually = 'light_attack_2';
        }

        if (player.action.attack_time === player.action.attack_velocity * 1.5)
          player.action.attack_hit = true;
        else player.action.attack_hit = false;
      } else if (
        player.action.attack_time <=
        player.action.attack_velocity * 3
      ) {
        if (player.texture_actually !== 'light_attack_3') {
          player.textures = player_base.texture.light_attack.third;
          player.texture_actually = 'light_attack_3';
        }

        if (player.action.attack_time === player.action.attack_velocity * 2.5)
          player.action.attack_hit = true;
        else player.action.attack_hit = false;
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
