import { TransformProps } from './interfaces';
import { css } from 'styled-components';
import { reducer } from '../../utils/reducer';

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
  ${reducer([
    [/^(sl_)(\d+)/, (value: string) => `transform: scale(${value}rem,${value}rem);`],
    [/^(slx_)(\d+)/, (value: string) => `transform: scaleX(${value}rem);`],
    [/^(sly_)(\d+)/, (value: string) => `transform: scaleY(${value}rem);`],
    [/^(rt_)(\d+)/, (value: string) => `transform: rotate(${value}deg);`],
    [/^(tl_)(\d+)/, (value: string) => `transform: translate(${value}rem,${value}rem);`],
    [/^(tlx_)(\d+)/, (value: string) => `transform: translateX(${value}rem);`],
    [/^(tly_)(\d+)/, (value: string) => `transform: translateY(${value}rem);`],
    [/^(sk_)(\d+)/, (value: string) => `transform: skew(${value}deg,${value}deg);`],
    [/^(skx_)(\d+)/, (value: string) => `transform: skewX(${value}deg);`],
    [/^(sky_)(\d+)/, (value: string) => `transform: skewY(${value}deg);`],
    [/^(sk_neg_)(\d+)/, (value: string) => `transform: skew(-${value}deg,-${value}deg);`],
    [/^(skx_neg_)(\d+)/, (value: string) => `transform: skewX(-${value}deg);`],
    [/^(sky_neg_)(\d+)/, (value: string) => `transform: skewY(-${value}deg);`],
    [/^(sl_neg_)(\d+)/, (value: string) => `transform: scale(-${value}rem,-${value}rem);`],
    [/^(slx_neg_)(\d+)/, (value: string) => `transform: scaleX(-${value}rem);`],
    [/^(sly_neg_)(\d+)/, (value: string) => `transform: scaleY(-${value}rem);`],
    [/^(rt_neg_)(\d+)/, (value: string) => `transform: rotate(-${value}deg);`],
    [/^(tl_neg_)(\d+)/, (value: string) => `transform: translate(-${value}rem,-${value}rem);`],
    [/^(tlx_neg_)(\d+)/, (value: string) => `transform: translateX(-${value}rem);`],
    [/^(tly_neg_)(\d+)/, (value: string) => `transform: translateY(-${value}rem);`],
  ])}
`;