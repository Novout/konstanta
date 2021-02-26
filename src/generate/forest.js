import FOREST from '@/defines/forest.json';
import {
  getItemPercentage,
  getChancePercentage,
  getPercentage
} from '@/utils/random';
import * as Debugger from '@/debugger';

export const textureBackground = (background = FOREST) => {
  let _texture = undefined;

  background.every((texture) => {
    if (getItemPercentage(texture[1])) {
      _texture = texture[0];
      return false;
    }

    return true;
  });

  if (!_texture) Debugger.ThrowError('Texture not exists.');
  return _texture;
};

export const createNodes = (options) => {
  const nodes = [];

  for (let x = 0; x < options.size; x++) {
    for (let y = 0; y < options.size; y++) {
      const texture = textureBackground();
      const node = {};
      node.id = `name${x}${y}`;
      node.size = options.node_size;
      node.x = options.node_size * x;
      node.y = options.node_size * y;
      node.background = texture;
      node.parent_quantity = 0;

      nodes.push(node);
    }
  }

  return nodes;
};

export const generateItems = (nodes, options) => {
  const items = [];

  nodes.forEach((node) => {
    if (node.background === FOREST[1][0]) {
      if (getChancePercentage(options.altar_chance)) {
        node.parent_quantity++;
        const item = {};
        item.background = 'altar';
        item.active = true;
        item.id = 'altar';
        item.scale = 2;
        item.x = node.x - node.width / 4;
        item.y = node.y - node.height / 2;
        item.cwidth = 12.5 * (item.scale + 1.0);
        item.cheight = 12.5 * (item.scale + 1.0);
        items.push(item);
      }
    }
  });

  nodes.forEach((node) => {
    if (node.background === FOREST[2][0]) {
      // forest1.jpg
      if (getChancePercentage(options.node_addons)) {
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

export const generateAddons = (nodes, options) => {
  const items = [];

  nodes.forEach((node) => {
    const random = getPercentage();

    if (node.background === FOREST[1][0]) {
      if (getChancePercentage(options.spawn.simple_chest)) {
        const item = {};
        const _position = Math.floor(Math.random() * 3 + 1);
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
        } else if (_position === 3) {
          item.x = node.x + node.width / 2;
          item.y = node.y + node.height / 2;
        } else if (_position === 4) {
          item.x = node.x;
          item.y = node.y + node.height / 2;
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
};
