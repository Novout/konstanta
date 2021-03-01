import { AnimatedSprite } from '@/pixi/alias';
import { createPlayer } from '@/rig/player';
import { generatePlayerItem, setInitialPlayerItem } from '@/generate/items';
import PLAYER from '@/defines/rig/PLAYER.json';
import { loadPlayer } from '@/serialize/rig/player';

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

export const LoadPlayerLayerRender = (stage, resources, context) => {
  const player_base = createPlayer(resources);

  const player = loadPlayer(context);
  const _player = new AnimatedSprite(player_base.texture.stand);
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
  _player.lucky = player.lucky;
  _player.CA = player.CA;
  _player.inventory = player.inventory;
  _player.inventory.actually_item = generatePlayerItem(
    _player.inventory?.actually_item,
    resources
  );
  _player.inventory.primary_weapon = generatePlayerItem(
    _player.inventory?.primary_weapon,
    resources
  );
  _player.inventory.second_weapon = generatePlayerItem(
    _player.inventory?.second_weapon,
    resources
  );
  _player.inventory.activate = generatePlayerItem(
    _player.inventory?.activate,
    resources
  );
  _player.inventory.artefact = generatePlayerItem(
    _player.inventory?.artefact,
    resources
  );
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

  return [_player, player_base];
};
