import { 
  Sprite,
} from '@/pixi/alias';
import { createPlayer } from '@/rig/player';

export const PlayerLayerRender = (stage, resources) => {
  const player = createPlayer();
  const _player = new Sprite(resources.snowpack.texture);
  _player.y = player.y; 
  _player.x = player.x;
  _player.width = 100;
  _player.height = 100;
  _player.vx = player.vx;
  _player.vy = player.vy;
  _player.CA = player.CA;
  _player.inventory = player.inventory;
  _player.resources = player.resources;
  stage.addChild(_player);

  return _player;
}