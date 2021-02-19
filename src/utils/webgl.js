import { utils, filters } from '@/pixi/alias';
import { GlowFilter } from 'pixi-filters';
import * as Debugger from '@/debugger';

export const UIAlpha = () => {
  const alpha_bar = new filters.AlphaFilter(0.8);
  const alpha_main = new filters.AlphaFilter(0.6);
  const alpha_item = new filters.AlphaFilter(0.15);

  return { alpha_bar, alpha_main, alpha_item };
};

export const FXAA = () => (new filters.FXAAFilter().enabled = true);

export const InterfaceGlow = (_color = 0x66bd99) =>
  new GlowFilter({
    distance: 25,
    outerStrength: 4,
    quality: 0.2,
    color: _color,
    knockout: false
  });

export const OnlyWEBGL = () => {
  if (!utils.isWebGLSupported()) {
    Debugger.ThrowError('WEBGL is required!');
  }
};
