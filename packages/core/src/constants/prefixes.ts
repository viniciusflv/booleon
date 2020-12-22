export const PSEUDO_ELEMENTS = [
  ['focus', ':focus'],
  ['within', ':focus-within'],
  ['after', ':after'],
  ['before', ':before'],
  ['active', ':active'],
  ['checked', ':checked'],
  ['disabled', ':disabled'],
  ['hover', ':hover'],
  ['visited', ':visited'],
  ['child', '>*'],
  ['last', ':last-child'],
  ['first', ':first-child'],
  ['sibling', '+*'],
  ['odd', ':nth-child(odd)'],
  ['even', ':nth-child(even)'],
] as const;

export const KEYFRAMES = [
  ['from', '0%'],
  ['quarter', '25%'],
  ['third', '33%'],
  ['half', '50%'],
  ['x2third', '66%'],
  ['x3quarter', '75%'],
  ['to', '100%'],
] as const;

export const MEDIA_QUERIES = [
  ['xs', '(min-width: 640px)'],
  ['sm', '(min-width: 768px)'],
  ['md', '(min-width: 1024px)'],
  ['lg', '(min-width: 1440px)'],
  ['xl', '(min-width: 1920px)'],
] as const;
