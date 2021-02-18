import ITEMS from '@/defines/items.json';
import { Sprite, Texture, Rectangle } from '@/pixi/alias';

export const setInitialPlayerItem = (resources) => {
  const [item] = ITEMS.filter((item) => item.effects_tags.includes('initial'));
  let _resource = resources[item.sprite.path_inventory];
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
  _item.base = item;
  _item.width = 64;
  _item.height = 64;

  return _item;
};
