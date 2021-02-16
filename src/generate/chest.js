import ITEMS from '@/defines/items.json';

export const getGenerateItem = (player) => {
  const _items = ITEMS.filter((item) => player.level === item.id_cont);
  const _random = Math.floor(Math.random() * _items.length);

  const _item = _items[_random];

  if (_item) throw new Error('Item not exists in generate');

  return _item;
};
