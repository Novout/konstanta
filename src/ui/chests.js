import { Sprite } from '@/pixi/alias';
import { UIAlpha, InterfaceGlow, FXAA } from '@/utils/webgl';
import { KText, KContainer, KGraphics, KTileset } from './material';
import { getAltarChoices } from '@/generate/altar';
import { getGenerateItem } from '@/generate/chest';
import { setPlayerSprite } from '@/generate/items';
import { setPlayerSkill } from '@/interceptor/player';

export const CreateChestButton = (app, player, item, resources) => {
  const main = KContainer(
    app.stage,
    { x: player.x - player.width / 2, y: player.y - player.height / 1.5 },
    [['id_parent', item.id]]
  );

  const container = KGraphics(main, {
    fill: 0x66bd99,
    rectangle: [0, 0, 256, 64],
    filters: [UIAlpha().alpha_main]
  });

  const button = KText(
    'Abrir Bau',
    container,
    {
      fontFamily: 'KitchenSink',
      fontSize: 24,
      fontWeight: 'bold'
    },
    {
      button: true,
      filters: [FXAA()],
      positional: { x: main.width / 11, y: main.height / 4 }
    }
  );

  button.on('click', () => {
    container.visible = false;
    const _item = getGenerateItem(player);

    const item_container = KGraphics(main, {
      fill: 0x66bd99,
      rectangle: [0, 0, 256, app.renderer.screen.height / 3],
    }, {
      x: 0,
      y: -(app.renderer.screen.height / 2)
    })

    const item_container_center = KGraphics(item_container, {
      fill: _item.colorBackground,
      rectangle: [0, 0, 256, app.renderer.screen.height / 3],
      filters: [InterfaceGlow(_item.colorBackground)]
    })

    const item_container_title = KText(
      _item.title,
      item_container_center,
      {
        fontFamily: 'KitchenSink',
        fontSize: 22,
        fontWeight: 'bold'
      },
      {
        positional: { x: 0, y: item_container_center.height / 10 }
      }
    );

    const item_container_sprite = KTileset(
      item_container_center,
      _item,
      resources,
      {
        width: app.renderer.screen.height / 10,
        height: app.renderer.screen.height / 10
      },
      {
        x: item_container_center.width / 3.5,
        y: item_container_center.height / 4
      }
    );

    const item_container_pick = KText(
      'Pegar Item',
      item_container_center,
      {
        fontFamily: 'KitchenSink',
        fontSize: 20,
        fontWeight: 'bold'
      },
      {
        button: true,
        filters: [FXAA()],
        positional: { x: item_container_center.width / 10, y: item_container_center.height - 80 }
      }
    );
    item_container_pick.on('click', () => {
      player.inventory[_item.type_inventory] = setPlayerSprite(_item, resources);
      player.inventory[_item.type_inventory].base = _item;
      player.inventory['actually_item'] = player.inventory[_item.type_inventory];
      DeleteChestButton(item, item_container);
    });

    const item_container_discart = KText(
      'Recusar Item',
      item_container_center,
      {
        fontFamily: 'KitchenSink',
        fontSize: 20,
        fontWeight: 'bold'
      },
      {
        button: true,
        filters: [FXAA()],
        positional: { x: item_container_center.width / 10, y: item_container_center.height - 40 }
      }
    );
    item_container_discart.on('click', () => {
      DeleteChestButton(item, item_container);
    });
  });

  main.visible = false;

  item.ui_chest = main;
  item.ui_chest_button = container;

  return main;
};

export const DeleteChestButton = (item, main) => {
  item.visible = false;
  main.visible = false;
  //main.destroy(true);
};
