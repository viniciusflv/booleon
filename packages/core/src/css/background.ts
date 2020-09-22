import { Entry, Indexer } from '../lib/interfaces';
import { hexColor } from '../lib/regex';

const backgroundTuple = [
  ['bg_img', (value: string) => `background-image:${value};`],
  ['bg_transparent', () => 'background-color:transparent;'],
  ['bg_repeat', () => 'background-repeat:repeat;'],
  ['bg_norepeat', () => 'background-repeat:norepeat;'],
  ['bg_auto', () => 'background-size:auto;'],
  ['bg_cover', () => 'background-size:cover;'],
  ['bg_contain', () => 'background-size:contain;'],
  ['bg_fixed', () => 'background-attachment:fixed;'],
  ['bg_local', () => 'background-attachment:local;'],
  ['bg_scroll', () => 'background-attachment:scroll;'],
] as const;

const backgroundIndexer: Indexer = [
  [() => `^(bg_)((${hexColor}))`, (value) => `background-color:#${value};`],
];

type BackgroundProps = Entry<typeof backgroundTuple, 'bg_HEX'>;

export { BackgroundProps, backgroundIndexer, backgroundTuple };
