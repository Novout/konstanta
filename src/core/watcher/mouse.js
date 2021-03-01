import Mouse from "pixi.js-mouse";
import { isInitialMap } from '@/utils/context';

export const PlayerMouseWatcher = (app, player, context) => {
  Mouse.events.on(
    'pressed',
    null,
    (
      buttonCode,
      event,
      mouseX,
      mouseY,
      mouseOriginX,
      mouseOriginY,
      mouseMoveX,
      mouseMoveY
    ) => {
      mouseX >= app.renderer.screen.width / 2
        ? (player.action.position.x = 'right')
        : (player.action.position.x = 'left');
      mouseY >= app.renderer.screen.height / 2
        ? (player.action.position.y = 'down')
        : (player.action.position.y = 'up');
    }
  );
};

export const WindowScrollWatcher = (stage, context) => {
  const listener = (event) => { 
    if(event.wheelDelta >= 0) {
      if(stage.scale.x >= 1.6 || stage.scale.y >= 1.6) return;
      stage.scale.x += 0.1
      stage.scale.y += 0.1
    } else {
      if(stage.scale.x <= 0.85 || stage.scale.y <= 0.85) return;
      stage.scale.x -= 0.1
      stage.scale.y -= 0.1
    }
  }

  if(!isInitialMap(context)) {
    window.document.removeEventListener('mousewheel', listener, false)
  }

  window.document.addEventListener('mousewheel', listener, false)
}
