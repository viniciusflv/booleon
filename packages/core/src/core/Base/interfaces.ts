export type KeyofJSX = keyof JSX.IntrinsicElements;
export type OrString<T> = T | string;
export type InputTypes =
  | 'checkbox'
  | 'color'
  | 'email'
  | 'file'
  | 'number'
  | 'password'
  | 'radio'
  | 'range'
  | 'text';
export type BaseProps = { [key in KeyofJSX | InputTypes]?: boolean };
