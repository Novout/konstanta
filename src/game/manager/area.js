import { saveAll } from '@/serialize';
import { NewMap } from '../newgame/create';
import { removeCanvasContext } from '../newgame/remove';

export const goToNewArea = async (chunk, app, content, context) => {
  context.chunk = chunk;

  await saveAll(content, context);
  await removeCanvasContext();
  await app.destroy(true);
  await NewMap(chunk, context);
};
