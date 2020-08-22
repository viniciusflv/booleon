import ShadowProps from './interfaces';
import { Indexer } from '../../lib/interfaces';
import { handleShadow } from '../../lib/shadow';

const shadowCss: Indexer<ShadowProps> = [
  [/^(sd_)(\d+)/, (value) => `box-shadow: ${handleShadow(Number(value))};`],
  [
    /^(sdi_)(\d+)/,
    (value) => `box-shadow: ${handleShadow(Number(value), true)};`,
  ],
];

export default shadowCss;
