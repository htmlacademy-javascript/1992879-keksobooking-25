const getRandomInteger = (min, max) => {
  const lowerValue = Math.min(min,max);
  const upperValue = Math.max(min,max);
  const result = Math.random() * (upperValue - lowerValue + 1) + lowerValue;
  return Math.floor(result);
};

const getRandomFloatNumber = (min, max, fraction) => {
  const lowerValue = Math.min(min,max);
  const upperValue = Math.max(min,max);
  const result = Math.random() * (upperValue - lowerValue) + lowerValue;
  return parseFloat(result.toFixed(fraction));
};

const getRandomArrayElement = (array) => array[getRandomInteger(0, array.length - 1)];

const checkAvatarNumber = (number) => (number >= 10) ? number : `0${number}`;

export { getRandomInteger, getRandomFloatNumber, getRandomArrayElement, checkAvatarNumber };
