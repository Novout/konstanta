import { generateStore } from '../generate/forest';
import { setBackground } from '../utils/dom';
import { KContainer, KInteractiveButton } from './material';

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

    const [_container, _button] = KInteractiveButton('Sair', scene);
    _container.x = scene.x + scene.width / 5;
    _container.y = scene.y + scene.height / 1.5;

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
