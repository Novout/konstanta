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
        ? (player.action.position.y = 'right')
        : (player.action.position.y = 'left');
    }
  );
};
