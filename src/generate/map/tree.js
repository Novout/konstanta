import { getChancePercentage } from '@/utils/random';
import { textureBackground } from '../forest';

export const createTrees = (nodes, FOREST, options) => {
  const items = [];

  nodes.forEach((node) => {
    if (node.background === FOREST[2][0]) {
      // forest1.jpg
      if (
        getChancePercentage(options.node_addons) &&
        node.parent_quantity === 0
      ) {
        node.parent_quantity++;
        const item = {};
        item.background = textureBackground([
          ['tree', 50],
          ['tree2', 100]
        ]);
        item.id = `${node.id}${item.background}`;
        item.scale = 1;
        if (item.background.includes('tree')) {
          item.wood = 3;
          item.scale = Math.random() * 0.8 + 0.4;
          item.cwidth = 12.5 * (item.scale + 1.0);
          item.cheight = 12.5 * (item.scale + 1.0);
        }

        if (node.x <= options.node_size) {
          item.x = (Math.random() * options.node_size) / 2 + node.x;
        } else if (node.x >= (options.size - 1) * options.node_size) {
          item.x = node.x - (Math.random() * options.node_size) / 2;
        } else {
          item.x = (Math.random() * options.node_size) / 2 + node.x;
        }

        if (node.y <= options.node_size) {
          item.y =
            (Math.random() * options.node_size) / 2 + node.y - node.height;
        } else if (node.y >= (options.size - 1) * options.node_size) {
          item.y =
            node.y - (Math.random() * options.node_size) / 2 - node.height;
        } else {
          item.y =
            (Math.random() * options.node_size) / 4 + (node.y - node.height);
        }

        items.push(item);
      }
    }
  });

  return items;
};
