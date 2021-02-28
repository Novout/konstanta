export const getStorage = (title) => {
  return JSON.parse(localStorage.getItem(title));
};
