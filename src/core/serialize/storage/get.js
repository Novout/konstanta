export const getStorage = (title) => {
  return JSON.parse(localStorage.getItem(`__KONSTANTA__${title}`));
};
