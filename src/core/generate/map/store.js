import { generateStore } from '@/utils/random';

export const createStores = (nodes, FOREST, options) => {
  const items = [];

  nodes.forEach((node) => {
    if (node.background === FOREST[2][0]) {
      if (generateStore(options?.spawn?.store) && node.parent_quantity === 0) {
        node.parent_quantity++;
        const item = {};
        item.background = 'foresthouse';
        item.id = `${item.background}${node.id}`;
        item.x = node.x + node.width / 2;
        item.y = node.y + node.height / 2;
        item.cwidth = 80.0;
        item.cheight = 25.0;
        item.scale = 2;
        items.push(item);
      }
    }
  });

  return items;
};

export const createStoreBackground = (stage, resources) => {
  const items = [];

  return items;
};
