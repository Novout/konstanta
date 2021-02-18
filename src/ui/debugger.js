import { KContainer, KText } from './material';

export const CreateUIDebugger = (stage, player) => {
  const context = KContainer(stage, { x: player.x, y: player.y + 200 });
  const _framerate = KText(
    0,
    context,
    { fontFamily: 'KitchenSink', fontSize: 24, fill: 0xffffff },
  );

  context.framerate = _framerate;

  return context;
}
