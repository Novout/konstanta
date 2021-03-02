export const CameraInitialFixed = (stage, renderer) => {
  stage.position.set(renderer.screen.width / 2, renderer.screen.height / 2);
};

export const CameraFixed = (stage, player) => {
  stage.pivot.set(player.x + 80, player.y + 80);
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

export const isInitialMap = (context) => {
  return context.chunk[0] === 1 && context.chunk[1] === 1;
};
