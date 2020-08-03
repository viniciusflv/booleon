import ShadowProps from './interfaces';
import { handleShadow } from '../../lib/shadow';
import { Indexer } from '../../lib/interfaces';

const shadowCss: Indexer<ShadowProps> = [
  [/^(sd_)(\d+)/, (value) => `box-shadow: ${handleShadow(Number(value))};`],
  [/^(sdi_)(\d+)/, (value) => `box-shadow: ${handleShadow(Number(value), true)};`],
];

export default shadowCss;
