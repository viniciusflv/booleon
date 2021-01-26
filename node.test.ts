import { NUMBER, LOWER_CASE } from './packages/modules/src/constants/regex';

const sym = <T>(a): T => (Symbol(a) as unknown) as T;
const animation = {
  [sym<'ani_name_NAME'>(`ani_name_(${LOWER_CASE})`)]: (value: string) =>
    `animation-name:${value};`,
  [sym<'ani_duration_TIME'>(`ani_duration_(${NUMBER}${LOWER_CASE})`)]: (
    value: string,
  ) => `animation-duration:${value};`,
  [sym<'ani_iteration_NUMBER'>(`ani_iteration_(${NUMBER})`)]: (value: string) =>
    `animation-iteration-count:${value};`,
  ani_iteration_infinite: () => 'animation-iteration-count:infinite;',
  ani_pause: () => 'animation-play-state: paused;',
  ani_play: () => 'animation-play-state: running;',
  ani_forwards: () => 'animation-fill-mode:forwards;',
  ani_backwards: () => 'animation-fill-mode:backwards;',
  ani_linear: () => 'animation-timing-function:linear;',
  ani_ease: () => 'animation-timing-function:ease;',
  ani_ease_in: () => 'animation-timing-function:ease-in;',
  ani_ease_out: () => 'animation-timing-function:ease-out;',
  ani_ease_in_out: () => 'animation-timing-function:ease-in-out;',
};

test('', () => {
  const key = 'ani_iteration_infinite';
  const css =
    animation[key]?.(true) ??
    Object.getOwnPropertySymbols(animation).reduce((acc, symbol) => {
      const { regex } =
        /Symbol\((?<regex>.*)\)/g.exec(String(symbol))?.groups ?? {};
      const [, value] = new RegExp(regex).exec(key) ?? [];
      if (value) {
        acc += animation[symbol](value);
      }
      return acc;
    }, '');
  console.log(css);
});
