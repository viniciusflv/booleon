import BackgroundProps from './interfaces';
import { Indexer } from '../../lib/interfaces';
import { hexColor } from '../../lib/constants';

const backgroundCss: Indexer<BackgroundProps> = [
  [
    () => new RegExp(`^(bg_)${hexColor}`),
    (value) => `background-color: #${value};`,
  ],
  ['bg_transparent', () => 'background-color: transparent;'],
  ['bg_img', (value) => `background-image: url(${value});`],
  ['bg_repeat', () => 'background-repeat: repeat;'],
  ['bg_norepeat', () => 'background-repeat: no-repeat;'],
  ['bg_auto', () => 'background-size: auto;'],
  ['bg_cover', () => 'background-size: cover;'],
  ['bg_contain', () => 'background-size: contain;'],
  ['bg_fixed', () => 'background-attachment: fixed;'],
  ['bg_local', () => 'background-attachment: local;'],
  ['bg_scroll', () => 'background-attachment: scroll;'],
];

export default backgroundCss;
