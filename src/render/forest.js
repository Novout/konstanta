import { Sprite, Rectangle, Texture } from '@/pixi/alias';
import { createNodes, generateAddons, generateItems } from '@/generate/forest';

export const FirstLayerRender = (stage, resources, options) => {
  const nodes = createNodes(options);
  const _nodes = [];
  nodes.forEach((node) => {
    let _node = new Sprite(resources[node.background].texture);
    _node.interactive = false;
    _node.buttonMode = false;
    _node.background = node.background;
    _node.x = node.x;
    _node.y = node.y;
    _node.width = node.size;
    _node.height = node.size;
    _node.id = node.id;
    _nodes.push(_node);
    stage.addChild(_node);
  });

  return _nodes;
};

export const SecondLayerRender = (stage, resources, nodes, options) => {
  const items = generateAddons(nodes, options);
  const _items = [];
  items.forEach((item) => {
    let _resource = resources[item.background];
    let _item;

    if (item.background === 'chests') {
      _item = new Sprite(
        new Texture(_resource.texture, new Rectangle(0, 0, 16, 16))
      );
      _item.active = item.active;
    } else {
      _item = new Sprite(_resource.texture);
    }
    _item.background = item.background;
    _item.x = item.x;
    _item.y = item.y;
    _item.scale.set(item?.scale);
    _item.id = item.id;
    _item.cwidth = item.cwidth;
    _item.cheight = item.cheight;
    _items.push(_item);
    stage.addChild(_item);
  });

  return _items;
};

export const ThirdLayerRender = (stage, resources, nodes, options) => {
  const items = generateItems(nodes, options);
  const _items = [];
  items.forEach((item) => {
    let _resource = resources[item.background];
    let _item;

    if (item.background === 'altar') {
      _item = new Sprite(_resource.texture);
      _item.active = item.active;
    } else if (item.background === 'chests') {
      _item = new Sprite(
        new Texture(_resource.texture, new Rectangle(0, 0, 16, 16))
      );
    } else {
      _item = new Sprite(_resource.texture);
    }

    _item.x = item.x;
    _item.y = item.y;
    _item.scale.set(item?.scale);
    _item.id = item.id;
    _item.cwidth = item.cwidth;
    _item.cheight = item.cheight;
    _items.push(_item);
    stage.addChild(_item);
  });

  return _items;
};
