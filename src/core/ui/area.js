import { goToNewArea } from '../../game/manager/area';
import { KContainer, KInteractiveButton } from './material';

export const CreateAreaButton = (app, stage, player, context, options) => {
  const main = KContainer(stage, {
    x: player.x - player.width / 2,
    y: player.y - player.height / 2,
    invisible: true
  });

  const [container, button] = KInteractiveButton('Nova Area', main);
  button.on('click', () => {
    if (player.y >= (options.size - 2) * options.node_size) {
      Promise.resolve(
        goToNewArea(
          [context.chunk[0] + 1, context.chunk[1]],
          app,
          { player },
          context
        )
      );
    } else {
      Promise.resolve(
        goToNewArea(
          [context.chunk[0], context.chunk[1] + 1],
          app,
          { player },
          context
        )
      );
    }
  });

  return main;
};
