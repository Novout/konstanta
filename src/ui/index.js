import Keyboard from 'pixi.js-keyboard';
import { CreateInventoryBar, RenderInventoryBar } from './inventory';
import { D_OPEN_INVENTORY } from '@/defines/keys';

export const CreateUI = (app, player, resources) => {
  const inventory = CreateInventoryBar(app, player, resources);
  return { inventory };
}

export const RenderUI = (app, ui, player) => {
  ui.inventory.visible = false;

  D_OPEN_INVENTORY.forEach(key => {
    if (Keyboard.isKeyDown(key)) {
      ui.inventory.visible = true;
      RenderInventoryBar(ui.inventory, player, key);
      return;
    }
  });
}

export * from './inventory';
