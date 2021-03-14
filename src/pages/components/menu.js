import { NewGame } from '-/game/newgame/create';
import pkg from '../../../package.json';
import './menu.css';

export const MenuOptions = (unmounted) => {
  const _main = document.querySelector('#base');
  const container = document.createElement('div');

  const title = document.createElement('h1');
  title.textContent = pkg.description;
  title.style.marginBottom = '5rem';
  title.style.color = 'white';

  container.classList.add('flex');
  container.style.flexFlow = 'column wrap';
  container.style.alignItems = 'center';
  container.style.zIndex = '10';
  container.style.backgroundColor = 'none';
  container.style.position = 'absolute';
  container.style.left = '50%';
  container.style.top = '50%';
  container.style.transform = 'translate(-50%, -50%)';

  const start = document.createElement('button');
  start.textContent = 'Iniciar Jogo';
  start.style.padding = '1rem 2rem';
  start.style.marginBottom = '1rem';
  start.style.border = '2px solid white';
  start.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  start.style.color = 'white';
  start.style.borderRadius = '0.5rem';
  start.style.cursor = 'pointer';
  start.style.fontSize = '1.1rem';
  start.style.width = '15rem';
  start.addEventListener('click', () => {
    unmounted();
    NewGame();
  });

  const save = document.createElement('button');
  save.textContent = 'Carregar Jogo';
  save.style.padding = '1rem 2rem';
  save.style.border = '2px solid white';
  save.style.backgroundColor = 'rgba(255, 255, 255, 0)';
  save.style.color = 'white';
  save.style.borderRadius = '0.5rem';
  save.style.cursor = 'pointer';
  save.style.fontSize = '1.1rem';
  save.style.width = '15rem';
  save.addEventListener('click', () => {});

  container.appendChild(title);
  container.appendChild(start);
  container.appendChild(save);
  _main?.appendChild(container);
};

export const MenuPackage = () => {
  const _main = document.querySelector('#base');

  const container = document.createElement('div');
  container.style.position = 'absolute';
  container.style.right = '10%';
  container.style.bottom = '25vh';
  container.style.color = 'white';
  container.style.fontSize = '0.7rem';
  container.style.fontFamily = 'Poppins';

  const author = document.createElement('p');
  author.textContent = `Author ${pkg.author}`;
  author.style.marginBottom = '0.3rem';

  const version = document.createElement('p');
  version.textContent = `Konstanta ${pkg.version}`;
  version.style.marginBottom = '0.3rem';

  const pixi = document.createElement('p');
  pixi.textContent = `PIXI ${pkg.dependencies['pixi.js']}`;
  pixi.style.marginBottom = '0.3rem';

  const license = document.createElement('p');
  license.textContent = `License ${pkg.license}`;

  container.appendChild(author);
  container.appendChild(version);
  container.appendChild(pixi);
  container.appendChild(license);
  _main?.appendChild(container);
};
