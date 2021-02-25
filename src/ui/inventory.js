import { Sprite, Rectangle, Texture, resources } from '@/pixi/alias';
import { FXAA, InterfaceGlow } from '@/utils/webgl';
import { KContainer, KGraphics, KScrollBox, KTileset } from './material';
import { UnknownInventorySprite } from '@/rig/items';

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
  i_primary_weapon.addChild(player.inventory.primary_weapon);

  const i_second_weapon = KGraphics(inventory, {
    fake: true,
    button: true,
    rectangle: [0, 0, 64, 64],
    filters: [FXAA()]
  });
  i_second_weapon.x = 64;

  let s_second_weapon = UnknownInventorySprite(resources);
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

  let s_activate = UnknownInventorySprite(resources);
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

  let s_artefact = UnknownInventorySprite(resources);
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
  const _x_set = 80;
  const _y_set = 80;

  const main = KScrollBox(
    app.stage,
    {
      x: 0,
      y: 0
    },
    {
      width: _x_set * 5,
      height: _y_set * 3
    },
    {
      filters: [InterfaceGlow(0x75513c)],
      scrollableY: true
    }
  );

  const item_container = KGraphics(
    main.content,
    {
      fill: 0x75513c,
      rectangle: [0, 0, _x_set * 5, _y_set * 3]
    },
    {
      x: 0,
      y: 0
    }
  );

  let _x = 0;
  let _y = 0;
  player.inventory.general?.forEach((item) => {
    const item_sprite = KTileset(
      item_container,
      item,
      resources,
      {
        width: _x_set,
        height: _y_set
      },
      {
        x: _x_set * _x,
        y: _y_set * _y,
        anchor: true
      },
      item.sprite.path_inventory_main
    );

    // fuck this logic
    _x++;
    if (_x > 4) {
      _x = 0;
      _y++;
    }
  });

  return main;
};

export const RenderInventoryMain = (ui, player) => {
  player.action.interactive_inventory ? player.action.interactive_ui = true : player.action.interactive_ui = false;
  ui.inventory_main.position.set(
    player.x - player.width / 2,
    player.y
  );
};
