import { 
  Sprite,
} from '@/pixi/alias';

export const PlayerLayerRender = (stage, resources) => {
  const _player = new Sprite(resources.snowpack.texture);
  _player.y = 1500; 
  _player.x = 1500;
  _player.vx = 5;
  _player.vy = 5;
  _player.width = 100;
  _player.height = 100;
  stage.addChild(_player);

  return _player;
}