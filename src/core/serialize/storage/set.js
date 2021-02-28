export const setStorage = (title, object) => {
  localStorage.setItem(title, JSON.stringify(object));
};
