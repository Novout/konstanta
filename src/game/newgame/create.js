import { createSave } from '@/serialize';
import { OnlyWEBGL } from '@/utils/webgl';
import Forest from '@/map/forest';
import FOREST_CONFIG from '@/defines/map/forest.json';

export const NewGame = () => {
  OnlyWEBGL();

  const context = createSave({ id: 'test001', chunk: [1, 1] });
  Forest(context, FOREST_CONFIG);
};
