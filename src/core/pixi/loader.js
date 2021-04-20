import { useLoader } from '-/pages/loader';
import { loader } from '@/pixi/alias';

export const LoaderCache = (textures, setup, path = 'assets') => {
  const shared = loader.shared;
  shared.baseUrl = path;

  textures.forEach((texture) => {
    shared.add(texture[0], texture[1]);
  });

  const [load, complete] = useLoader();

  shared.onLoad.add((self) => {
    load(self);
  });

  shared.onComplete.add(() => {
    complete();
  });

  shared.load(setup);
};
