import { KContainer, KInteractiveButton } from './material';
import * as Debugger from '@/debugger';

export const CreateStoreButton = (stage, player, item, resources) => {
  const main = KContainer(
    stage,
    {
      x: player.x - player.width / 2,
      y: player.y - player.height / 1.5
    },
    [['id_parent', item.id]]
  );

  const [_, button] = KInteractiveButton('Entrar na Loja', main);
  button.on('click', () => {
    Debugger.Warning('vai demorar ate implementar isso aqui');
  });

  item.ui_store = main;

  return main;
};
