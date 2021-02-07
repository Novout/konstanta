import Keyboard from 'pixi.js-keyboard';
import { 
  Container,
  Sprite, 
  filters,
  Graphics,
  resources
} from "@/pixi/alias";
import { D_OPEN_INVENTORY } from '@/defines/keys';

export const UIAlpha = () => {
  const alpha_main = new filters.AlphaFilter(0.5);
  const alpha_item = new filters.AlphaFilter(0.15);

  return { alpha_main, alpha_item };
}

export const CreateUI = (app, player) => {
  const inventory = CreateInventoryBar(app, player);
  return { inventory };
}

export const CreateInventoryBar = (app, player) => {
  let inventory = new Container();
  inventory.position.set(player.x - 75, player.y - 100);
  app.stage.addChild(inventory);

  let bar = new Graphics();
  bar.beginFill(0x66BD99);
  bar.drawRect(0, 0, 256, 64);
  bar.endFill();
  bar.filters = [UIAlpha().alpha_main];
  inventory.addChild(bar);

  let i_primary_weapon = new Graphics();
  i_primary_weapon.beginFill(0xFFFFFF);
  i_primary_weapon.drawRect(0, 0, 64, 64);
  i_primary_weapon.endFill();
  i_primary_weapon.filters = [UIAlpha().alpha_item];
  inventory.addChild(i_primary_weapon);

  inventory.outer = i_primary_weapon;

  return inventory;
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

export const RenderInventoryBar = (inventory, player, key) => {
  inventory.position.set(player.x - 75, player.y - 100);

  if(key === "Digit1") {
    player.inventory.actually_weapon = inventory?.getChildByName("i_primary_weapon")?.getChildByName("s_primary_weapon");
  } else if (key === "Digit2") {
    player.inventory.actually_weapon = inventory?.getChildByName("i_second_weapon")?.getChildByName("s_second_weapon");
  }
  else if (key === "Digit3") {
    player.inventory.actually_weapon = inventory?.getChildByName("i_activate")?.getChildByName("s_activate");
  }
  else if (key === "Digit4") {
    player.inventory.actually_weapon = inventory?.getChildByName("i_artefact")?.getChildByName("s_artefact");
  }
}

export const removeInventoryItem = (inventory, player) => {
  inventory.position.set(player.x - 75, player.y - 100);
  const actually_weapon = inventory.getChildByName("i_primary_weapon");

  if(player.inventory.primary_weapon !== actually_weapon) {
    const new_item = new Sprite(resources[actually_weapon].texture);
    new_item.width = 20;
    new_item.height = 20;

    actually_weapon.removeChil(actually_weapon);
    actually_weapon.addChild(new_item);
  }
}

const addInventoryItem = (inventory, player, app) => {

}