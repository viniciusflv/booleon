import { Container } from '../Container';
import { ViewProps } from './interfaces';
import styled from 'styled-components';

const getGridTemplate = (match: string, props: any) =>
  Object.keys(props).reduce((acc: string, key: string) => {
    if (key.startsWith(match)) {
      const options = key.replace(match, '').split('_');
      for (let i = 0; i < options.length; i += 2) {
        acc += `repeat(${options[i]}, ${options[i + 1]}) `;
      }
      return acc;
    }
    return acc;
  }, '');

const getGridArea = (props: any) =>
  Object.keys(props).reduce((acc: string, key: string) => {
    if (key.startsWith('area_')) {
      const [area] = key.replace('area_', '').split('_');
      return `grid-area: ${area};`;
    }
    return acc;
  }, '');

const DefaultViewStyle = styled(Container)<ViewProps>`
  ${({ flex }) => flex && 'display: flex;'}
  ${({ grid }) => grid && 'display: grid;'}
  ${({ hidden }) => hidden && 'display: none;'}
  ${({ visible }) => visible && 'visiblity: visible;'}
  ${({ invisible }) => invisible && 'visiblity: hidden;'}
  ${({ grow }) => grow && 'flex-grow: 1;'}
  ${({ col }) => col && 'flex-direction: column;'}
  ${({ row }) => row && 'flex-direction: row;'}
  ${({ main_between }) => main_between && 'justify-content: space-between;'}
  ${({ main_around }) => main_around && 'justify-content: space-around;'}
  ${({ main_evenly }) => main_evenly && 'justify-content: space-evenly;'}
  ${({ main_center }) => main_center && 'justify-content: center;'}
  ${({ cross_center }) => cross_center && 'align-items: center;'}
  ${({ main_stretch }) => main_stretch && 'justify-content: stretch;'}
  ${({ cross_stretch }) => cross_stretch && 'align-items: stretch;'}
  ${({ main_start }) => main_start && 'justify-content: flex-start;'}
  ${({ cross_start }) => cross_start && 'align-items: flex-start;'}
  ${({ main_end }) => main_end && 'justify-content: flex-end;'}
  ${({ cross_end }) => cross_end && 'align-items: flex-end;'}
  ${({ areas }) => areas && `grid-template-areas: ${areas};`}
  ${(props) => {
    const area = getGridArea(props);
    return area !== '' && area;
  }}
  ${(props) => {
    const cols = getGridTemplate('cols_', props);
    return cols !== '' && `grid-template-columns: ${cols};`;
  }}
  ${(props) => {
    const rows = getGridTemplate('rows_', props);
    return rows !== '' && `grid-template-rows: ${rows};`;
  }}
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
