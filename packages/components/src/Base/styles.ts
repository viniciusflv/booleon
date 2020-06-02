import styled from 'styled-components';

import { BaseProps } from './interfaces';

export const BaseStyle = styled.div<BaseProps>`
  ${({ content }) => content && `content: ${content};`}
  ${({ grow }) => grow && `flex-grow: ${grow};`}
  ${({ outline }) => outline && `outline: ${outline};`}
  ${({ transition }) => transition && `transition: ${transition};`}
  ${({ cursor }) => cursor && `cursor: ${cursor};`}
  ${({ pointerEvents }) => pointerEvents && `pointer-events: ${pointerEvents};`}
  ${({ opacity }) => opacity && `opacity: ${opacity};`}
  ${({ display }) => display && `display: ${display};`}
  ${({ visibility }) => visibility && `visibility: ${visibility};`}
  ${({ zIndex }) => zIndex && `z-index: ${zIndex};`}
  ${({ alignSelf }) => alignSelf && `align-self: ${alignSelf};`}
`;
