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
