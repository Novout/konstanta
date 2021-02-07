import { D_BACKGROUND } from "@/defines/winter";

export const textureBackground = (background = D_BACKGROUND) => {
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

  for (let x = 0; x < 128; x++) {
    for (let y = 0; y < 128; y++) {
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
    if(node.background === D_BACKGROUND[2][0]) { // winter_base
      if(Math.floor(Math.random() * 101) >= 90) {
        const item = {};
        item.background = textureBackground([['twig', 100]]);
        item.id = `${node.id}${item.background}`;
        item.scale = 1;
        if(item.background === "twig") {
          item.wood = 3;
          item.scale = (Math.random() * 0.4) + 0.3;
        }
        item.x = node.x;
        item.y = node.y;
        items.push(item);
      }
    }
  });

  return items;
};