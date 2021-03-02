import Controller from 'pixi-controller';
import {
  CreateInventoryBar,
  RenderInventoryBar,
  CreateInventoryMain,
  RenderInventoryMain
} from './inventory';
import { CreatePlayerLife, RenderPlayerLife } from './player';
import KEYS from '@/defines/keys.json';

export const CreateUI = (app, player, resources) => {
  const inventory = CreateInventoryBar(app, player, resources);
  const inventory_main = CreateInventoryMain(app, player, resources);
  const player_life = CreatePlayerLife(app, player, resources);
  return { inventory, inventory_main, player_life };
};

export const RenderUI = (app, ui, player) => {
  ui.inventory.visible = false;
  ui.inventory_main.visible = false;

  RenderPlayerLife(ui, player);

  KEYS.D_OPEN_BAR.forEach((key) => {
    if (Controller.Keyboard.isKeyDown(key)) {
      ui.inventory.visible = true;
      RenderInventoryBar(ui.inventory, player, key);
      return;
    }
  });

  if (player.action.interactive_inventory) {
    ui.inventory_main.visible = true;
    RenderInventoryMain(ui, player);
  } else {
    ui.inventory_main.visible = false;
    player.action.interactive_ui = false;
  }
};
