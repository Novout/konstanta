import { D_FOREST_BACKGROUND } from "@/defines/forest";

export const textureBackground = (background = D_FOREST_BACKGROUND) => {
  let _texture = undefined;

  background.every((texture) => {
    if (Math.floor(Math.random() * 101) <= texture[1]) {
      _texture = texture[0];
      return false;
    }

    return true;
  });

  if (!_texture) throw Error('Texture not exists.');
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

      nodes.push(node);
    }
  }

  return nodes;
};

export const generateItems = (nodes, options) => {
  const items = [];

  nodes.forEach(node => {
    if(node.background === D_FOREST_BACKGROUND[2][0]) { // forest1.jpg
      if(Math.floor(Math.random() * 101) >= options.node_items) {
        const item = {};
        item.background = textureBackground([['tree', 50], ['tree2', 100]]);
        item.id = `${node.id}${item.background}`;
        item.scale = 1;
        if(item.background.includes("tree")) {
          item.wood = 3;
          item.scale = (Math.random() * 0.7) + 0.4;
          item.cwidth = 12.5 * (item.scale + 1.0);
          item.cheight = 12.5 * (item.scale + 1.0);
        }
        item.x = node.x;
        item.y = node.y;
        items.push(item);
      }
    }
  });

  return items;
};

export const generateAddons = (nodes, options) => {
  const items = [];

  nodes.forEach(node => {
    if(node.background === D_FOREST_BACKGROUND[2][0]) { // forest_base
      let random = Math.floor(Math.random() * 101);

      for(let i = 0; i < random; i += options.node_addons) {
        if(random >= i) {
          const item = {};
          item.background = textureBackground([['forestgrass1', 50],['forestgrass2', 100]]);
          item.id = `${node.id}${item.background}`;
          item.scale = (Math.random() * 2) + 1.5;
          item.x = Math.floor((Math.random() * 180) + node.x);
          item.y = Math.floor((Math.random() * 180) + node.y);
          items.push(item);
        }
      }
    } else if (node.background === D_FOREST_BACKGROUND[0][0]) { // forest_rock.jpg
      let random = Math.floor(Math.random() * 101);

      for(let i = 0; i < random; i += 40) {
        if(random >= i) {
          const item = {};
          item.background = textureBackground([['forestrock1', 30], ['foreststone1', 60],['foreststone2', 100]]);
          item.id = `${node.id}${item.background}`;
          if(item.background.includes('rock')) {
            item.scale = (Math.random() * 0.15) + 0.1;
            item.cwidth = item.width * item.scale;
            item.cheight = item.height * item.scale;
            item.x = Math.floor((Math.random() * 10) + node.x);
            item.y = Math.floor((Math.random() * 10) + node.y);
          } else {
            item.scale = (Math.random() * 2) + 1.5;
            item.x = Math.floor((Math.random() * options.node_size / 1.5) + node.x);
            item.y = Math.floor((Math.random() * options.node_size / 1.5) + node.y);
            item.cwidth = 20.0;
            item.cheight = 20.0;
          }
          items.push(item);
          if(item.background.includes('rock')) break;
        }
      }
    }
  });

  return items;
};