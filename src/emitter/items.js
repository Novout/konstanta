import ITEMS from '@/defines/items.json';
import { Sprite, Texture, Rectangle } from '@/pixi/alias';

export const SpawnInitialItem = (stage, player, resources) => {
  const [item] = ITEMS.filter((item) => item.effects_tags.includes('initial'));
  let _resource = resources[item.sprite.path];
  const _item = new Sprite(
    new Texture(
      _resource.texture,
      new Rectangle(
        item.sprite.positional[0] * item.sprite.size[0],
        item.sprite.positional[1] * item.sprite.size[1],
        item.sprite.size[0],
        item.sprite.size[1]
      )
    )
  );
  _item.x = 1000;
  _item.y = 1000;
  _item.width = 100;
  _item.height = 100;

  stage.addChild(_item);
  
  return _item;
};
