import Keyboard from 'pixi.js-keyboard';
import { CreateInventoryBar, RenderInventoryBar, CreateInventoryMain, RenderInventoryMain } from './inventory';
import { D_OPEN_INVENTORY, D_OPEN_BAR } from '@/defines/keys';

export const CreateUI = (app, player, resources) => {
  const inventory = CreateInventoryBar(app, player, resources);
  const inventory_main = CreateInventoryMain(app, player, resources);
  return { inventory, inventory_main };
}

export const RenderUI = (app, ui, player) => {
  ui.inventory.visible = false;
  ui.inventory_main.visible = false;

  D_OPEN_BAR.forEach(key => {
    if (Keyboard.isKeyDown(key)) {
      ui.inventory.visible = true;
      RenderInventoryBar(ui.inventory, player, key);
      return;
    }
  });

  D_OPEN_INVENTORY.forEach(key => {
    if (Keyboard.isKeyDown(key)) {
      ui.inventory_main.visible = true;
      RenderInventoryMain(ui.inventory_main, player, key);
      return;
    }
  })
}

export * from './inventory';
