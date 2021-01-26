/**
 * Module for `flex` options
 * @example
 * const Component = booleon.div(flex);
 * @example
 * ```jsx
 * <Component flex main_center cross_center />
 * ```
 */
export const flex = {
  flex: () => 'display:flex;',
  grow: () => 'flex-grow:1;',
  col: () => 'flex-direction:column;',
  row: () => 'flex-direction:row;',
  row_reverse: () => 'flex-direction:row-reverse;',
  col_reverse: () => 'flex-direction:column-reverse;',
  main_between: () => 'justify-content:space-between;',
  main_around: () => 'justify-content:space-around;',
  main_evenly: () => 'justify-content:space-evenly;',
  main_center: () => 'justify-content:center;',
  cross_center: () => 'align-items:center;',
  main_stretch: () => 'justify-content:stretch;',
  cross_stretch: () => 'align-items:stretch;',
  main_start: () => 'justify-content:flex-start;',
  cross_start: () => 'align-items:flex-start;',
  main_end: () => 'justify-content:flex-end;',
  cross_end: () => 'align-items:flex-end;',
};
