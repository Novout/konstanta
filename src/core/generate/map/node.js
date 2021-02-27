import FOREST from '@/defines/forest.json';
import * as Debugger from '@/debugger';
import { getItemPercentage } from '@/utils/random';

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
