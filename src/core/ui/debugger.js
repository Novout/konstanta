import { KContainer, KText } from './material';

export const CreateUIDebugger = (stage, player) => {
  const context = KContainer(stage, { x: player.x, y: player.y + 200 });
  const _framerate = KText(0.0, context, {
    fontFamily: 'KitchenSink',
    fontSize: 14,
    fill: 0xffffff
  });

  const _delta = KText(0.0, context, {
    fontFamily: 'KitchenSink',
    fontSize: 14,
    fill: 0xffffff
  });

  context.framerate = _framerate;
  context.deltatime = _delta;

  return context;
};
