import { sym } from '../utils';

/**
 * Module for `animation` options
 * @example
 * const Component = booleon.div(animation);
 * @example
 * ```jsx
 * <Component
 *  ani_name_myAnimation
 *  ani_iteration_infinite
 * />
 * ```
 */
export const animation = {
  [sym('ani_name_$')]: ($: string) => `animation-name:${$};`,
  [sym('ani_duration_$')]: ($: string) => `animation-duration:${$};`,
  [sym('ani_iteration_$')]: ($: string) => `animation-iteration-count:${$};`,
  ani_iteration_infinite: () => 'animation-iteration-count:infinite;',
  ani_pause: () => 'animation-play-state:paused;',
  ani_play: () => 'animation-play-state:running;',
  ani_forwards: () => 'animation-fill-mode:forwards;',
  ani_backwards: () => 'animation-fill-mode:backwards;',
  ani_linear: () => 'animation-timing-function:linear;',
  ani_ease: () => 'animation-timing-function:ease;',
  ani_ease_in: () => 'animation-timing-function:ease-in;',
  ani_ease_out: () => 'animation-timing-function:ease-out;',
  ani_ease_in_out: () => 'animation-timing-function:ease-in-out;',
};
