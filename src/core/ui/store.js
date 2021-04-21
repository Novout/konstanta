import { generateStore } from '@/generate/forest';
import { setBackground } from '@/utils/dom';
import { UIAlpha } from '@/utils/webgl';
import { KContainer, KGraphics, KInteractiveButton } from './material';

export const CreateStoreButton = (app, stage, player, item, resources) => {
  const main = KContainer(
    stage,
    {
      x: player.x - player.width / 2,
      y: player.y - player.height / 1.5
    },
    [['id_parent', item.id]]
  );

  const [container, button] = KInteractiveButton('Entrar na Loja', main);
  button.on('click', () => {
    stage.visible = false;
    container.visible = false;

    const scene = KContainer(app.stage, { x: 0, y: 0 });

    generateStore(scene, resources);

    const { alpha_item } = UIAlpha();

    const store = KGraphics(scene, {
      fill: 0xFFFFFF,
      rectangle: [app.renderer.screen.width / 4, app.renderer.screen.height / 4, app.renderer.screen.width / 2, app.renderer.screen.height / 2],
      filters: [alpha_item]
    });

    const [_container, _button] = KInteractiveButton('Sair', store, { removeAlpha: true });
    _container.x = store.width - _container.width;
    _container.y = store.height - _container.height;

    _button.on('click', () => {
      scene.visible = false; 
      stage.visible = true;
      container.visible = true;
      setBackground('forest');
    });
  });

  item.ui_store_entry = main;

  return main;
};
