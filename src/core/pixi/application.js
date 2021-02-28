import { Application, Container } from '@/pixi/alias';
import * as Debugger from '@/debugger';

export const createContext = () => {
  const app = new Application({
    width: window.innerWidth,
    height: window.innerHeight,
    backgroundAlpha: 0,
    antialias: true,
    transparent: true,
    resolution: 1
  });

  if (!app) {
    Debugger.ThrowError('Application not created!');
  }

  const container = new Container();
  container.width = window.innerWidth;
  container.height = window.innerHeight;

  const stage = app?.stage;
  const renderer = app?.renderer;

  stage.addChild(container);
  document.body.appendChild(app.view);

  return [app, stage, renderer, container];
};