import { TransformProps } from './interfaces';
import { css } from 'styled-components';

const scale = /sl_\d/g;
const scaleX = /slx_\d/g;
const scaleY = /sly_\d/g;
const rotate = /rt_\d/g;
const translate = /tl_\d/g;
const translateX = /tlx_\d/g;
const translateY = /tly_\d/g;
const skew = /sk_\d/g;
const skewX = /skx_\d/g;
const skewY = /sky_\d/g;

const dynamic = (props: any) => Object.keys(props).reduce((acc, key) => {
  const splitted = key.split('_');
  const value = splitted[splitted.length - 1];
  if (key.match(scale)) acc += `transform: scale(${value}rem,${value}rem);`;
  if (key.match(scaleX)) acc += `transform: scaleX(${value}rem);`;
  if (key.match(scaleY)) acc += `transform: scaleY(${value}rem);`;
  if (key.match(rotate)) acc += `transform: rotate(${value}deg);`;
  if (key.match(translate)) acc += `transform: translate(${value}rem,${value}rem);`;
  if (key.match(translateX)) acc += `transform: translateX(${value}rem);`;
  if (key.match(translateY)) acc += `transform: translateY(${value}rem);`;
  if (key.match(skew)) acc += `transform: skew(${value}deg,${value}deg);`;
  if (key.match(skewX)) acc += `transform: skewX(${value}deg);`;
  if (key.match(skewY)) acc += `transform: skewY(${value}deg);`;
  if (key.startsWith('sk_neg')) acc += `transform: skew(-${value}deg,-${value}deg);`;
  if (key.startsWith('skx_neg')) acc += `transform: skewX(-${value}deg);`;
  if (key.startsWith('sky_neg')) acc += `transform: skewY(-${value}deg);`;
  if (key.startsWith('sl_neg')) acc += `transform: scale(-${value}rem,-${value}rem);`;
  if (key.startsWith('slx_neg')) acc += `transform: scaleX(-${value}rem);`;
  if (key.startsWith('sly_neg')) acc += `transform: scaleY(-${value}rem);`;
  if (key.startsWith('rt_neg')) acc += `transform: rotate(-${value}deg);`;
  if (key.startsWith('tl_neg')) acc += `transform: translate(-${value}rem,-${value}rem);`;
  if (key.startsWith('tlx_neg')) acc += `transform: translateX(-${value}rem);`;
  if (key.startsWith('tly_neg')) acc += `transform: translateY(-${value}rem);`;
  return acc;
}, '');

export const transformCss = css<TransformProps>`
  ${({ tl_full }) => tl_full && 'transform: translate(100%, 100%);'}
  ${({ tl_half }) => tl_half && 'transform: translate(50%, 50%);'}
  ${({ tl_full_neg }) => tl_full_neg && 'transform: translate(-100%, -100%);'}
  ${({ tl_half_neg }) => tl_half_neg && 'transform: translate(-50%, -50%);'}
  ${({ tlx_full }) => tlx_full && 'transform: translateX(100%);'}
  ${({ tlx_half }) => tlx_half && 'transform: translateX(50%);'}
  ${({ tlx_full_neg }) => tlx_full_neg && 'transform: translateX(-100%);'}
  ${({ tlx_half_neg }) => tlx_half_neg && 'transform: translateX(-50%);'}
  ${({ tly_full }) => tly_full && 'transform: translateY(100%);'}
  ${({ tly_half }) => tly_half && 'transform: translateY(50%);'}
  ${({ tly_full_neg }) => tly_full_neg && 'transform: translateY(-100%);'}
  ${({ tly_half_neg }) => tly_half_neg && 'transform: translateY(-50%);'}
  ${({ ori_center }) => ori_center &&	'transform-origin: center;'}
  ${({ ori_top }) => ori_top &&	'transform-origin: top;'}
  ${({ ori_top_right }) => ori_top_right &&	'transform-origin: top right;'}
  ${({ ori_right }) => ori_right &&	'transform-origin: right;'}
  ${({ ori_bottom_right }) => ori_bottom_right &&	'transform-origin: bottom right;'}
  ${({ ori_bottom }) => ori_bottom &&	'transform-origin: bottom;'}
  ${({ ori_bottom_left }) => ori_bottom_left &&	'transform-origin: bottom left;'}
  ${({ ori_left }) => ori_left &&	'transform-origin: left;'}
  ${({ ori_top_left }) => ori_top_left &&	'transform-origin: top left;'}
  ${dynamic}
`;