export type KeyofJSX = keyof JSX.IntrinsicElements;
export type JsxOrString = KeyofJSX | string;
export type BaseProps = { [key in KeyofJSX]?: boolean }