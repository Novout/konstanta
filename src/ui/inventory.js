import { Sprite, resources } from '@/pixi/alias';
import { FXAA, InterfaceGlow } from '@/utils/webgl';
import { KContainer, KGraphics } from './material';

export const CreateInventoryBar = (app, player, resources) => {
  const inventory = KContainer(app.stage, { x: player.x, y: player.y - 100 });
  const container = KGraphics(inventory, {
    fill: 0x66bd99,
    rectangle: [0, 0, 256, 64],
    filters: [InterfaceGlow()]
  });

  const i_primary_weapon = KGraphics(inventory, {
    fake: true,
    button: true,
    rectangle: [0, 0, 64, 64],
    filters: [FXAA()]
  });

  let s_primary_weapon = new Sprite(resources.item_unknown.texture);
  s_primary_weapon.width = 64;
  s_primary_weapon.height = 64;
  i_primary_weapon.addChild(s_primary_weapon);

  const i_second_weapon = KGraphics(inventory, {
    fake: true,
    button: true,
    rectangle: [0, 0, 64, 64],
    filters: [FXAA()]
  });
  i_second_weapon.x = 64;

  let s_second_weapon = new Sprite(resources.item_unknown.texture);
  s_second_weapon.width = 64;
  s_second_weapon.height = 64;
  i_second_weapon.addChild(s_second_weapon);

  const i_activate = KGraphics(inventory, {
    fake: true,
    button: true,
    rectangle: [0, 0, 64, 64],
    filters: [FXAA()]
  });
  i_activate.x = 128;

  let s_activate = new Sprite(resources.item_unknown.texture);
  s_activate.width = 64;
  s_activate.height = 64;
  i_activate.addChild(s_activate);

  const i_artefact = KGraphics(inventory, {
    fake: true,
    button: true,
    rectangle: [0, 0, 64, 64],
    filters: [FXAA()]
  });
  i_artefact.x = 192;

  let s_artefact = new Sprite(resources.item_unknown.texture);
  s_artefact.width = 64;
  s_artefact.height = 64;
  i_artefact.addChild(s_artefact);

  inventory.primary_weapon = i_primary_weapon;
  inventory.second_weapon = i_second_weapon;
  inventory.activate = i_activate;
  inventory.artefact = i_artefact;

  return inventory;
};

export const RenderInventoryBar = (inventory, player, key) => {
  inventory.position.set(player.x - 60, player.y - 100);

  if (key === 'Digit1') {
    player.inventory.actually_weapon = inventory
      ?.getChildByName('i_primary_weapon')
      ?.getChildByName('s_primary_weapon');
  } else if (key === 'Digit2') {
    player.inventory.actually_weapon = inventory
      ?.getChildByName('i_second_weapon')
      ?.getChildByName('s_second_weapon');
  } else if (key === 'Digit3') {
    player.inventory.actually_weapon = inventory
      ?.getChildByName('i_activate')
      ?.getChildByName('s_activate');
  } else if (key === 'Digit4') {
    player.inventory.actually_weapon = inventory
      ?.getChildByName('i_artefact')
      ?.getChildByName('s_artefact');
  }
};

export const removeInventoryItem = (inventory, player) => {
  inventory.position.set(player.x - 75, player.y - 100);
  const actually_weapon = inventory.getChildByName('i_primary_weapon');

  if (player.inventory.primary_weapon !== actually_weapon) {
    const new_item = new Sprite(resources[actually_weapon].texture);
    new_item.width = 20;
    new_item.height = 20;

    actually_weapon.removeChil(actually_weapon);
    actually_weapon.addChild(new_item);
  }
};

const addInventoryItem = (inventory, player, app) => {};

export const CreateInventoryMain = (app, player, resources) => {
  const main = KContainer(app.stage, {
    x: player.x - player.width / 2,
    y: player.y - player.height / 2
  });

  const container = KGraphics(main, {
    fill: 0x66bd99,
    rectangle: [0, 0, 512, 256],
    filters: [InterfaceGlow()]
  });

  return main;
};

export const RenderInventoryMain = (inventory, player, key) => {
  player.action.interactive_ui = true;
  inventory.position.set(
    player.x - player.width / 2,
    player.y - player.height / 2
  );
};
