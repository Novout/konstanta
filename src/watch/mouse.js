import Mouse from 'pixi.js-mouse';

export const PlayerMouseWatcher = (app, player) => {
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

export const WindowScrollWatcher = (app) => {
  window.document.addEventListener('mousewheel', (event) => { 
    if(event.wheelDelta >= 0) {
      if(app.stage.scale.x >= 1.6 || app.stage.scale.y >= 1.6) return;
      app.stage.scale.x += 0.1
      app.stage.scale.y += 0.1
    } else {
      if(app.stage.scale.x <= 0.8 || app.stage.scale.y <= 0.8) return;
      app.stage.scale.x -= 0.1
      app.stage.scale.y -= 0.1
    }
  }, false);
}
