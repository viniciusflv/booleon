import ShadowProps from './interfaces';
import { handleShadow } from '../../lib/shadow';
import { Indexer } from '../../lib/interfaces';

const shadowCss: Indexer<ShadowProps> = [
  [/^(sd_)(\d)/, (value) => handleShadow(Number(value))],
  [/^(sdi_)(\d)/, (value) => handleShadow(Number(value), true)],
];

export default shadowCss;
