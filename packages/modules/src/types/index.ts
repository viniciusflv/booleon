export type MeasurementUnits = 'px' | 'pt' | 'em' | 'rem' | 'vw' | 'vh' | '%';

export type NumberUnit = `NUMBER${MeasurementUnits}`;

export type Time = `NUMBER${'s' | 'ms'}`;

export type BorderStyle =
  | 'none'
  | 'hidden'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'
  | 'initial'
  | 'inherit';

export type UserSelect =
  | 'none'
  | 'auto'
  | 'text'
  | 'contain'
  | 'all'
  | 'inherit'
  | 'initial'
  | 'unset';

export type TextAlign =
  | 'left'
  | 'right'
  | 'center'
  | 'justify'
  | 'initial'
  | 'inherit';

export type TextTransform =
  | 'none'
  | 'capitalize'
  | 'uppercase'
  | 'lowercase'
  | 'initial'
  | 'inherit';

export type Fractions = `NUMBER${'fr'}` | NumberUnit | 'auto';

export type OutlineStyle =
  | 'auto'
  | 'none'
  | 'dotted'
  | 'dashed'
  | 'solid'
  | 'double'
  | 'groove'
  | 'ridge'
  | 'inset'
  | 'outset'
  | 'inherit'
  | 'initial'
  | 'unset';

export type Shadows = 1 | 2 | 3 | 4 | 6 | 8 | 9 | 12 | 16 | 24;

export type TransformOrigin =
  | NumberUnit
  | 'top'
  | 'bottom'
  | 'left'
  | 'right'
  | 'inherit'
  | 'initial'
  | 'unset';
