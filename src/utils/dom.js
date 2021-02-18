export const setBackground = (bg) => {
  const body = window.document.body;
  body.style.background = `#ffffff url('./src/assets/background/${bg}.png') no-repeat`;
  body.style.backgroundSize = '100% 100%';
};
