import { NewGame } from '-/game/newgame/create';

export const MenuOptions = (unmounted) => {
  const _main = document.querySelector('#base');
  const container = document.createElement('div');

  container.style.flex = '1';
  container.style.flexDirection = 'column';
  container.style.justifyContent = 'center';
  container.style.alignItems = 'center';
  container.style.zIndex = '10';
  container.style.backgroundColor = 'red';
  container.style.position = 'absolute';
  container.style.left = '50%';
  container.style.top = '50%';
  container.style.transform = 'translate(-50%, -50%)';

  const start = document.createElement('button');
  start.textContent = 'Iniciar Jogo';
  start.addEventListener('click', () => {
    unmounted();
    NewGame();
  });

  container.appendChild(start);
  _main?.appendChild(container);
};
