import { hexColor } from '../lib/regex';

export const backgroundTuple = [
  [
    ['bg_' as 'bg_HEX', `(${hexColor})`],
    (value: string) => `background-color:#${value};`,
  ],
  ['bg_img', (value: string) => `background-image:url(${value});`],
  ['bg_transparent', () => 'background-color:transparent;'],
  ['bg_repeat', () => 'background-repeat:repeat;'],
  ['bg_norepeat', () => 'background-repeat:no-repeat;'],
  ['bg_auto', () => 'background-size:auto;'],
  ['bg_cover', () => 'background-size:cover;'],
  ['bg_contain', () => 'background-size:contain;'],
  ['bg_fixed', () => 'background-attachment:fixed;'],
  ['bg_local', () => 'background-attachment:local;'],
  ['bg_scroll', () => 'background-attachment:scroll;'],
] as const;
