import { getStorage } from './get';
import { setStorage } from './set';

export const saveContext = (context) => {
  setStorage(context.id, context);
};

export const getContext = (context) => {
  return getStorage(context.id);
};
