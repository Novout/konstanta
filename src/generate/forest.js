import FOREST from '@/defines/forest.json';
import { createStores } from './map/store';
import { createAltars } from './map/altar';
import { createTrees } from './map/tree';
import { createAddons } from './map/addons';

export const generateItems = (nodes, options) => {
  let items = [];

  items = [...items, ...createStores(nodes, FOREST, options)];

  items = [...items, ...createAltars(nodes, FOREST, options)];

  items = [...items, ...createTrees(nodes, FOREST, options)];

  return items;
};

export const generateAddons = (nodes, options) => {
  let items = [];

  items = [...items, ...createAddons(nodes, FOREST, options)];
  
  return items;
};
