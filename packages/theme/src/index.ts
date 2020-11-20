import React from 'react';

import { useStyleAppender } from '@booleon/core';

export const root = {
  fonts: {
    arial: 'arial',
  },
  fontSizes: {
    smallest: '10px',
    smaller: '12px',
    small: '18px',
    medium: '20px',
    large: '24px',
    larger: '40px',
    largest: '60px',
  },
  spaces: {
    none: '0',
    closer: '4px',
    close: '8px',
    near: '16px',
    far: '32px',
    further: '64px',
    farest: '100px',
  },
  sizes: {
    smallest: '10px',
    smaller: '12px',
    small: '18px',
    medium: '20px',
    large: '24px',
    larger: '40px',
    largest: '60px',
  },
  lineHeights: {
    normal: 'normal',
    none: '1',
    shorter: '1.25',
    short: '1.375',
    base: '1.5',
    tall: '1.625',
    taller: '2',
  },
  letterSpacings: {
    tighter: '-0.05em',
    tight: '-0.025em',
    normal: '0',
    wide: '0.025em',
    wider: '0.05em',
    widest: '0.1em',
  },
  border: {
    thinnest: '0.3px',
    thinner: '0.5px',
    thin: '0.8px',
    normal: '1px',
    thick: '3px',
    thicker: '5px',
    thickest: '10px',
  },
  radius: {
    edge: '4px',
    circular: '100%',
    rounded: '100px',
  },
};

export const themes = {
  light: {
    colors: {
      primary: 'blue',
      secondary: 'white',
    },
  },
  dark: {
    colors: {
      primary: 'white',
      secondary: 'black',
    },
  },
};

export function useThemes<R, T>(root: R, themes: T, initialTheme: keyof T) {
  const [theme, setTheme] = React.useState(initialTheme);

  React.useEffect(() => {
    document.body.dataset.theme = theme as string;
  }, [theme]);

  React.useEffect(() => {
    useStyleAppender(
      `bl-root-theme`,
      `:root{${Object.keys(root).reduce(
        (acc, r) =>
          (acc += Object.keys(root[r]).reduce(
            (acc, p) => (acc += `--${r}-${p}:${root[r][p]};`),
            '',
          )),
        '',
      )}`,
    );
  }, [themes]);

  React.useEffect(() => {
    Object.keys(themes).map((t) => {
      useStyleAppender(
        `bl-theme-${t}`,
        `body[data-theme='${t}']{${Object.keys(themes[t]).reduce(
          (accu, p) =>
            (accu += Object.keys(themes[t][p]).reduce(
              (acc, pp) => (acc += `--${p}-${pp}:${themes[t][p][pp]};`),
              '',
            )),
          '',
        )}`,
      );
    });
  }, [themes]);

  return [theme, setTheme] as [
    keyof T,
    React.Dispatch<React.SetStateAction<keyof T>>,
  ];
}
