import ShadowProps from './interfaces';
import { indexerCss } from '../../lib/indexer';
import { handleShadow } from '../../lib/shadow';

const shadowCss = indexerCss<ShadowProps>([
  [/^(sd_)(\d)/, (value) => handleShadow(Number(value))],
  [/^(sdi_)(\d)/, (value) => handleShadow(Number(value), true)],
]);

export default shadowCss;
