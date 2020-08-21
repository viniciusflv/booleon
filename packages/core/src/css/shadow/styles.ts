import { Indexer } from '../../lib/interfaces';
import { handleShadow } from '../../lib/shadow';
import ShadowProps from './interfaces';

const shadowCss: Indexer<ShadowProps> = [
  [/^(sd_)(\d+)/, (value) => `box-shadow: ${handleShadow(Number(value))};`],
  [
    /^(sdi_)(\d+)/,
    (value) => `box-shadow: ${handleShadow(Number(value), true)};`,
  ],
];

export default shadowCss;
