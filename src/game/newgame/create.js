import { createSave } from '@/serialize';
import { OnlyWEBGL } from '@/utils/webgl';
import Forest from '@/map/forest';
import FOREST_CONFIG from '@/defines/map/forest.json';
import CONTEXT_CONFIG from '@/defines/initialize/context.json';

export const NewGame = () => {
  OnlyWEBGL();

  const context = createSave(CONTEXT_CONFIG);

  Forest(context, FOREST_CONFIG);
};

export const NewMap = (chunk, context) => {
  if (chunk[0] <= 4 && chunk[1] <= 4) {
    Forest(context, FOREST_CONFIG);
  }
};
