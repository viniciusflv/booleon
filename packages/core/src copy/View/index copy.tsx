import React from 'react';

const fastHash = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash = hash & hash;
  }
  return String.fromCharCode(hash);
};

const handleClasses = (innerHTML: string, css: string) => {
  const className = fastHash(css);
  innerHTML += `.${className}{${css}}`;
  const classRegex = /.([^)]+?){([^)]+?)}/g;
  const html = Array.from(new Set(innerHTML.match(classRegex))).join('');
  return [className, html];
};

export const View: {
  [key in keyof React.ReactDOM]: React.ElementType;
} = ['div', 'section'].reduce(
  (acc, element) => ({
    ...acc,
    [element]: function View({ className = '', ...props }: any) {
      let sty = document.getElementById('booleon');
      if (!sty) {
        sty = document.createElement('style');
        sty.setAttribute('id', 'booleon');
        document.head.appendChild(sty);
      }

      const css = Object.keys(props).reduce((acc: string, key: string) => {
        if (props[key] && key.startsWith('bg_')) {
          const [, color] = key.split('_');
          acc += `background-color: #${color};`;
        }
        return acc;
      }, '');

      const [cssClass, innerHTML] = handleClasses(sty.innerHTML, css);

      if (sty.innerHTML !== innerHTML) sty.innerHTML = innerHTML;

      return React.createElement(element, {
        ...props,
        className: cssClass + className,
      });
    },
  }),
  {} as any
);
