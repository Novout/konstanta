import { 
  utils,
  filters
} from '@/pixi/alias';
import { GlowFilter } from 'pixi-filters';

export const UIAlpha = () => {
  const alpha_main = new filters.AlphaFilter(0.5);
  const alpha_item = new filters.AlphaFilter(0.15);

  return { alpha_main, alpha_item };
}

export const FXAA = () => new filters.FXAAFilter().enabled = true;

export const InterfaceGlow = () => new GlowFilter({ distance: 25, outerStrength: 4, quality: 0.2, color: 0x66BD99, knockout: false })

export const OnlyWEBGL = () => {
  if(!utils.isWebGLSupported()){
    throw new Error("WEBGL is required!");
  }
}