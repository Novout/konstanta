import { KSprite } from '-/core/ui/material';
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

  for (let y = 0; y < 30; y++) {
    for (let x = 0; x < 15; x++) {
      const item = KSprite(stage, resources, 'forest_store', {
        width: 50,
        height: 50
      });
      item.parent_quantity = 0;
      item.x = stage.x + x * item.width;
      item.y = stage.y + y * item.height;
      stage.addChild(item);

      items.push(item);
    }
  }

  return items;
};
