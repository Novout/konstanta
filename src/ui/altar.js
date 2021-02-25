import { Sprite } from '@/pixi/alias';
import { UIAlpha, InterfaceGlow, FXAA } from '@/utils/webgl';
import { KText, KContainer, KGraphics } from './material';
import { getAltarChoices } from '@/generate/altar';
import { setPlayerSkill } from '@/interceptor/player';
import {
  FloatingItem,
  OpacityContainerLeave,
  OpacityContainerSwitch
} from '@/gsap/timeline';

export const CreateAltarButton = (app, player, item, resources) => {
  const main = KContainer(
    app.stage,
    { x: player.x - player.width / 2, y: player.y - player.height / 2 },
    [['id_parent', item.id]]
  );

  const container = KGraphics(main, {
    fill: 0x66bd99,
    rectangle: [0, 0, 256, 64],
    filters: [UIAlpha().alpha_main]
  });

  const button = KText(
    'Ativar Altar',
    container,
    {
      fontFamily: 'KitchenSink',
      fontSize: 24,
      fontWeight: 'bold'
    },
    {
      button: true,
      filters: [FXAA()],
      positional: {
        center: true
      }
    }
  );

  button.on('click', () => {
    const skills = getAltarChoices(player);

    skills.forEach((item) => {
      const item_container = KGraphics(choice_skills, {
        fill: item.background,
        rectangle: [0, 0, 233, 350],
        filters: [InterfaceGlow(item.background)]
      });
      item_container.x = item_container.x + item.x;

      const item_sprite = new Sprite(resources[item.sprite.path].texture);
      item_sprite.width = 64;
      item_sprite.height = 64;
      item_sprite.y = item_sprite.y + 8;
      item_sprite.x = item_sprite.x + item_container.width / 3;
      item_container.addChild(item_sprite);

      const item_title = KText(
        item.title,
        item_container,
        { fontFamily: 'KitchenSink', fontSize: 20, fontWeight: 'bold' },
        { positional: { y: item_sprite.height + 36, x: item_container.width / 2, absolute: true } }
      );

      const item_description = KText(
        item.description,
        item_container,
        { fontFamily: 'KitchenSink', fontSize: 16 },
        {
          positional: {
            x: item_container.width / 2,
            y: item_title.y + item_container.height / 3,
            absolute: true
          }
        }
      );

      const item_button_text = KText(
        'Escolher',
        item_container,
        {
          fontFamily: 'KitchenSink',
          fontSize: 18,
          fontWeight: 'bold'
        },
        {
          button: true,
          positional: {
            x: item_container.width / 2,
            y: choice_skills.height - 60,
            absolute: true
          }
        }
      );

      const floating = FloatingItem(item_container);
      floating.start();
      
      item_button_text.on('click', () => {
        floating.pause();
        setPlayerSkill(item, player);
        OpacityContainerLeave(choice_skills, () =>
          DeleteAltarButton(choice_skills, main)
        ).start();
      });
    });

    OpacityContainerSwitch(
      choice_skills,
      container,
      () => {},
      () => {
        choice_skills.visible = true;
        container.visible = false;
        main.choice_skills = true;
      }
    ).start();
  });
  main.visible = false;

  const choice_skills = KGraphics(main, {
    fake: true,
    rectangle: [0, 0, 800, 370]
  }, {
    x: 0,
    y: 0,
    center: true
  });
  choice_skills.visible = false;
  choice_skills.alpha = 0;

  const item_container = KGraphics(choice_skills, {
    fake: true,
    rectangle: [0, 0, 128, 256]
  });

  const choice_skills_fake = KGraphics(choice_skills, {
    fill: 0x66bd99,
    rectangle: [0, 0, 800, 370],
    filters: [InterfaceGlow(), UIAlpha().alpha_bar]
  });

  item.choice_skills = choice_skills;
  item.ui_altar = main;

  return main;
};

export const DeleteAltarButton = (item, main) => {
  item.visible = false;
  main.visible = false;
  //main.destroy(true);
};
