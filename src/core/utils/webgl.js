import { utils, filters } from '@/pixi/alias';
import { GlowFilter } from 'pixi-filters';
import * as Debugger from '@/debugger';

/**
 * Objeto de Filtros do Pixi-Filters para deixar itens transparentes.
 * 
 * Pixi-Filters object to make items transparent.
 * @returns {Array<Filters>} Lista de Filtros do Pixi-Filters
 */
export const UIAlpha = () => {
  const alpha_bar = new filters.AlphaFilter(0.8);
  const alpha_main = new filters.AlphaFilter(0.6);
  const alpha_item = new filters.AlphaFilter(0.15);

  return { alpha_bar, alpha_main, alpha_item };
};

/**
 * Filtro do Pixi-Filters para habilitar FXAA no objeto anexado.
 * 
 * Pixi-Filters filter to enable FXAA no attached objects.
 * @returns {Filter} Filtros do Pixi-Filters
 */
export const FXAA = () => (new filters.FXAAFilter().enabled = true);

/**
 * Filtro do Pixi-Filters para emitir iluminação externa.
 * 
 * Pixi-Filters filter to emit external lighting.
 * @param {number} [_color=0x66bd99] HEX Color
 */
export const InterfaceGlow = (_color = 0x66bd99) =>
  new GlowFilter({
    distance: 25,
    outerStrength: 4,
    quality: 0.2,
    color: _color,
    knockout: false
  });

/**
 * Apenas renderiza o canvas se o navegador tiver WEBGL.
 * 
 * Only render the canvas if the browser has WEBGL.
 */
export const OnlyWEBGL = () => {
  if (!utils.isWebGLSupported()) {
    Debugger.ThrowError('WEBGL is required!');
  }
};
