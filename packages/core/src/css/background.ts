import { Entry, Indexer } from '../lib/interfaces';
import { c } from '../lib/constants';
import { hexColor } from '../lib/regex';

const backgroundTuple = [
  [
    'bg_img',
    (value: string) => c.background['-'].image[':'].value(value)[';'].res,
  ],
  ['bg_transparent', () => c.background['-'].color[':'].transparent[';'].res],
  ['bg_repeat', () => c.background['-'].repeat[':'].repeat[';'].res],
  ['bg_norepeat', () => c.background['-'].repeat[':'].no.repeat[';'].res],
  ['bg_auto', () => c.background['-'].size[':'].auto[';'].res],
  ['bg_cover', () => c.background['-'].size[':'].cover[';'].res],
  ['bg_contain', () => c.background['-'].size[':'].contain[';'].res],
  ['bg_fixed', () => c.background['-'].attachment[':'].fixed[';'].res],
  ['bg_local', () => c.background['-'].attachment[':'].local[';'].res],
  ['bg_scroll', () => c.background['-'].attachment[':'].scroll[';'].res],
] as const;

const backgroundIndexer: Indexer = [
  [
    () => `^(bg_)(${hexColor})`,
    (value) => c.background['-'].color[':'].value(`#${value}`)[';'].res,
  ],
];

type BackgroundProps = Entry<typeof backgroundTuple, 'bg_HEX'>;

export { BackgroundProps, backgroundIndexer, backgroundTuple };
