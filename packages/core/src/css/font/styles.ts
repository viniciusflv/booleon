import { css } from 'styled-components';
import FontProps from './interfaces';
// import { reducer } from '../../utils/reducer';
// ${reducer([
//   [/^(fb_)([A-z0-9]+)/, (value: string) => `
//     text-shadow:
//     -1px 0 #${value},
//     0 1px #${value},
//     1px 0 #${value},
//     0 -1px #${value};
//   `],
//   [/^(fc_)([A-z0-9]+)/, (value: string) => `color: #${value};`],
//   [/^(fs_)([A-z0-9]+)/, (value: string) => `font-size: ${Number(value)/10}rem;`],
// ])}

export default css<FontProps>`
  ${({ ff_sans }) => ff_sans && 'font-family: Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif;'}
  ${({ ff_serif }) => ff_serif && 'font-family: Georgia, Cambria, "Times New Roman", Times, serif;'}
  ${({ ff_mono }) => ff_mono && 'font-family: Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;'}
  ${({ fsl_none }) => fsl_none && 'user-select: none;'}
  ${({ fsl_text }) => fsl_text && 'user-select: text;'}
  ${({ fsl_all }) => fsl_all && 'user-select: all;'}
  ${({ fsl_auto }) => fsl_auto && 'user-select: auto;'}
  ${({ f_italic }) => f_italic && 'font-style: italic;'}
  ${({ fw_lightest }) => fw_lightest && 'font-weight: 100;'}
  ${({ fw_lighter }) => fw_lighter && 'font-weight: 200;'}
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
  ${({ f_no_wrap }) => f_no_wrap && `
    white-space: nowrap;
    word-break: normal;
    overflow-wrap: normal;
  `}
  ${({ f_truncate }) => f_truncate && `
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  `}
`;