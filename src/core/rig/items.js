import ITEMS from '@/defines/items.json';
import { Sprite, Rectangle, Texture } from '@/pixi/alias';

export const UnknownInventorySprite = (resources) => {
  const [item] = ITEMS.filter((item) => item.type_tags.includes('unknown'));
  const _resource = resources[item.sprite.path_inventory];

  return new Sprite(
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
};
