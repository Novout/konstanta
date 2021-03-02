import * as Debugger from '@/debugger';
import { loadPlayer, savePlayer } from './rig/player';
import { saveContext } from './storage/context';
import { getStorage } from './storage/get';
import { setStorage } from './storage/set';

export const createSave = (context) => {
  setStorage(context.id, context);
  return getStorage(context.id);
};

export const saveAll = ({ player }, context) => {
  if (!context) Debugger.ThrowError('context Object not exist!');

  saveContext(context);
  savePlayer(player, context);
};

export const loadAll = (context) => {
  let obj = { context };

  if (!context) Debugger.ThrowError('context Object not exist!');

  obj.player = loadPlayer(context);

  return obj;
};
