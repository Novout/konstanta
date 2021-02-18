import { ticker } from '@/pixi/alias';

export const Warning = () => {}
export const Error = () => {}
export const Success = () => {}

export const RenderFrameRate = () => {
  console.log(ticker.shared.FPS);
}
