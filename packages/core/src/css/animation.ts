import { lowerCase, number } from '../lib/regex';

export const animationTuple = [
  [
    ['kf_' as 'kf_NAME', `(${lowerCase})$`],
    (value: string) => `animation-name: ${value};`,
  ],
  [
    ['ani_duration_' as 'ani_duration_TIME', `(${number}${lowerCase})`],
    (value: string) => `animation-duration: ${value};`,
  ],
  [
    ['ani_iteration_' as 'ani_iteration_NUMBER', `(${number})`],
    (value: string) => `animation-iteration-count: ${value};`,
  ],
  ['ani_iteration_infinite', () => 'animation-iteration-count:infinite;'],
  [
    'ani_play',
    (value: boolean) =>
      `animation-play-state: ${value === true ? 'running' : 'paused'};`,
  ],
  ['ani_forwards', () => 'animation-fill-mode:forwards;'],
  ['ani_backwards', () => 'animation-fill-mode:backwards;'],
  ['ani_linear', () => 'animation-timing-function:linear;'],
  ['ani_ease', () => 'animation-timing-function:ease;'],
  ['ani_ease_in', () => 'animation-timing-function:ease-in;'],
  ['ani_ease_out', () => 'animation-timing-function:ease-out;'],
  ['ani_ease_in_out', () => 'animation-timing-function:ease-in-out;'],
] as const;
