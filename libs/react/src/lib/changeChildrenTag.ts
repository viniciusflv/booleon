import { createElement } from 'react';

// TODO: Improve this logic
export function changeChildrenTag(as: any, component: any, props: any) {
  switch (true) {
    case typeof component === 'string':
      return createElement(as ?? component, props);
    case as && typeof component !== 'string':
      return createElement(as, props, createElement(component));
    case !as && typeof component !== 'string':
      return createElement(component, props);
    default:
      return createElement(component, props);
  }
}
