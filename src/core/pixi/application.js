import { Application, Container, utils } from '@/pixi/alias';
import { isInitialMap } from '@/utils/context';
import { clearListener } from '-/game/newgame/remove';
import * as Debugger from '@/debugger';

export const createMap = (context) => {
  utils.skipHello();

  const app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundAlpha: 0,
    antialias: true,
    resolution: 1
  });

  if (!app) {
    Debugger.ThrowError('Application not created!');
  }

  const container = new Container();
  container.width = window.innerWidth;
  container.height = window.innerHeight;
  container.id_context = context.id;

  const stage = app?.stage;
  const renderer = app?.renderer;

  stage.addChild(container);
  document.body.appendChild(app.view);

  if (!isInitialMap(context)) {
    clearListener();
  }

  return [app, stage, renderer, container];
};
