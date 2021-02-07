export const CameraInitialFixed = (stage, renderer) => {
  stage.position.set(renderer.screen.width/2, renderer.screen.height/2);
}

export const CameraFixed = (stage, player) => {
  stage.pivot.set(player.x, player.y);
}

export const FullContextSize = (renderer) => {
  window.addEventListener('resize', () => {
    renderer.resize(window.innerWidth, window.innerHeight);
  });
}