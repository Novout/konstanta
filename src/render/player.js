import { 
  AnimatedSprite
} from '@/pixi/alias';
import { createPlayer } from '@/rig/player';

export const PlayerLayerRender = (stage, resources) => {
  const player = createPlayer(resources);
  const _player = new AnimatedSprite(player.texture.stand);
  _player.id = player.id,
  _player.texture_actually = player.texture_actually,
  _player.y = player.y; 
  _player.x = player.x;
  _player.action = {
    attack: false,
    attack_time: 0,
    distance: false,
    distance_time: 0,
    interactive: false
  };
  _player.cwidth = player.cwidth;
  _player.cheight = player.cheight;
  _player.vx = player.vx;
  _player.vy = player.vy;
  _player.level = player.level;
  _player.maxHP = player.maxHP;
  _player.HP = player.HP;
  _player.CA = player.CA;
  _player.inventory = player.inventory;
  _player.resources = player.resources;
  _player.conditionals = player.conditionals;
  _player.skills = player.skills;
  _player.animationSpeed = 0.2;
  _player.loop = true;
  _player.scale.set(2.5, 2.5);
  _player.play();
  stage.addChild(_player);

  return [_player, player];
}