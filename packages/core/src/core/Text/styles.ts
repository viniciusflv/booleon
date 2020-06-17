import { Base } from '../Base';
import { TextProps } from './interfaces';
import styled from 'styled-components';

const getKeyValues = (key: string) => key.split('_')[1];

const fontStroke = (key: string) => {
  const color = getKeyValues(key);
  return ` text-shadow:
    -1px 0 #${color},
    0 1px #${color},
    1px 0 #${color},
    0 -1px #${color};
  `;
};

const fontColor = (key: string) => {
  const color = getKeyValues(key);
  return `color: #${color};`;
};

const handleDynamic = (props: TextProps) =>
  Object.keys(props).reduce((acc: string, key: string) => {
    if (key.startsWith('fs_')) acc += fontStroke(key);
    if (key.startsWith('fc_')) acc += fontColor(key);
    return acc;
  }, '');

export const TextStyle = styled(Base.withComponent('span'))<TextProps>`
  font-stretch: inherit;
  font-family: inherit;
  word-spacing: inherit;
  text-align: inherit;
  text-indent: inherit;
  text-shadow: inherit;
  text-transform: inherit;
  text-decoration: none;
  font-size: 1rem;
  font-weight: inherit;
  font-style: inherit;
  color: inherit;
  word-break: inherit;
  white-space: inherit;
  direction: inherit;
  letter-spacing: inherit;
  line-height: unset;
  margin: 0;
  padding: 0;
  ${handleDynamic}
  ${({ f_sans }) =>
    f_sans &&
    'font-family: Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;'}
  ${({ f_serif }) =>
    f_serif &&
    'font-family: Georgia, Cambria, "Times New Roman", Times, serif;'}
  ${({ f_mono }) =>
    f_mono &&
    'font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'}
  ${({ f_italic }) => f_italic && 'font-style: italic;'}
  ${({ f_xs }) => f_xs && 'font-size: 1rem;'}
  ${({ f_sm }) => f_sm && 'font-size: 2rem;'}
  ${({ f_md }) => f_md && 'font-size: 3rem;'}
  ${({ f_lg }) => f_lg && 'font-size: 4rem;'}
  ${({ f_xl }) => f_xl && 'font-size: 5rem;'}
  ${({ fw_thinnest }) => fw_thinnest && 'font-weight: 100;'}
  ${({ fw_thin }) => fw_thin && 'font-weight: 200;'}
  ${({ fw_light }) => fw_light && 'font-weight: 300;'}
  ${({ fw_normal }) => fw_normal && 'font-weight: 400;'}
  ${({ fw_medium }) => fw_medium && 'font-weight: 500;'}
  ${({ fw_semibold }) => fw_semibold && 'font-weight: 600;'}
  ${({ fw_bold }) => fw_bold && 'font-weight: 700;'}
  ${({ fw_bolder }) => fw_bolder && 'font-weight: 800;'}
  ${({ fw_black }) => fw_black && 'font-weight: 900;'}
  ${({ ls_tighter }) => ls_tighter && 'letter-spacing: -0.05em;'}
  ${({ ls_tight }) => ls_tight && 'letter-spacing: -0.025em;'}
  ${({ ls_normal }) => ls_normal && 'letter-spacing: 0;'}
  ${({ ls_wide }) => ls_wide && 'letter-spacing: 0.025em;'}
  ${({ ls_wider }) => ls_wider && 'letter-spacing: 0.05em;'}
  ${({ ls_widest }) => ls_widest && 'letter-spacing: 0.1em;'}
  ${({ lh_none }) => lh_none && 'line-height: 1;'}
  ${({ lh_tight }) => lh_tight && 'line-height: 1.25;'}
  ${({ lh_snug }) => lh_snug && 'line-height: 1.375;'}
  ${({ lh_normal }) => lh_normal && 'line-height: 1.5;'}
  ${({ lh_relaxed }) => lh_relaxed && 'line-height: 1.625;'}
  ${({ lh_loose }) => lh_loose && 'line-height: 2;'}
  ${({ li_none }) => li_none && 'list-style-type: none;'}
  ${({ li_disc }) => li_disc && 'list-style-type: disc;'}
  ${({ li_decimal }) => li_decimal && 'list-style-type: decimal;'}
  ${({ li_inside }) => li_inside && 'list-style-position: inside;'}
  ${({ li_outside }) => li_outside && 'list-style-position: outside;'}
  ${({ f_left }) => f_left && 'text-align: left;'}
  ${({ f_center }) => f_center && 'text-align: center;'}
  ${({ f_right }) => f_right && 'text-align: right;'}
  ${({ f_justify }) => f_justify && 'text-align: justify;'}
  ${({ f_underline }) => f_underline && 'text-decoration: underline;'}
  ${({ f_line_through }) => f_line_through && 'text-decoration: line-through;'}
  ${({ f_no_underline }) => f_no_underline && 'text-decoration: none;'}
  ${({ ft_uppercase }) => ft_uppercase && 'text-transform: uppercase;'}
  ${({ ft_lowercase }) => ft_lowercase && 'text-transform: lowercase;'}
  ${({ ft_capitalize }) => ft_capitalize && 'text-transform: capitalize;'}
  ${({ ft_normal }) => ft_normal && 'text-transform: none;'}
  ${({ f_wrap_space }) => f_wrap_space && 'white-space: normal;'}
  ${({ f_wrap_word }) => f_wrap_word && 'overflow-wrap: break-word;'}
  ${({ f_wrap_letter }) => f_wrap_letter && 'word-break: break-all;'}
  ${({ f_no_wrap }) =>
    f_no_wrap &&
    `
    white-space: nowrap;
    word-break: normal;
    overflow-wrap: normal;
  `}
  ${({ f_truncate }) =>
    f_truncate &&
    `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;
