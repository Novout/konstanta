import { KContainer, KInteractiveButton } from './material';
import * as Debugger from '@/debugger';

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
    Debugger.Warning('vai demorar ate implementar isso aqui');
  });

  item.ui_store_entry = main;

  return main;
};
