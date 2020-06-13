import styled from 'styled-components';

const linearGradient = (position: string, color: string) =>
  `background-image: linear-gradient(${position}, transparent, ${color});`;

const linearGradientX = (color: string) =>
  `background-image: linear-gradient(to right, ${color}, transparent, ${color});`;

const linearGradientY = (color: string) =>
  `background-image: linear-gradient(to top, ${color}, transparent, ${color});`;

export const BackgroundStyle = styled.div<any>`
  position: relative;
  ::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: -1;
    ${({ g_op_0 }) => g_op_0 && 'opacity: 0;'}
    ${({ g_op_10 }) => g_op_10 && 'opacity: .1;'}
    ${({ g_op_20 }) => g_op_20 && 'opacity: .2;'}
    ${({ g_op_30 }) => g_op_30 && 'opacity: .3;'}
    ${({ g_op_40 }) => g_op_40 && 'opacity: .4;'}
    ${({ g_op_50 }) => g_op_50 && 'opacity: .5;'}
    ${({ g_op_60 }) => g_op_60 && 'opacity: .6;'}
    ${({ g_op_70 }) => g_op_70 && 'opacity: .7;'}
    ${({ g_op_80 }) => g_op_80 && 'opacity: .8;'}
    ${({ g_op_90 }) => g_op_90 && 'opacity: .9;'}
    ${({ g_op_100 }) => g_op_100 && 'opacity: 1;'}
    ${({ gx_black }) => gx_black && linearGradientX('#000')}
    ${({ gy_black }) => gy_black && linearGradientY('#000')}
    ${({ gt_black }) => gt_black && linearGradient('to top', '#000')}
    ${({ gb_black }) => gb_black && linearGradient('to bottom', '#000')}
    ${({ gl_black }) => gl_black && linearGradient('to left', '#000')}
    ${({ gr_black }) => gr_black && linearGradient('to right', '#000')}
    ${({ gx_white }) => gx_white && linearGradientX('#fff')}
    ${({ gy_white }) => gy_white && linearGradientY('#fff')}
    ${({ gt_white }) => gt_white && linearGradient('to top', '#fff')}
    ${({ gb_white }) => gb_white && linearGradient('to bottom', '#fff')}
    ${({ gl_white }) => gl_white && linearGradient('to left', '#fff')}
    ${({ gr_white }) => gr_white && linearGradient('to right', '#fff')}
    ${({ gx_grey }) => gx_grey && linearGradientX('#cbd5e0')}
    ${({ gy_grey }) => gy_grey && linearGradientY('#cbd5e0')}
    ${({ gt_grey }) => gt_grey && linearGradient('to top', '#cbd5e0')}
    ${({ gb_grey }) => gb_grey && linearGradient('to bottom', '#cbd5e0')}
    ${({ gl_grey }) => gl_grey && linearGradient('to left', '#cbd5e0')}
    ${({ gr_grey }) => gr_grey && linearGradient('to right', '#cbd5e0')}
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
    ${({ bg_black }) => bg_black && 'background-color: #000;'}
    ${({ bg_white }) => bg_white && 'background-color: #fff;'}
    ${({ bg_grey }) => bg_grey && 'background-color: #cbd5e0;'}
    ${({ bg_op_0 }) => bg_op_0 && 'opacity: 0;'}
    ${({ bg_op_10 }) => bg_op_10 && 'opacity: .1;'}
    ${({ bg_op_20 }) => bg_op_20 && 'opacity: .2;'}
    ${({ bg_op_30 }) => bg_op_30 && 'opacity: .3;'}
    ${({ bg_op_40 }) => bg_op_40 && 'opacity: .4;'}
    ${({ bg_op_50 }) => bg_op_50 && 'opacity: .5;'}
    ${({ bg_op_60 }) => bg_op_60 && 'opacity: .6;'}
    ${({ bg_op_70 }) => bg_op_70 && 'opacity: .7;'}
    ${({ bg_op_80 }) => bg_op_80 && 'opacity: .8;'}
    ${({ bg_op_90 }) => bg_op_90 && 'opacity: .9;'}
    ${({ bg_op_100 }) => bg_op_100 && 'opacity: 1;'}
  }
`;
