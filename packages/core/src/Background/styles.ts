import { BackgroundProps } from './interfaces';
import styled from 'styled-components';

const linearGradient = (...args: string[]) =>
  `background-image: linear-gradient(${args.join(',')});`;

const handleOpacity = (key: string, match: string) => {
  const [opacity] = key.replace(match, '').split('_');
  return `opacity: ${Number(opacity) / 100};`;
};

const handleGradient = (key: string, match: string) => {
  const [color] = key.replace(match, '').split('_');
  switch (match) {
  case 'gx_': return linearGradient('to right', `#${color}`, 'transparent', `#${color}`);
  case 'gy_': return linearGradient('to top', `#${color}`, 'transparent', `#${color}`);
  case 'gt_': return linearGradient('to top', 'transparent', `#${color}`);
  case 'gb_': return linearGradient('to bottom', 'transparent', `#${color}`);
  case 'gl_': return linearGradient('to left', 'transparent', `#${color}`);
  case 'gr_': return linearGradient('to right', 'transparent', `#${color}`);
  default: return '';
  }
};

const gradient = (props: BackgroundProps) =>
  Object.keys(props).reduce((acc: string, key: string) => {
    switch (true) {
    case key.startsWith('g_op_'): return handleOpacity(key, 'g_op_');
    case key.startsWith('gx_'): return handleGradient(key, 'gx_');
    case key.startsWith('gy_'): return handleGradient(key, 'gy_');
    case key.startsWith('gt_'): return handleGradient(key, 'gt_');
    case key.startsWith('gb_'): return handleGradient(key, 'gb_');
    case key.startsWith('gl_'): return handleGradient(key, 'gl_');
    case key.startsWith('gr_'): return handleGradient(key, 'gr_');
    default: return acc;
    }
  }, '');

const handleBackground = (key: string, match: string) => {
  const [color] = key.replace(match, '').split('_');
  return `background-color: #${color};`;
};

const background = (props: BackgroundProps) =>
  Object.keys(props).reduce((acc: string, key: string) => {
    switch (true) {
    case key.startsWith('bg_op_'): return handleOpacity(key, 'bg_op_');
    case key.startsWith('bg_'): return handleBackground(key, 'bg_');
    default: return acc;
    }
  }, '');

export const BackgroundStyle = styled.div<BackgroundProps>`
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    ${gradient}
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    ${({ bg_img }) => bg_img && `background-image: url(${bg_img});`}
    ${({ bg_repeat }) => bg_repeat && 'background-repeat: repeat;'}
    ${({ bg_norepeat }) => bg_norepeat && 'background-repeat: no-repeat;'}
    ${({ bg_auto }) => bg_auto && 'background-size: auto;'}
    ${({ bg_cover }) => bg_cover && 'background-size: cover;'}
    ${({ bg_contain }) => bg_contain && 'background-size: contain;'}
    ${({ bg_fixed }) => bg_fixed && 'background-attachment: fixed;'}
    ${({ bg_local }) => bg_local && 'background-attachment: local;'}
    ${({ bg_scroll }) => bg_scroll && 'background-attachment: scroll;'}
    ${background}
  }
`;
