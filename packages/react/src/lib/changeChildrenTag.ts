import { createElement } from 'react';

export function changeChildrenTag(tag: any, component: any, props: any) {
  switch (true) {
    case typeof component === 'string':
      return createElement(tag ?? component, props);
    case tag && typeof component !== 'string':
      return createElement(tag, props, createElement(component));
    case !tag && typeof component !== 'string':
      return createElement(component, props);
    default:
      return createElement(component, props);
  }
}
