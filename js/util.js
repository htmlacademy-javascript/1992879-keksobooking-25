import { KEY_ESCAPE } from '../js/constants.js';

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

const setDisabledElements = (elements, isDisabled) => {
  elements.forEach((element) => {
    element.disabled = isDisabled;
  });
};

const isEscapeKey = (event) => event.key === KEY_ESCAPE;

const debounce = (callback, timeout) => {
  let timeoutId;
  return (...rest) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => callback.apply(this, rest), timeout);
  };
};


export {
  fillTemplate,
  getTemplateNode,
  checkNodeAvailable,
  getTemplateNodesByMap,
  setDisabledElements,
  isEscapeKey,
  debounce
};
