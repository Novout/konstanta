import { Sprite } from '@/pixi/alias';
import { UIAlpha, InterfaceGlow, FXAA } from '@/utils/webgl';
import { KText, KContainer, KGraphics } from './material';
import { getAltarChoices } from '@/generate/altar';
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

  button.on('click', () => {});

  main.visible = false;

  item.ui_chest = main;

  return main;
};

export const DeleteAltarButton = (item, main) => {
  item.visible = false;
  main.visible = false;
  //main.destroy(true);
};
