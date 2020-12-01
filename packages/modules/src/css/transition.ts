import { LOWER_CASE, NUMBER } from '../constants';
import { Time } from '../types';

const colors = 'background-color,border-color,color,fill,stroke';

export const transition = [
  [
    ['ts_delay_' as `ts_delay_${Time}`, `(${NUMBER}${LOWER_CASE})`],
    (value: string) => `transition-delay:${value};`,
  ],
  [
    ['ts_duration_' as `ts_duration_${Time}`, `(${NUMBER}${LOWER_CASE})`],
    (value: string) => `transition-duration:${value};`,
  ],
  ['ts', () => `transition-property:${colors},opacity,box-shadow,transform;`],
  ['ts_none', () => 'transition-property:none;'],
  ['ts_all', () => 'transition-property:all;'],
  ['ts_colors', () => `transition-property:${colors};`],
  ['ts_opacity', () => 'transition-property:opacity;'],
  ['ts_shadow', () => 'transition-property:box-shadow;'],
  ['ts_transform', () => 'transition-property:transform;'],
  ['ts_ease_linear', () => 'transition-timing-function:linear;'],
  ['ts_ease_in', () => 'transition-timing-function:cubic-bezier(0.4,0,1,1);'],
  ['ts_ease_out', () => 'transition-timing-function:cubic-bezier(0,0,0.2,1);'],
  [
    'ts_ease_in_out',
    () => 'transition-timing-function:cubic-bezier(0.4,0,0.2,1);',
  ],
] as const;
