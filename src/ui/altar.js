import { Sprite } from '@/pixi/alias';
import { UIAlpha, InterfaceGlow, FXAA } from '@/utils/webgl';
import { KText, KContainer, KGraphics, KImage } from './material';

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
      fontFamily: 'Poppins',
      fontSize: 36,
      fontWeight: 'bold'
    },
    {
      button: true,
      filters: [FXAA()],
      positional: { x: main.width / 11, y: main.height / 10 }
    }
  );

  button.on('click', () => {
    choice_skills.visible = true;
    const arr = [
      {
        id: 'resilience',
        id_cont: 0,
        id_type: 'altar_resilience',
        title: 'Test 1',
        description: 'Test',
        x: 36
      },
      {
        id: 'resilience',
        id_cont: 1,
        id_type: 'altar_resilience',
        title: 'Test 2',
        description: 'Test',
        x: 222
      },
      {
        id: 'resilience',
        id_cont: 2,
        id_type: 'altar_resilience',
        title: 'Test 3',
        description: 'Testttt\ntttttttttt\nttttttttttttt\nttttttttttt',
        x: 412
      }
    ];

    arr.forEach((item) => {
      main.y = main.y - 200;

      const item_container = KGraphics(choice_skills, {
        fake: true,
        rectangle: [0, 0, 128, 256]
      });
      item_container.x = item_container.x + item.x;

      const item_sprite = new Sprite(resources.item_unknown.texture);
      item_sprite.width = 64;
      item_sprite.height = 64;
      item_sprite.y = item_sprite.y + 8;
      item_container.addChild(item_sprite);

      const item_title = KText(
        item.title,
        item_container,
        { fontFamily: 'Poppins', fontSize: 24, fontWeight: 'bold' },
        { positional: { y: item_sprite.height + 8, absolute: true } }
      );

      const item_description = KText(
        item.description,
        item_container,
        { fontFamily: 'Poppins', fontSize: 16 },
        { positional: { y: item_title.y + 40, absolute: true } }
      );

      const item_button_text = KText(
        'Escolher',
        item_container,
        {
          fontFamily: 'Poppins',
          fontSize: 18,
          fontWeight: 'bold'
        },
        {
          button: true,
          positional: {
            y: choice_skills.height - 30,
            absolute: true
          }
        }
      );
      item_button_text.on('click', () => {
        DeleteAltarButton(choice_skills, main);
      });
    });

    main.choice_skills = true;
    container.visible = false;
  });
  main.visible = false;

  const choice_skills = KGraphics(main, {
    fake: true,
    rectangle: [0, 0, 512, 512]
  });
  choice_skills.visible = false;

  const item_container = KGraphics(choice_skills, {
    fake: true,
    rectangle: [0, 0, 128, 256]
  });

  const choice_skills_fake = KGraphics(choice_skills, {
    fill: 0x66bd99,
    rectangle: [0, 0, 512, 512],
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
