import ITEMS from '@/defines/items.json';
import * as Debugger from '@/debugger';

export const getGenerateItem = (player) => {
  const _items = ITEMS.filter(
    (item) =>
      player.level + player.lucky.items == item.id_cont &&
      !item.type_tags.includes('unknown')
  );
  const _random = Math.floor(Math.random() * _items.length);

  const _item = _items[_random];
  if (!_item) Debugger.ThrowError('Item not exists in generate.');

  _item.colorBackground =
    {
      common: 0xc6c6c6,
      uncommon: 0x84daff,
      epic: 0xb884ff,
      legendary: 0xff8c4b
    }[_item.rarity] || '';

  if (!_item.colorBackground)
    Debugger.ThrowError('Item rarity not exists in generate.');

  return _item;
};
