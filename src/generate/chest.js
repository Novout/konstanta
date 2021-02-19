import ITEMS from '@/defines/items.json';
import * as Debugger from '@/debugger';

export const getGenerateItem = (player) => {
  const _items = ITEMS.filter((item) => player.level === item.id_cont);
  const _random = Math.floor(Math.random() * _items.length);

  const _item = _items[_random];

  if (_item) Debugger.Error('Item not exists in generate');

  return _item;
};
