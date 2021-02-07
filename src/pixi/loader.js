import { 
  loader,
} from '@/pixi/alias';

export const LoaderCache = (textures, setup) => {
  const shared = loader.shared;

  textures.forEach(texture => {
    shared.add(texture[0], texture[1]);
  });

  shared.load(setup);
}