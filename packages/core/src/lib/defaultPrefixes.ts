import { prefixerHandlers } from './prefixerHandlers';

export const defaultPrefixes = {
  undefined: () => '',
  css: prefixerHandlers.classes(),
  dark: prefixerHandlers.theme(),
  xs: prefixerHandlers.media('(min-width: 640px)'),
  sm: prefixerHandlers.media('(min-width: 768px)'),
  md: prefixerHandlers.media('(min-width: 1024px)'),
  lg: prefixerHandlers.media('(min-width: 1440px)'),
  xl: prefixerHandlers.media('(min-width: 1920px)'),
  focus: prefixerHandlers.pseudo(':focus'),
  within: prefixerHandlers.pseudo(':focus-within'),
  after: prefixerHandlers.pseudo(':after'),
  before: prefixerHandlers.pseudo(':before'),
  active: prefixerHandlers.pseudo(':active'),
  checked: prefixerHandlers.pseudo(':checked'),
  disabled: prefixerHandlers.pseudo(':disabled'),
  hover: prefixerHandlers.pseudo(':hover'),
  visited: prefixerHandlers.pseudo(':visited'),
  child: prefixerHandlers.pseudo('>*'),
  last: prefixerHandlers.pseudo(':last-child'),
  first: prefixerHandlers.pseudo(':first-child'),
  adjacent: prefixerHandlers.pseudo('~*'),
  sibling: prefixerHandlers.pseudo('+*'),
  odd: prefixerHandlers.pseudo(':nth-child(odd)'),
  even: prefixerHandlers.pseudo(':nth-child(even)'),
  kf: prefixerHandlers.keyframe({
    from: '0%',
    quarter: '25%',
    third: '33%',
    half: '50%',
    x2third: '66%',
    x3quarter: '75%',
    to: '100%',
  }),
};