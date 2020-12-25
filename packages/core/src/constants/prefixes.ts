export const PSEUDO_ELEMENTS = [
  ['focus' as 'focus__PROP', ':focus'],
  ['within' as 'within__PROP', ':focus-within'],
  ['after' as 'after__PROP', ':after'],
  ['before' as 'before__PROP', ':before'],
  ['active' as 'active__PROP', ':active'],
  ['checked' as 'checked__PROP', ':checked'],
  ['disabled' as 'disabled__PROP', ':disabled'],
  ['hover' as 'hover__PROP', ':hover'],
  ['visited' as 'visited__PROP', ':visited'],
  ['child' as 'child__PROP', '>*'],
  ['last' as 'last__PROP', ':last-child'],
  ['first' as 'first__PROP', ':first-child'],
  ['sibling' as 'sibling__PROP', '+*'],
  ['odd' as 'odd__PROP', ':nth-child(odd)'],
  ['even' as 'even__PROP', ':nth-child(even)'],
] as const;

export const KEYFRAMES = [
  ['from' as 'from__PROP', '0%'],
  ['quarter' as 'quarter__PROP', '25%'],
  ['third' as 'third__PROP', '33%'],
  ['half' as 'half__PROP', '50%'],
  ['x2third' as 'x2third__PROP', '66%'],
  ['x3quarter' as 'x3quarter__PROP', '75%'],
  ['to' as 'to__PROP', '100%'],
] as const;

export const MEDIA_QUERIES = [
  ['xs' as 'xs__PROP', '(min-width: 640px)'],
  ['sm' as 'sm__PROP', '(min-width: 768px)'],
  ['md' as 'md__PROP', '(min-width: 1024px)'],
  ['lg' as 'lg__PROP', '(min-width: 1440px)'],
  ['xl' as 'xl__PROP', '(min-width: 1920px)'],
] as const;
