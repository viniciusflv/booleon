import {
  KeyinTypeOrString,
} from '../lib/interfaces';
import { hexColor } from '../lib/constants';
import { indexerCss } from '../lib/indexer';

type Options =
  | 'bg_repeat'
  | 'bg_norepeat'
  | 'bg_auto'
  | 'bg_cover'
  | 'bg_contain'
  | 'bg_fixed'
  | 'bg_local'
  | 'bg_scroll'
  | 'bg_HEX'
  | 'op_PERCENTAGE';

export type BackgroundProps = 
  & { bg_img?: string }
  & KeyinTypeOrString<Options>
;

export const backgroundCss = indexerCss<BackgroundProps>([
  [new RegExp(`^(bg_)${hexColor}`), (value) => `background-color: #${value};`],
  [/^(op_)(\d+)/, (value) => `opacity: ${Number(value) / 100};`],
  ['bg_img', (bg_img) => `background-image: url(${bg_img});`],
  ['bg_repeat', () => 'background-repeat: repeat;'],
  ['bg_norepeat', () => 'repeat: no-repeat;'],
  ['bg_auto', () => 'background-size: auto;'],
  ['bg_cover', () => 'background-size: cover;'],
  ['bg_contain', () => 'background-size: contain;'],
  ['bg_fixed', () => 'background-attachment: fixed;'],
  ['bg_local', () => 'background-attachment: local;'],
  ['bg_scroll', () => 'background-attachment: scroll;'],
]);
