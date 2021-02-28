import { AnimatedSprite } from '@/pixi/alias';
import { createPlayer } from '@/rig/player';
import { setInitialPlayerItem } from '@/generate/items';
import PLAYER from '@/defines/rig/PLAYER.json';

export const PlayerLayerRender = (stage, resources) => {
  const player = createPlayer(resources);
  const _player = new AnimatedSprite(player.texture.stand);
  _player.id = PLAYER.id;
  _player.texture_actually = PLAYER.texture_actually;
  _player.y = PLAYER.y;
  _player.x = PLAYER.x;
  _player.cwidth = PLAYER.cwidth;
  _player.cheight = PLAYER.cheight;
  _player.vx = PLAYER.vx;
  _player.vy = PLAYER.vy;
  _player.level = PLAYER.level;
  _player.levelHP = PLAYER.levelHP;
  _player.HP = PLAYER.HP;
  _player.maxHP = PLAYER.maxHP;
  _player.minHP = PLAYER.minHP;
  _player.temporaryHP = PLAYER.temporaryHP;
  _player.lucky = PLAYER.lucky;
  _player.CA = PLAYER.CA;
  _player.inventory = PLAYER.inventory;
  _player.inventory.actually_item = setInitialPlayerItem(resources);
  _player.inventory.primary_weapon = setInitialPlayerItem(resources);
  _player.resources = PLAYER.resources;
  _player.conditionals = PLAYER.conditionals;
  _player.action = PLAYER.action;
  _player.effects = PLAYER.effects;
  _player.skills = PLAYER.skills;
  _player.magics = PLAYER.magics;
  _player.animationSpeed = 0.2;
  _player.loop = true;
  _player.scale.set(2.5, 2.5);
  _player.play();
  stage.addChild(_player);

  return [_player, player];
};

export const LoadPlayerLayerRender = (stage, resources) => {};
