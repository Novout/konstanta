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

export const createNodes = () => {
  const nodes = [];

  for (let x = 0; x < 64; x++) {
    for (let y = 0; y < 64; y++) {
      const texture = textureBackground();
      const node = {};
      node.id = `name${x}${y}`;
      node.size = 150;
      node.x = 150 * x;
      node.y = 150 * y;
      node.background = texture;

      nodes.push(node);
    }
  }

  return nodes;
};

export const generateItems = (nodes) => {
  const items = [];

  nodes.forEach(node => {
    if(node.background === D_FOREST_BACKGROUND[2][0]) { // forest1.jpg
      if(Math.floor(Math.random() * 101) >= 90) {
        const item = {};
        item.background = textureBackground([['tree', 100]]);
        item.id = `${node.id}${item.background}`;
        item.scale = 1;
        if(item.background === "tree") {
          item.wood = 3;
          item.scale = (Math.random() * 0.7) + 0.4;
          item.cwidth = 25.0;
          item.cheight = 25.0;
        }
        item.x = node.x;
        item.y = node.y;
        items.push(item);
      }
    }
  });

  return items;
};

export const generateAddons = (nodes) => {
  const items = [];

  nodes.forEach(node => {
    if(node.background === D_FOREST_BACKGROUND[2][0]) { // forest_base
      let random = Math.floor(Math.random() * 101);

      for(let i = 0; i < random; i += 10) {
        if(random >= i) {
          const item = {};
          item.background = textureBackground([['forestgrass1', 50],['forestgrass2', 100]]);
          item.id = `${node.id}${item.background}`;
          item.scale = (Math.random() * 2) + 1.5;
          item.x = Math.floor((Math.random() * 100) + node.x);
          item.y = Math.floor((Math.random() * 100) + node.y);
          items.push(item);
        }
      }
    } else if (node.background === D_FOREST_BACKGROUND[0][0]) { // forest_rock.jpg
      let random = Math.floor(Math.random() * 101);

      for(let i = 0; i < random; i += 40) {
        if(random >= i) {
          const item = {};
          item.background = textureBackground([['foreststone1', 50],['foreststone2', 100]]);
          item.id = `${node.id}${item.background}`;
          item.scale = (Math.random() * 2) + 1.5;
          item.cwidth = 20.0;
          item.cheight = 20.0;
          item.x = Math.floor((Math.random() * 100) + node.x);
          item.y = Math.floor((Math.random() * 100) + node.y);
          items.push(item);
        }
      }
    }
  });

  return items;
};