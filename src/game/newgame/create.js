import Forest from '@/map/forest';
import FOREST_CONFIG from '@/defines/map/forest.json';
import { createSave } from '@/serialize';

export const NewGame = () => {
  const context = createSave({ id: 'test001', chunk: [1, 1] });
  Forest(context, FOREST_CONFIG);
};
