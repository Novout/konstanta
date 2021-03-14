export const setBackground = (bg) => {
  const body = window.document.body;
  body.style.background = `#ffffff url('./assets/background/${bg}.png') no-repeat`;
  body.style.backgroundSize = '100% 100%';
};
