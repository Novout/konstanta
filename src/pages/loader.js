import './utils.css';

export const useLoader = () => {
  const LoaderLoad = (content) => {
    const _container = document.getElementById('__LOADER_TEXT');

    if(_container) {
      const _text = document.getElementById('__LOADER_TEXT');
      _text.textContent = `${content.progress}%`;

      const _bar = document.getElementById('__LOADER_BAR_CONTENT');
      _bar.style.width = `${content.progress}%`;
    } else {
      const background = document.createElement('div');
      background.id = "__LOADER_FOG";
      background.style.zIndex = "8000";
      background.classList.add('fog');

      const container = document.createElement('div');
      container.id = "__LOADER";
      container.style.zIndex = "9999";
      container.classList.add('container');

      const title = document.createElement('h1');
      title.id = "__LOADER_TITLE";
      title.textContent = "Carregando...";

      const percentage = document.createElement('p');
      percentage.id = "__LOADER_TEXT";
      percentage.textContent = `${content.progress}%`;

      const bar = document.createElement('div');
      bar.id = "__LOADER_BAR";
      bar.style.width = "80%";
      bar.style.height = "1.5rem";
      bar.style.border = "1px solid";
      bar.style.borderColor = "black";
      
      const _bar = document.createElement('div');
      _bar.id = "__LOADER_BAR_CONTENT";
      _bar.style.width = `${content.progress}%`;
      _bar.style.height = "1.5rem";
      _bar.style.backgroundColor = "#66bd99";

      bar.appendChild(_bar);

      container.appendChild(title);
      container.appendChild(percentage);
      container.appendChild(bar);

      document.body.appendChild(container);
      document.body.appendChild(background);
    }
  }

  const LoaderComplete = () => {
    document.getElementById('__LOADER')?.remove();
    document.getElementById('__LOADER_FOG')?.remove();
  }

  return [LoaderLoad, LoaderComplete];
}