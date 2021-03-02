import Controller from 'pixi.js-controller';

const PlayerIsRun = (player, player_base) => {
  if (player.texture_actually !== 'run') {
    player.textures = player_base.texture.run;
    player.texture_actually = 'run';
    if (!player.playing) player.play();
  }
};

const PlayerIsStop = (player, player_base) => {
  if (player.texture_actually !== 'stand') {
    player.textures = player_base.texture.stand;
  }
  player.texture_actually = 'stand';
  if (!player.playing) player.play();
};

export const PlayerKeyboardListener = (delta, player, player_base, options) => {
  if (Controller.Mouse.isButtonDown(Controller.Mouse.Button.LEFT)) return;

  if (Controller.Mouse.isButtonDown(Controller.Mouse.Button.RIGHT)) {
    if (!player.action.position.area) {
      PlayerIsStop(player, player_base);
      return;
    }
  }

  if (
    (Controller.Keyboard.isKeyDown('ArrowLeft', 'KeyA') &&
      Controller.Keyboard.isKeyDown('ArrowRight', 'KeyD')) ||
    (Controller.Keyboard.isKeyDown('ArrowUp', 'KeyW') &&
      Controller.Keyboard.isKeyDown('ArrowDown', 'KeyS'))
  ) {
    PlayerIsStop(player, player_base);
    player.texture_actually = 'stand';
    if (!player.playing) player.play();
    return;
  }

  let stop = true;

  if (Controller.Keyboard.isKeyDown('ArrowLeft', 'KeyA')) {
    stop = false;
    player.anchor.x = 0.75;
    player.scale.x = -2.5;
    PlayerIsRun(player, player_base);
    if (player.x <= 0) return;
    player.x -= player.vx * delta;
  }

  if (Controller.Keyboard.isKeyDown('ArrowRight', 'KeyD')) {
    stop = false;
    player.anchor.x = 0;
    player.scale.x = 2.5;
    PlayerIsRun(player, player_base);
    if (player.x >= (options.size - 1) * options.node_size) return;
    player.x += player.vx * delta;
  }

  if (Controller.Keyboard.isKeyDown('ArrowUp', 'KeyW')) {
    stop = false;
    PlayerIsRun(player, player_base);
    if (player.y <= 0) return;
    player.y -= player.vy * delta;
  }

  if (Controller.Keyboard.isKeyDown('ArrowDown', 'KeyS')) {
    stop = false;
    PlayerIsRun(player, player_base);
    if (player.y >= (options.size - 1) * options.node_size) return;
    player.y += player.vy * delta;
  }

  if (stop) {
    PlayerIsStop(player, player_base);
  }
};
