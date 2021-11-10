import { attachmentsDefault } from './lib/attachmentsDefault';

export type Props<
  K extends string | number | symbol = string,
  V = any
> = Record<K, V>;

export type BooleonKeys = string | symbol;

export type BooleonValues = (value?: any) => string;

export type BooleonModule = Partial<Props<BooleonKeys, BooleonValues>>;

export type AttachmentHandler = (
  arg: AttachmentContext,
  wrap?: boolean,
) => string;

export type Attachments = Props<string, AttachmentHandler> | undefined;

export type AttachmentContext = {
  key: string;
  value: Props;
  className: string;
  attachments: Attachments;
  recursiveCompiler: (props: Props) => string;
};

export type AttachmentsDefaultKeys = Exclude<
  keyof typeof attachmentsDefault,
  'undefined' | 'css'
>;

export type AttachmentKeys<
  A extends Attachments | undefined = undefined
> = A extends undefined
  ? AttachmentsDefaultKeys
  : AttachmentsDefaultKeys | Exclude<keyof A, number | symbol>;

export type BooleonModuleKeys<M> = keyof M extends string ? keyof M : never;

export type BooleonModuleValues = boolean | string;

export type BooleonPropsKeys<
  K extends string,
  A extends Attachments | undefined = undefined
> = K | `${AttachmentKeys<A>}__$`;

export type BooleonProps<
  M extends BooleonModule,
  A extends Attachments = undefined
> = Partial<
  | Props<BooleonPropsKeys<BooleonModuleKeys<M>, A>, BooleonModuleValues>
  | Record<string, BooleonModuleValues>
>;
