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

const fillTemplate = (element, value) => {
  if (value) {
    element.textContent = value;
  } else {
    element.remove();
  }
};

const getTemplateNode = (templateTag, contentTag) => {
  const templateNode = document.querySelector(templateTag).content;
  const contentNode = templateNode.querySelector(contentTag);
  const clonedNode = contentNode.cloneNode(true);
  return clonedNode;
};

const checkNodeAvailable = (template, key) => template.querySelector(key);

const getTemplateNodesByMap = (template, elements) => {
  const nodes = {};
  for (const key in elements) {
    nodes[key] = checkNodeAvailable(template, elements[key]);
  }
  return nodes;
};

export {
  getRandomInteger,
  getRandomFloatNumber,
  getRandomArrayElement,
  checkAvatarNumber,
  fillTemplate,
  getTemplateNode,
  checkNodeAvailable,
  getTemplateNodesByMap
};
