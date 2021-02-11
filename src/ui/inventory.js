import { 
  Container,
  Sprite, 
  Graphics,
  resources
} from "@/pixi/alias";
import { UIAlpha, FXAA, InterfaceGlow } from '@/utils/webgl';

export const CreateInventoryBar = (app, player, resources) => {
  let inventory = new Container();
  inventory.position.set(player.x, player.y - 100);
  app.stage.addChild(inventory);

  let bar = new Graphics();
  bar.beginFill(0x66BD99);
  bar.drawRect(0, 0, 256, 64);
  bar.endFill();
  bar.filters = [InterfaceGlow()];
  inventory.addChild(bar);

  let i_primary_weapon = new Graphics();
  i_primary_weapon.drawRect(0, 0, 64, 64);
  i_primary_weapon.endFill();
  i_primary_weapon.filters = [FXAA()];
  i_primary_weapon.interactive = true;
  i_primary_weapon.buttonMode = true;
  inventory.addChild(i_primary_weapon);

  let s_primary_weapon = new Sprite(resources.item_unknown.texture);
  s_primary_weapon.width = 64;
  s_primary_weapon.height = 64;
  i_primary_weapon.addChild(s_primary_weapon);

  let i_second_weapon = new Graphics();
  i_second_weapon.drawRect(0, 0, 64, 64);
  i_second_weapon.endFill();
  i_second_weapon.filters = [FXAA()];
  i_second_weapon.x = 64;
  i_second_weapon.interactive = true;
  i_second_weapon.buttonMode = true;
  inventory.addChild(i_second_weapon);

  let s_second_weapon = new Sprite(resources.item_unknown.texture);
  s_second_weapon.width = 64;
  s_second_weapon.height = 64;
  i_second_weapon.addChild(s_second_weapon);

  let i_activate = new Graphics();
  i_activate.drawRect(0, 0, 64, 64);
  i_activate.endFill();
  i_activate.filters = [FXAA()];
  i_activate.x = 128;
  i_activate.interactive = true;
  i_activate.buttonMode = true;
  inventory.addChild(i_activate);

  let s_activate = new Sprite(resources.item_unknown.texture);
  s_activate.width = 64;
  s_activate.height = 64;
  i_activate.addChild(s_activate);

  let i_artefact = new Graphics();
  i_artefact.drawRect(0, 0, 64, 64);
  i_artefact.endFill();
  i_artefact.filters = [FXAA()];
  i_artefact.x = 192;
  i_artefact.interactive = true;
  i_artefact.buttonMode = true;
  inventory.addChild(i_artefact);

  let s_artefact = new Sprite(resources.item_unknown.texture);
  s_artefact.width = 64;
  s_artefact.height = 64;
  i_artefact.addChild(s_artefact);

  inventory.primary_weapon = i_primary_weapon;
  inventory.second_weapon = i_second_weapon;
  inventory.activate = i_activate;
  inventory.artefact = i_artefact;

  return inventory;
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

export const CreateInventoryMain = (app, player, resources) => {
  let main = new Container();
  main.position.set(player.x - player.width / 2, player.y - player.height / 2);
  app.stage.addChild(main);

  let bar = new Graphics();
  bar.beginFill(0x66BD99);
  bar.drawRect(0, 0, 512, 256);
  bar.endFill();
  bar.filters = [InterfaceGlow()];
  main.addChild(bar);

  return main;
}

export const RenderInventoryMain = (inventory, player, key) => {
  player.action.interactive_ui = true;
  inventory.position.set(player.x - player.width / 2, player.y - player.height / 2);
}