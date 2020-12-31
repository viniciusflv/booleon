import { LOWER_CASE, NUMBER } from '../constants';

export const animation = [
  [
    ['ani_name_' as 'ani_name_NAME', `(${LOWER_CASE})$`],
    (value: string) => `animation-name: ${value};`,
  ],
  [
    ['ani_duration_' as 'ani_duration_TIME', `(${NUMBER}${LOWER_CASE})`],
    (value: string) => `animation-duration: ${value};`,
  ],
  [
    ['ani_iteration_' as 'ani_iteration_NUMBER', `(${NUMBER})`],
    (value: string) => `animation-iteration-count: ${value};`,
  ],
  ['ani_iteration_infinite', () => 'animation-iteration-count:infinite;'],
  ['ani_pause', () => 'animation-play-state: paused;'],
  ['ani_play', () => 'animation-play-state: running;'],
  ['ani_forwards', () => 'animation-fill-mode:forwards;'],
  ['ani_backwards', () => 'animation-fill-mode:backwards;'],
  ['ani_linear', () => 'animation-timing-function:linear;'],
  ['ani_ease', () => 'animation-timing-function:ease;'],
  ['ani_ease_in', () => 'animation-timing-function:ease-in;'],
  ['ani_ease_out', () => 'animation-timing-function:ease-out;'],
  ['ani_ease_in_out', () => 'animation-timing-function:ease-in-out;'],
] as const;
