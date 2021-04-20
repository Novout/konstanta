import './utils.css';

export const useLoader = () => {
  const LoaderLoad = (content) => {
    const _container = document.getElementById('__LOADER_TEXT');

    if(_container) {
      const _text = document.getElementById('__LOADER_TEXT');
      _text.textContent = `${content.progress}%`;
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

      container.appendChild(title);
      container.appendChild(percentage);

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