import ITEMS from '@/defines/items.json';
import * as Debugger from '@/debugger';

export const getGenerateItem = (player) => {
  const _items = ITEMS.filter((item) => player.level == item.id_cont && !item.type_tags.includes('unknown'));
  const _random = Math.floor(Math.random() * _items.length);

  const _item = _items[_random];
  if (!_item) Debugger.ThrowError('Item not exists in generate.');

  _item.colorBackground = ({
    "common": 0xC6C6C6,
    "uncommon": 0x84DAFF,
    "epic": 0xB884FF,
    "legendary": 0xFF8C4B
  }[_item.rarity] || "")

  if (!_item.colorBackground) Debugger.ThrowError('Item rarity not exists in generate.');

  return Object.freeze(_item);
};
