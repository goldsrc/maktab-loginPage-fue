function createTextElement(text) {
  return {
    type: 'TEXT_ELEMENT',
    props: {
      nodeValue: text,
      children: [],
    },
  };
}

function createElement(type, props, ...children) {
  const fixedProps = props || {};
  return {
    type,
    props: {
      ...fixedProps,
      children: children.map(child =>
        typeof child === 'object' ? child : createTextElement(child)
      ),
    },
  };
}

function render(element, container) {
  const dom =
    element.type === 'TEXT_ELEMENT'
      ? document.createTextNode('')
      : document.createElement(element.type);

  const isProperty = key => key !== 'children';
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      if (typeof dom[name] === 'undefined')
        dom.setAttribute(name, element.props[name]);
      if (typeof element.props[name] === 'object') {
        Object.assign(dom[name], element.props[name]);
      } else {
        dom[name] = element.props[name];
      }
    });

  element.props.children.forEach(child => render(child, dom));

  container.appendChild(dom);
}

export default {
  createElement,
  render,
};
