import { handleColor, sym } from '../utils';

const handleBorder = ([size, style, ...colors]: string[]) =>
  `${size} ${style} ${handleColor(colors.join('_'))}`;

/**
 * Module for `border` options
 * @example
 * const Component = booleon.div(border);
 * @example
 * ```jsx
 * <Component bd_color_fff bd_radius_100$ />
 * ```
 */
export const border = {
  [sym('bd_$')]: ($: string) => `border:${handleBorder($.split('_'))};`,
  [sym('bdt_$')]: ($: string) => `border-top:${handleBorder($.split('_'))};`,
  [sym('bdb_$')]: ($: string) => `border-bottom:${handleBorder($.split('_'))};`,
  [sym('bdl_$')]: ($: string) => `border-left:${handleBorder($.split('_'))};`,
  [sym('bdr_$')]: ($: string) => `border-right:${handleBorder($.split('_'))};`,
  [sym('bdx_$')]: ($: string) =>
    `border-right:${handleBorder($.split('_'))};border-left:${handleBorder(
      $.split('_'),
    )};`,
  [sym('bdy_$')]: ($: string) =>
    `border-top:${handleBorder($.split('_'))};border-bottom:${handleBorder(
      $.split('_'),
    )};`,
  [sym('bd_color_$')]: ($: string) => `border-color:${handleColor($)};`,
  [sym('bdt_color_$')]: ($: string) => `border-top-color:${handleColor($)};`,
  [sym('bdb_color_$')]: ($: string) => `border-bottom-color:${handleColor($)};`,
  [sym('bdl_color_$')]: ($: string) => `border-left-color:${handleColor($)};`,
  [sym('bdr_color_$')]: ($: string) => `border-right-color:${handleColor($)};`,
  [sym('bdx_color_$')]: ($: string) =>
    `border-right-color:${handleColor($)};border-left-color:${handleColor($)};`,
  [sym('bdy_color_$')]: ($: string) =>
    `border-top-color:${handleColor($)};border-bottom-color:${handleColor($)};`,
  [sym('bd_width_$')]: ($: string) => `border-width:${$};`,
  [sym('bdt_width_$')]: ($: string) => `border-top-width:${$};`,
  [sym('bdb_width_$')]: ($: string) => `border-bottom-width:${$};`,
  [sym('bdl_width_$')]: ($: string) => `border-left-width:${$};`,
  [sym('bdr_width_$')]: ($: string) => `border-right-width:${$};`,
  [sym('bdx_width_$')]: ($: string) =>
    `border-left-width:${$};border-right-width:${$};`,
  [sym('bdy_width_$')]: ($: string) =>
    `border-top-width:${$};border-bottom-width:${$};`,
  [sym('bd_radius_$')]: ($: string) => `border-radius:${$};`,
  [sym('bdtr_radius_$')]: ($: string) => `border-top-right-radius:${$};`,
  [sym('bdtl_radius_$')]: ($: string) => `border-top-left-radius:${$};`,
  [sym('bdt_radius_$')]: ($: string) =>
    `border-top-left-radius:${$};border-top-right-radius:${$};`,
  [sym('bdbr_radius_$')]: ($: string) => `border-bottom-right-radius:${$};`,
  [sym('bdbl_radius_$')]: ($: string) => `border-bottom-left-radius:${$};`,
  [sym('bdb_radius_$')]: ($: string) =>
    `border-bottom-left-radius:${$};border-bottom-right-radius:${$};`,
  [sym('bdl_radius_$')]: ($: string) =>
    `border-bottom-left-radius:${$};border-top-left-radius:${$};`,
  [sym('bdr_radius_$')]: ($: string) =>
    `border-bottom-right-radius:${$};border-top-right-radius:${$};`,
  bd_style_none: () => 'border-style:none;',
  bd_style_hidden: () => 'border-style:hidden;',
  bd_style_dotted: () => 'border-style:dotted;',
  bd_style_dashed: () => 'border-style:dashed;',
  bd_style_solid: () => 'border-style:solid;',
  bd_style_double: () => 'border-style:double;',
  bd_style_groove: () => 'border-style:groove;',
  bd_style_ridge: () => 'border-style:ridge;',
  bd_style_inset: () => 'border-style:inset;',
  bd_style_outset: () => 'border-style:outset;',
  bd_style_initial: () => 'border-style:initial;',
  bd_style_inherit: () => 'border-style:inherit;',
  bdt_style_none: () => 'border-top-style:none;',
  bdt_style_hidden: () => 'border-top-style:hidden;',
  bdt_style_dotted: () => 'border-top-style:dotted;',
  bdt_style_dashed: () => 'border-top-style:dashed;',
  bdt_style_solid: () => 'border-top-style:solid;',
  bdt_style_double: () => 'border-top-style:double;',
  bdt_style_groove: () => 'border-top-style:groove;',
  bdt_style_ridge: () => 'border-top-style:ridge;',
  bdt_style_inset: () => 'border-top-style:inset;',
  bdt_style_outset: () => 'border-top-style:outset;',
  bdt_style_initial: () => 'border-top-style:initial;',
  bdt_style_inherit: () => 'border-top-style:inherit;',
  bdb_style_none: () => 'border-bottom-style:none;',
  bdb_style_hidden: () => 'border-bottom-style:hidden;',
  bdb_style_dotted: () => 'border-bottom-style:dotted;',
  bdb_style_dashed: () => 'border-bottom-style:dashed;',
  bdb_style_solid: () => 'border-bottom-style:solid;',
  bdb_style_double: () => 'border-bottom-style:double;',
  bdb_style_groove: () => 'border-bottom-style:groove;',
  bdb_style_ridge: () => 'border-bottom-style:ridge;',
  bdb_style_inset: () => 'border-bottom-style:inset;',
  bdb_style_outset: () => 'border-bottom-style:outset;',
  bdb_style_initial: () => 'border-bottom-style:initial;',
  bdb_style_inherit: () => 'border-bottom-style:inherit;',
  bdl_style_none: () => 'border-left-style:none;',
  bdl_style_hidden: () => 'border-left-style:hidden;',
  bdl_style_dotted: () => 'border-left-style:dotted;',
  bdl_style_dashed: () => 'border-left-style:dashed;',
  bdl_style_solid: () => 'border-left-style:solid;',
  bdl_style_double: () => 'border-left-style:double;',
  bdl_style_groove: () => 'border-left-style:groove;',
  bdl_style_ridge: () => 'border-left-style:ridge;',
  bdl_style_inset: () => 'border-left-style:inset;',
  bdl_style_outset: () => 'border-left-style:outset;',
  bdl_style_initial: () => 'border-left-style:initial;',
  bdl_style_inherit: () => 'border-left-style:inherit;',
  bdr_style_none: () => 'border-right-style:none;',
  bdr_style_hidden: () => 'border-right-style:hidden;',
  bdr_style_dotted: () => 'border-right-style:dotted;',
  bdr_style_dashed: () => 'border-right-style:dashed;',
  bdr_style_solid: () => 'border-right-style:solid;',
  bdr_style_double: () => 'border-right-style:double;',
  bdr_style_groove: () => 'border-right-style:groove;',
  bdr_style_ridge: () => 'border-right-style:ridge;',
  bdr_style_inset: () => 'border-right-style:inset;',
  bdr_style_outset: () => 'border-right-style:outset;',
  bdr_style_initial: () => 'border-right-style:initial;',
  bdr_style_inherit: () => 'border-right-style:inherit;',
  bdx_style_none: () => 'border-right-style:none;border-left-style:none;',
  bdx_style_hidden: () => 'border-right-style:hidden;border-left-style:hidden;',
  bdx_style_dotted: () => 'border-right-style:dotted;border-left-style:dotted;',
  bdx_style_dashed: () => 'border-right-style:dashed;border-left-style:dashed;',
  bdx_style_solid: () => 'border-right-style:solid;border-left-style:solid;',
  bdx_style_double: () => 'border-right-style:double;border-left-style:double;',
  bdx_style_groove: () => 'border-right-style:groove;border-left-style:groove;',
  bdx_style_ridge: () => 'border-right-style:ridge;border-left-style:ridge;',
  bdx_style_inset: () => 'border-right-style:inset;border-left-style:inset;',
  bdx_style_outset: () => 'border-right-style:outset;border-left-style:outset;',
  bdx_style_initial: () =>
    'border-right-style:initial;border-left-style:initial;',
  bdx_style_inherit: () =>
    'border-right-style:inherit;border-left-style:inherit;',
  bdy_style_none: () => 'border-top-style:none;border-bottom-style:none;',
  bdy_style_hidden: () => 'border-top-style:hidden;border-bottom-style:hidden;',
  bdy_style_dotted: () => 'border-top-style:dotted;border-bottom-style:dotted;',
  bdy_style_dashed: () => 'border-top-style:dashed;border-bottom-style:dashed;',
  bdy_style_solid: () => 'border-top-style:solid;border-bottom-style:solid;',
  bdy_style_double: () => 'border-top-style:double;border-bottom-style:double;',
  bdy_style_groove: () => 'border-top-style:groove;border-bottom-style:groove;',
  bdy_style_ridge: () => 'border-top-style:ridge;border-bottom-style:ridge;',
  bdy_style_inset: () => 'border-top-style:inset;border-bottom-style:inset;',
  bdy_style_outset: () => 'border-top-style:outset;border-bottom-style:outset;',
  bdy_style_initial: () =>
    'border-top-style:initial;border-bottom-style:initial;',
  bdy_style_inherit: () =>
    'border-top-style:inherit;border-bottom-style:inherit;',
  bd_collapse: () => 'border-collapse:collapse;',
  bd_separate: () => 'border-collapse:separate;',
  bd_none: () => 'border:none;',
  bdt_none: () => 'border-top:none;',
  bdb_none: () => 'border-bottom:none;',
  bdl_none: () => 'border-left:none;',
  bdr_none: () => 'border-right:none;',
  bdx_none: () => 'border-right:none;border-left:none;',
  bdy_none: () => 'border-top:none;border-bottom:none;',
};
