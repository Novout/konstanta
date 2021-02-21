import Keyboard from 'pixi.js-keyboard';
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

  KEYS.D_OPEN_BAR.forEach((key) => {
    if (Keyboard.isKeyDown(key)) {
      ui.inventory.visible = true;
      RenderInventoryBar(ui.inventory, player, key);
      return;
    }
  });

  KEYS.D_OPEN_INVENTORY.forEach((key) => {
    let _interactive = 0;
    if (Keyboard.isKeyDown(key)) {
      ui.inventory_main.visible = true;
      ui.player_life.visible = false;
      RenderInventoryMain(ui, player, key);
      _interactive++;
      return;
    } else {
      ui.player_life.visible = true;
    }

    if (_interactive === 0) player.action.interactive_ui = false;
  });

  RenderPlayerLife(ui, player);
};
