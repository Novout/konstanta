import FOREST from '@/defines/forest.json';
import { createStoreBackground, createStores } from './map/store';
import { createAltars } from './map/altar';
import { createTrees } from './map/tree';
import { createAddons } from './map/addons';
import { setBackground } from '../utils/dom';

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

export const generateStore = (scene, resources) => {
  let content = [];

  setBackground('store');

  content = [...content, ...createStoreBackground(scene, resources)];

  return content;
};
