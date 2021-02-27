import { getChancePercentage, getPercentage } from '@/utils/random';
import { textureBackground } from './node';

export const createAddons = (nodes, FOREST, options) => {
  const items = [];

  nodes.forEach((node) => {
    const random = getPercentage();
  
    if (node.background === FOREST[1][0]) {
      if (getChancePercentage(options.spawn.simple_chest)) {
        node.parent_quantity++;
        const item = {};
        const _position = Math.floor(Math.random() * 1 + 1);
        item.background = 'chests';
        item.id = 'defaultchests';
        item.active = true;
        item.scale = 3;
        if (_position === 1) {
          item.x = node.x;
          item.y = node.y;
        } else if (_position === 2) {
          item.x = node.x + node.width / 2;
          item.y = node.y;
        }
        item.cwidth = 20;
        item.cheight = 20;
        items.push(item);
      }
    } else if (node.background === FOREST[2][0]) {
      // forest_base
      for (let i = 0; i < random; i += options.node_addons) {
        if (random >= i) {
          const item = {};
          item.background = textureBackground([
            ['forestgrass1', 50],
            ['forestgrass2', 100]
          ]);
          item.id = `${node.id}${item.background}`;
          item.scale = Math.random() * 2 + 1.5;
          item.x = Math.floor(
            Math.random() * (options.node_size / 1.25) + node.x
          );
          item.y = Math.floor(
            Math.random() * (options.node_size / 1.25) + node.y
          );
          items.push(item);
        }
      }
    } else if (node.background === FOREST[0][0]) {
      // forest_rock.jpg
      for (let i = 0; i < random; i += 40) {
        if (random >= i) {
          node.parent_quantity++;
          const item = {};
          item.background = textureBackground([
            ['forestrock1', 30],
            ['foreststone1', 60],
            ['foreststone2', 100]
          ]);
          item.id = `${node.id}${item.background}`;
          if (item.background.includes('rock')) {
            item.scale = Math.random() * 0.15 + 0.1;
            item.cwidth = item.width * item.scale;
            item.cheight = item.height * item.scale;
            item.x = Math.floor(Math.random() * 10 + node.x);
            item.y = Math.floor(Math.random() * 10 + node.y);
          } else {
            item.scale = Math.random() * 2 + 1.5;
            item.x = Math.floor(
              (Math.random() * options.node_size) / 1.5 + node.x
            );
            item.y = Math.floor(
              (Math.random() * options.node_size) / 1.5 + node.y
            );
            item.cwidth = 20.0;
            item.cheight = 20.0;
          }
          items.push(item);
          if (item.background.includes('rock')) break;
        }
      }
    }
  });

  return items;
}
