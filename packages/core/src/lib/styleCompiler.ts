import { BooleonModule, Attachments, Props, AttachmentHandler } from '../types';
import { attachmentsDefault } from './attachmentsDefault';
import { cleanTransformFilter } from './cleanTransformFilter';
import { cssCompiler } from './cssCompiler';

export function styleCompiler<P extends Attachments, M extends BooleonModule>(
  className: string,
  composedProps: Props,
  booleonModules: M,
  customAttachments?: P,
) {
  const attachments: Attachments = {
    ...attachmentsDefault,
    ...customAttachments,
  };
  const recursiveCompiler = (props: Props): string => {
    return Object.keys(props).reduce((acc, key) => {
      const value = props[key];
      if (typeof value === 'object') {
        const handler: AttachmentHandler =
          attachments[key] ??
          attachments[
            `${Object.keys(attachments).find((k) => key.startsWith(k))}`
          ];
        return (acc += handler({
          key,
          value,
          attachments,
          className,
          recursiveCompiler,
        }));
      }
      return (acc += cssCompiler(key, value, booleonModules));
    }, '');
  };

  return cleanTransformFilter(recursiveCompiler(composedProps));
}
