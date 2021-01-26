import { LOWER_CASE, NUMBER } from '../constants';
import { sym } from '../utils/sym';

const colors = 'background-color,border-color,color,fill,stroke';

/**
 * Module for `transition` options
 * @example
 * const Component = booleon.div(transition);
 * @example
 * ```jsx
 * <Component
 *  ts_all
 *  ts_delay_1s
 *  ts_duration_500ms
 *  ts_ease_in_out
 * />
 * ```
 */
export const transition = {
  [sym<'ts_delay_TIME'>(`ts_delay_(${NUMBER}${LOWER_CASE})`)]: (
    value: string,
  ) => `transition-delay:${value};`,
  [sym<'ts_duration_TIME'>(`ts_duration_(${NUMBER}${LOWER_CASE})`)]: (
    value: string,
  ) => `transition-duration:${value};`,
  ts: () => `transition-property:${colors},opacity,box-shadow,transform;`,
  ts_none: () => 'transition-property:none;',
  ts_all: () => 'transition-property:all;',
  ts_colors: () => `transition-property:${colors};`,
  ts_opacity: () => 'transition-property:opacity;',
  ts_shadow: () => 'transition-property:box-shadow;',
  ts_transform: () => 'transition-property:transform;',
  ts_ease_linear: () => 'transition-timing-function:linear;',
  ts_ease_in: () => 'transition-timing-function:cubic-bezier(0.4,0,1,1);',
  ts_ease_out: () => 'transition-timing-function:cubic-bezier(0,0,0.2,1);',
  ts_ease_in_out: () => 'transition-timing-function:cubic-bezier(0.4,0,0.2,1);',
};
