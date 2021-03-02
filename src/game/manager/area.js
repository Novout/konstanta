import { saveAll } from '@/serialize';
import { NewMap } from '../newgame/create';
import { clearContext } from '../newgame/remove';

export const goToNewArea = async (chunk, app, content, context) => {
  context.chunk = chunk;

  await saveAll(content, context);
  await app.destroy(true);
  await clearContext();
  await NewMap(context);
};
