import { SizingProps } from './interfaces';
import { css } from 'styled-components';

const h = /h_\d/g;
const h_max = /h_max_\d/g;
const h_min = /h_min_\d/g;
const w = /w_\d/g;
const w_max = /w_max_\d/g;
const w_min = /w_min_\d/g;

const dynamic = (props: SizingProps) =>
  Object.keys(props).reduce((acc, key) => {
    const splitted = key.split('_');
    const value = splitted[splitted.length - 1];
    if (key.startsWith('h_')) {
      if (key.match(h)) acc += `height: ${value}rem;`;
      if (key.match(h_max)) acc += `max-height: ${value}rem;`;
      if (key.match(h_min)) acc += `min-height: ${value}rem;`;
      if (key.startsWith('h_screen')) acc += `height: ${value}vh;`;
      if (key.startsWith('h_max_screen')) acc += `max-height: ${value}vh;`;
      if (key.startsWith('h_min_screen')) acc += `min-height: ${value}vh;`;
      if (key.startsWith('h_full')) acc += 'height: 100%;';
      if (key.startsWith('h_max_full')) acc += 'max-height: 100%;';
      if (key.startsWith('h_min_full')) acc += 'min-height: 100%;';
      if (key.startsWith('h_auto')) acc += 'height: auto;';
      if (key.startsWith('h_max_auto')) acc += 'max-height: auto;';
      if (key.startsWith('h_min_auto')) acc += 'min-height: auto;';
    }
    if (key.startsWith('w_')) {
      if (key.match(w)) acc += `width: ${value}rem;`;
      if (key.match(w_max)) acc += `max-width: ${value}rem;`;
      if (key.match(w_min)) acc += `min-width: ${value}rem;`;
      if (key.startsWith('w_screen')) acc += `width: ${value}vh;`;
      if (key.startsWith('w_max_screen')) acc += `max-width: ${value}vh;`;
      if (key.startsWith('w_min_screen')) acc += `min-width: ${value}vh;`;
      if (key.startsWith('w_full')) acc += 'width: 100%;';
      if (key.startsWith('w_max_full')) acc += 'max-width: 100%;';
      if (key.startsWith('w_min_full')) acc += 'min-width: 100%;';
      if (key.startsWith('w_auto')) acc += 'width: auto;';
      if (key.startsWith('w_max_auto')) acc += 'max-width: auto;';
      if (key.startsWith('w_min_auto')) acc += 'min-width: auto;';
    }
    return acc;
  }, '');

export const sizingCss = css<SizingProps>`
  ${dynamic}
`;
