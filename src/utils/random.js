export const getItemPercentage = (item, value = 100) => {
  return Math.random() * (value + 1) <= item;
};

export const getChancePercentage = (item, value = 100) => {
  return Math.random() * (value + 1) >= item;
};

export const getPercentage = (value = 100) => {
  return Math.random() * (value + 1);
};

export const getDice = (dice = 20) => {
  return Math.floor(Math.random() * dice + 1);
};
