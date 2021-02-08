import { 
  Sprite,
} from '@/pixi/alias';
import { createNodes, generateAddons, generateItems } from '@/generate/forest';

export const FirstLayerRender = (stage, resources) => {
  const nodes = createNodes();
  const _nodes = [];
  nodes.forEach(node => {
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
}

export const SecondLayerRender = (stage, resources, nodes) => {
  const items = generateAddons(nodes);
  const _items = [];
  items.forEach((item) => {
    let _item = new Sprite(resources[item.background].texture);
    _item.x = item.x;
    _item.y = item.y;
    _item.scale.set(item?.scale);
    _item.id = item.id;
    _item.fx = item.fx;
    _item.fy = item.fy;
    _items.push(_item);
    stage.addChild(_item);
  });

  return _items;
}

export const ThirdLayerRender = (stage, resources, nodes) => {
  const items = generateItems(nodes);
  const _items = [];
  items.forEach((item) => {
    let _item = new Sprite(resources[item.background].texture);
    _item.x = item.x;
    _item.y = item.y;
    _item.scale.set(item?.scale);
    _item.id = item.id;
    _item.fx = item.fx;
    _item.fy = item.fy;
    _items.push(_item);
    stage.addChild(_item);
  });

  return _items;
}
