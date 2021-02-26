import { AnimatedSprite } from '@/pixi/alias';
import { createPlayer } from '@/rig/player';

export const PlayerLayerRender = (stage, resources) => {
  const player = createPlayer(resources);
  const _player = new AnimatedSprite(player.texture.stand);
  _player.id = player.id;
  _player.texture_actually = player.texture_actually;
  _player.y = player.y;
  _player.x = player.x;
  _player.cwidth = player.cwidth;
  _player.cheight = player.cheight;
  _player.vx = player.vx;
  _player.vy = player.vy;
  _player.level = player.level;
  _player.levelHP = player.levelHP;
  _player.HP = player.HP;
  _player.maxHP = player.maxHP;
  _player.minHP = player.minHP;
  _player.temporaryHP = player.temporaryHP;
  _player.CA = player.CA;
  _player.inventory = player.inventory;
  _player.resources = player.resources;
  _player.conditionals = player.conditionals;
  _player.action = player.action;
  _player.effects = player.effects;
  _player.skills = player.skills;
  _player.magics = player.magics;
  _player.animationSpeed = 0.2;
  _player.loop = true;
  _player.scale.set(2.5, 2.5);
  _player.play();
  stage.addChild(_player);

  return [_player, player];
};
