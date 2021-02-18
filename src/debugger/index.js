import { ticker } from '@/pixi/alias';
import { CreateUIDebugger } from '@/ui/debugger';

export const Warning = () => {};
export const Error = () => {};
export const Success = () => {};

export const Create = (stage, player) => {
  const ui = CreateUIDebugger(stage, player);
  return ui;
};

export const RenderFrameRate = (ui, player, renderer) => {
  ui.position.set(
    player.x + renderer.screen.width / 4,
    player.y - renderer.screen.height / 4
  );

  const _framerate = ticker.shared.FPS.toFixed(1);
  ui.framerate.text = `FPS: ${_framerate}`;
};
