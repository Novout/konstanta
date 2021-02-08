import { 
  AnimatedSprite
} from '@/pixi/alias';
import { createPlayer } from '@/rig/player';

export const PlayerLayerRender = (stage, resources) => {
  const player = createPlayer(resources);
  const _player = new AnimatedSprite(player.texture.stand);
  _player.y = player.y; 
  _player.x = player.x;
  _player.cwidth = player.cwidth;
  _player.cheight = player.cheight;
  _player.vx = player.vx;
  _player.vy = player.vy;
  _player.CA = player.CA;
  _player.inventory = player.inventory;
  _player.resources = player.resources;
  _player.animationSpeed = 0.25;
  _player.scale.set(2, 2);
  _player.play();
  stage.addChild(_player);

  return _player;
}