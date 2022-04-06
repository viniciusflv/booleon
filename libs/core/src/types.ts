import { selectorsDefault } from './lib/selectorsDefault';

export type Props<
  K extends string | number | symbol = string,
  V = any,
> = Record<K, V>;

export type BooleonKeys = string | symbol;

export type BooleonModule = Partial<Props<BooleonKeys, any>>;

export type WithToken<M extends BooleonModule, T extends Props> = Record<
  keyof M,
  (value: any, token?: T) => string
>;

export type BooleonOptions<S extends Selectors, T extends Props> = {
  selectors?: S;
  tokens?: T;
};

export type SelectorKey = string | ((ctx?: SelectorContext) => string);

export type SelectorHandler = (
  arg: SelectorContext,
  wrap?: boolean,
) => SelectorKey;

export type SelectorCallback = (value?: any) => string;

export type Selectors =
  | Props<string, SelectorHandler | SelectorCallback>
  | undefined;

export type SelectorContext = {
  key: string;
  value: Props;
  className: string;
  selectors: Selectors;
  recursiveCompiler: (props: Props) => string;
};

export type SelectorsDefaultKeys = Exclude<
  keyof typeof selectorsDefault,
  'undefined' | 'css'
>;

export type SelectorKeys<S extends Selectors | undefined = undefined> =
  S extends undefined
    ? SelectorsDefaultKeys
    : SelectorsDefaultKeys | Exclude<keyof S, number | symbol>;

export type BooleonModuleKeys<M> = keyof M extends string ? keyof M : never;

export type BooleonModuleValues = boolean | string;

export type BooleonPropsKeys<
  K extends string,
  S extends Selectors | undefined = undefined,
> = K | `${SelectorKeys<S>}__$`;

export type BooleonProps<
  M extends BooleonModule,
  S extends Selectors = undefined,
> = Partial<
  | Props<BooleonPropsKeys<BooleonModuleKeys<M>, S>, BooleonModuleValues>
  | Record<string, BooleonModuleValues>
>;

export type ThemedModule<K extends string, T extends Record<string, any>> = {
  [key in `${K}_${keyof T extends string ? keyof T : string}`]: () => string;
};
