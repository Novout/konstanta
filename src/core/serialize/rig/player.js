import { getStorage } from '../storage/get';
import { setStorage } from '../storage/set';

export const savePlayer = (player, context) => {
  setStorage(`${context.id}player`, player);
};

export const loadPlayer = (context) => {
  return getStorage(`${context.id}player`);
};
