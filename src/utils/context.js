export const CameraInitialFixed = (stage, renderer) => {
  stage.position.set(renderer.screen.width / 2, renderer.screen.height / 2);
};

export const CameraFixed = (stage, player) => {
  stage.pivot.set(player.x + 120, player.y + 120);
};

export const FullContextSize = (renderer, stage) => {
  window.addEventListener('resize', () => {
    renderer.resize(window.innerWidth, window.innerHeight);
    stage.position.set(renderer.screen.width / 2, renderer.screen.height / 2);
  });

  window.addEventListener('contextmenu', (event) => {
    event.preventDefault();
    event.stopPropagation();
  });
};
