export const textureBackground = (background = [
  ['winter1', 5],
  ['winter2', 70],
  ['winter3', 100],
]) => {
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
    if(Math.floor(Math.random() * 101) >= 70 && node.background === "winter3") {
      const item = {};
      item.background = textureBackground([['twig', 100]]);
      item.id = `${node.id}${item.background}`;
      item.size = 150;
      item.x = node.x;
      item.y = node.y;
      items.push(item);
    }
  });

  return items;
};