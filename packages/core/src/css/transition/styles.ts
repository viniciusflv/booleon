import TransitionProps from './interfaces';
import { indexerCss } from '../../lib/indexer';

const colors = 'background-color, border-color, color, fill, stroke';

const transitionCss = indexerCss<TransitionProps>([
  [/^(ts_duration_)(\d+)/, (value) => `transition-duration: ${value}ms;`],
  [/^(ts_delay_)(\d+)/, (value) => `transition-delay: ${value}ms;`],
  ['ts', () => `transition-property: ${colors}, opacity, box-shadow, transform;`],
  ['ts_none', () => 'transition-property: none;'],
  ['ts_all', () => 'transition-property: all;'],
  ['ts_colors', () => `transition-property: ${colors};`],
  ['ts_opacity', () => 'transition-property: opacity;'],
  ['ts_shadow', () => 'transition-property: box-shadow;'],
  ['ts_transform', () => 'transition-property: transform;'],
  ['ts_ease_linear', () => 'transition-timing-function: linear;'],
  ['ts_ease_in', () => 'transition-timing-function: cubic-bezier(0.4, 0, 1, 1);'],
  ['ts_ease_out', () => 'transition-timing-function: cubic-bezier(0, 0, 0.2, 1);'],
  ['ts_ease_in_out', () => 'transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);'],
]);

export default transitionCss;
