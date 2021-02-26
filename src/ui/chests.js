import { UIAlpha, InterfaceGlow, FXAA } from '@/utils/webgl';
import { KText, KContainer, KGraphics, KTileset } from './material';
import { getGenerateItem } from '@/generate/chest';
import { setPlayerSprite } from '@/generate/items';
import { OpacityContainerSwitch, OpacityContainerLeave } from '@/gsap/timeline';

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
      positional: { center: true }
    }
  );

  button.on('click', () => {
    const _item = getGenerateItem(player);

    const item_container = KGraphics(
      main,
      {
        fill: 0x66bd99,
        rectangle: [0, 0, 256, app.renderer.screen.height / 2],
        alpha: true
      },
      {
        x: 0,
        y: -(app.renderer.screen.height / 2)
      }
    );

    const item_container_center = KGraphics(item_container, {
      fill: _item.colorBackground,
      rectangle: [0, 0, 256, app.renderer.screen.height / 2],
      filters: [InterfaceGlow(_item.colorBackground)]
    });

    const item_container_title = KText(
      _item.title,
      item_container_center,
      {
        fontFamily: 'KitchenSink',
        fontSize: 22,
        fontWeight: 'bold'
      },
      {
        positional: {
          x: item_container_center.width / 2,
          y: item_container_center.height / 10
        }
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
        x: item_container_center.width / 2,
        y: item_container_center.height / 2
      },
      _item.sprite.path_emitter
    );

    let _description;
    let _type;
    if(_item.type === 'weapon') {
      if(_item.type_tags.includes('melee')) _type = 'Arma Corpo-A-Corpo'
      else if(_item.type_tags.includes('distance')) _type = 'Arma de Longa Distância'
      _description = `${_item.effects.damage.roll[0]}d${_item.effects.damage.roll[1]} + ${_item.effects.damage.bonus}`
    }

    if(_description) {
      const item_container_type = KText(
        _type,
        item_container_center,
        {
          fontFamily: 'KitchenSink',
          fontSize: 18,
        },
        {
          positional: {
            x: item_container_center.width / 2,
            y: item_container_center.height / 3 - 25
          }
        }
      );

      const item_container_description = KText(
        _description,
        item_container_center,
        {
          fontFamily: 'KitchenSink',
          fontSize: 18,
        },
        {
          positional: {
            x: item_container_center.width / 2,
            y: item_container_center.height / 3
          }
        }
      );
    }

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
        positional: {
          x: item_container_center.width / 2,
          y: item_container_center.height - 80
        }
      }
    );

    OpacityContainerSwitch(item_container, container, () => {
      container.visible = false;
    }).start();

    item_container_pick.on('click', () => {
      const new_item = setPlayerSprite(_item, resources);
      new_item.base = _item;

      if (_item.type_tags.includes('generic'))
        player.inventory.general.push(new_item);
      else {
        player.inventory[_item.type_inventory] = new_item;
        player.inventory['actually_item'] = new_item;
      }

      OpacityContainerLeave(item_container, () =>
        DeleteChestButton(item, item_container)
      ).start();
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
        positional: {
          x: item_container_center.width / 2,
          y: item_container_center.height - 40
        }
      }
    );
    item_container_discart.on('click', () => {
      OpacityContainerLeave(item_container, () =>
        DeleteChestButton(item, item_container)
      ).start();
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
