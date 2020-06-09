import { Border } from '../Border';
import { Margin } from '../Margin';
import { Padding } from '../Padding';
import { ViewProps } from './interfaces';
import styled from 'styled-components';


const DefaultViewStyle = styled(
  Margin.withComponent(Padding.withComponent(Border))
)<ViewProps>`
  ${({ flex }) => flex && 'display: flex;'}
  ${({ grid }) => grid && 'display: grid;'}
  ${({ hidden }) => hidden && 'display: none;'}
  ${({ visible }) => visible && 'visiblity: visible;'}
  ${({ invisible }) => invisible && 'visiblity: hidden;'}
  ${({ grow }) => grow && 'flex-grow: 1;'}
  ${({ col }) => col && 'flex-direction: column;'}
  ${({ row }) => row && 'flex-direction: row;'}
`;

const selectMedia = (media: string, props: ViewProps) =>
  Object.keys(props)
    .filter((key: string) => key.startsWith(`${media}_`))
    .reduce(
      (acc: object, key: string) => ({
        ...acc,
        [key.replace(`${media}_`, '')]: props[key],
      }),
      {},
    );

const runRules = (props: ViewProps) => {
  // @ts-expect-error
  const rules: Function[] = DefaultViewStyle.componentStyle.rules.filter(
    (rule: ('string' | Function)[]) => typeof rule === 'function',
  );
  return rules
    .map((rule) => rule(props))
    .filter(Boolean)
    .reduce((acc, style) => `${acc}${style}`, '');
};

const getBreakPoint = (media: string) => {
  switch (media) {
  case 'xs': return '640px';
  case 'sm': return '768px';
  case 'md': return '1024px';
  case 'lg': return '1440px';
  case 'xl': return '1920px';
  default: return '';
  }
};

const Medias = styled(DefaultViewStyle).attrs({
  runRules,
})`
  ${(props) => {
    return ['xs', 'sm', 'md', 'lg', 'xl']
      .map((media) => {
        const styles = props.runRules(selectMedia(media, props));
        if (styles) {
          return `@media and screen (min-width: ${getBreakPoint(
            media,
          )}) { ${styles} }`;
        }
        return '';
      })
      .join('');
  }}
`;

export const ViewStyle = Medias;
