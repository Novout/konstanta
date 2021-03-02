import { createSave } from '@/serialize';
import { OnlyWEBGL } from '@/utils/webgl';
import Forest from '@/map/forest';
import FOREST_CONFIG from '@/defines/map/forest.json';
import CONTEXT_CONFIG from '@/defines/initialize/context.json';
import { getContext } from '-/core/serialize/storage/context';

export const NewGame = () => {
  OnlyWEBGL();

  const context = createSave(CONTEXT_CONFIG);

  Forest(context, FOREST_CONFIG);
};

export const NewMap = (context) => {
  const _context = getContext(context);

  if (_context.chunk[0] <= 4 && _context.chunk[1] <= 4) {
    Forest(_context, FOREST_CONFIG);
  }
};
