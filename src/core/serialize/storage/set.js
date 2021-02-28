export const setStorage = (title, object) => {
  localStorage.setItem(`__KONSTANTA__${title}`, JSON.stringify(object));
};
