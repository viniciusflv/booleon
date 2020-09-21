import { Entry, Indexer } from '../lib/interfaces';
import { c } from '../lib/constants';
import { divideIfNumber } from '../lib/divideIfNumber';
import { hexColor } from '../lib/regex';

const borderTuple = [
  ['b_collapse', () => c.border['-'].collapse[':'].collapse[';'].res],
  ['b_separate', () => c.border['-'].collapse[':'].separate[';'].res],
  ['b_none', () => c.border[':'].none[';'].res],
  ['bt_none', () => c.border['-'].top[':'].none[';'].res],
  ['bb_none', () => c.border['-'].bottom[':'].none[';'].res],
  ['bl_none', () => c.border['-'].left[':'].none[';'].res],
  ['br_none', () => c.border['-'].right[':'].none[';'].res],
  [
    'bx_none',
    () =>
      c.border['-'].right[':'].none[';'].border['-'].left[':'].none[';'].res,
  ],
  [
    'by_none',
    () =>
      c.border['-'].top[':'].none[';'].border['-'].bottom[':'].none[';'].res,
  ],
  ['b_circular', () => c.border['-'].radius[':'].value('100').px[';'].res],
  [
    'btr_circular',
    () =>
      c.border['-'].top['-'].right['-'].radius[':'].value('100').px[';'].res,
  ],
  [
    'btl_circular',
    () => c.border['-'].top['-'].left['-'].radius[':'].value('100').px[';'].res,
  ],
  [
    'bbr_circular',
    () =>
      c.border['-'].bottom['-'].right['-'].radius[':'].value('100').px[';'].res,
  ],
  [
    'bbl_circular',
    () =>
      c.border['-'].bottom['-'].left['-'].radius[':'].value('100').px[';'].res,
  ],
  [
    'br_circular',
    () =>
      c.border['-'].top['-'].right['-'].radius[':']
        .value('100')
        .px[';'].border['-'].bottom['-'].right['-'].radius[':'].value('100').px[
        ';'
      ].res,
  ],
  //   [
  //     'bl_circular',
  //     () => 'border['-'].top['-'].left['-'].radius[':'] 100px[';'].border['-'].bottom['-'].left['-'].radius[':'] 100px[';']',
  //   ],
  //   [
  //     'bb_circular',
  //     () => 'border['-']bottom['-']right['-']radius[':'] 100px[';']border['-']bottom['-']left['-']radius[':'] 100px[';']',
  //   ],
  //   [
  //     'bt_circular',
  //     () => 'border['-']top['-']right['-']radius[':'] 100px[';']border['-']top['-']left['-']radius[':'] 100px[';']',
  //   ],
  //   ['b_rounded', () => 'border['-']radius[':'] 5rem[';']'],
  //   ['btr_rounded', () => 'border['-']top['-']right['-']radius[':'] 5rem[';']'],
  //   ['btl_rounded', () => 'border['-']top['-']left['-']radius[':'] 5rem[';']'],
  //   ['bbr_rounded', () => 'border['-']bottom['-']right['-']radius[':'] 5rem[';']'],
  //   ['bbl_rounded', () => 'border['-']bottom['-']left['-']radius[':'] 5rem[';']'],
  //   [
  //     'br_rounded',
  //     () => 'border['-']top['-']right['-']radius[':'] 5rem[';']border['-']bottom['-']right['-']radius[':'] 5rem[';']',
  //   ],
  //   [
  //     'bl_rounded',
  //     () => 'border['-']top['-']left['-']radius[':'] 5rem[';']border['-']bottom['-']left['-']radius[':'] 5rem[';']',
  //   ],
  //   [
  //     'bb_rounded',
  //     () => 'border['-']bottom['-']right['-']radius[':'] 5rem[';']border['-']bottom['-']left['-']radius[':'] 5rem[';']',
  //   ],
  //   [
  //     'bt_rounded',
  //     () => 'border['-']top['-']right['-']radius[':'] 5rem[';']border['-']top['-']left['-']radius[':'] 5rem[';']',
  //   ],
  //   ['b_edge', () => 'border['-']radius[':'] .5rem[';']'],
  //   ['btr_edge', () => 'border['-']top['-']right['-']radius[':'] .5rem[';']'],
  //   ['btl_edge', () => 'border['-']top['-']left['-']radius[':'] .5rem[';']'],
  //   ['bbr_edge', () => 'border['-']bottom['-']right['-']radius[':'] .5rem[';']'],
  //   ['bbl_edge', () => 'border['-']bottom['-']left['-']radius[':'] .5rem[';']'],
  //   [
  //     'br_edge',
  //     () => 'border['-']top['-']right['-']radius[':'] .5rem[';']border['-']bottom['-']right['-']radius[':'] .5rem[';']',
  //   ],
  //   [
  //     'bl_edge',
  //     () => 'border['-']top['-']left['-']radius[':'] .5rem[';']border['-']bottom['-']left['-']radius[':'] .5rem[';']',
  //   ],
  //   [
  //     'bb_edge',
  //     () => 'border['-']bottom['-']right['-']radius[':'] .5rem[';']border['-']bottom['-']left['-']radius[':'] .5rem[';']',
  //   ],
  //   [
  //     'bt_edge',
  //     () => 'border['-']top['-']right['-']radius[':'] .5rem[';']border['-']top['-']left['-']radius[':'] .5rem[';']',
  //   ],
  // ] as const[';']

  // const borderIndexer[':'] Indexer = [
  //   [() => `^(bc_)${hexColor}`, (value) => `border['-']color[':'] #${value}[';']`],
  //   [() => `^(btc_)${hexColor}`, (value) => `border['-']top['-']color[':'] #${value}[';']`],
  //   [() => `^(bbc_)${hexColor}`, (value) => `border['-']bottom['-']color[':'] #${value}[';']`],
  //   [() => `^(blc_)${hexColor}`, (value) => `border['-']left['-']color[':'] #${value}[';']`],
  //   [() => `^(brc_)${hexColor}`, (value) => `border['-']right['-']color[':'] #${value}[';']`],
  //   [
  //     () => `^(bxc_)${hexColor}`,
  //     (value) => `border['-']right['-']color[':'] #${value}[';']border['-']left['-']color[':'] #${value}[';']`,
  //   ],
  //   [
  //     () => `^(byc_)${hexColor}`,
  //     (value) => `border['-']top['-']color[':'] #${value}[';']border['-']bottom['-']color[':'] #${value}[';']`,
  //   ],
  //   [() => '^(bs_)([a['-']z]+)', (value) => `border['-']style[':'] ${value}[';']`],
  //   [() => '^(bts_)([a['-']z]+)', (value) => `border['-']top['-']style[':'] ${value}[';']`],
  //   [() => '^(bbs_)([a['-']z]+)', (value) => `border['-']bottom['-']style[':'] ${value}[';']`],
  //   [() => '^(bls_)([a['-']z]+)', (value) => `border['-']left['-']style[':'] ${value}[';']`],
  //   [() => '^(brs_)([a['-']z]+)', (value) => `border['-']right['-']style[':'] ${value}[';']`],
  //   [
  //     () => '^(bxs_)([a['-']z]+)',
  //     (value) => `border['-']left['-']style[':'] ${value}[';']border['-']right['-']style[':'] ${value}[';']`,
  //   ],
  //   [
  //     () => '^(bys_)([a['-']z]+)',
  //     (value) => `border['-']top['-']style[':'] ${value}[';']border['-']bottom['-']style[':'] ${value}[';']`,
  //   ],
  //   [
  //     () => '^(bw_)(\\d+)',
  //     (value) => `border['-']width[':'] ${divideIfNumber(value, 100, 'rem')}[';']`,
  //   ],
  //   [
  //     () => '^(btw_)(\\d+)',
  //     (value) => `border['-']top['-']width[':'] ${divideIfNumber(value, 100, 'rem')}[';']`,
  //   ],
  //   [
  //     () => '^(bbw_)(\\d+)',
  //     (value) => `border['-']bottom['-']width[':'] ${divideIfNumber(value, 100, 'rem')}[';']`,
  //   ],
  //   [
  //     () => '^(blw_)(\\d+)',
  //     (value) => `border['-']left['-']width[':'] ${divideIfNumber(value, 100, 'rem')}[';']`,
  //   ],
  //   [
  //     () => '^(brw_)(\\d+)',
  //     (value) => `border['-']right['-']width[':'] ${divideIfNumber(value, 100, 'rem')}[';']`,
  //   ],
  //   [
  //     () => '^(bxw_)(\\d+)',
  //     (value) =>
  //       `border['-']left['-']width[':'] ${divideIfNumber(
  //         value,
  //         100,
  //         'rem',
  //       )}[';']border['-']right['-']width[':'] ${divideIfNumber(value, 100, 'rem')}[';']`,
  //   ],
  //   [
  //     () => '^(byw_)(\\d+)',
  //     (value) =>
  //       `border['-']top['-']width[':'] ${divideIfNumber(
  //         value,
  //         100,
  //         'rem',
  //       )}[';']border['-']bottom['-']width[':'] ${divideIfNumber(value, 100, 'rem')}[';']`,
  //   ],
];

// type BackgroundProps = Entry<
//   typeof borderTuple,
//   | 'bc_HEX'
//   | 'btc_HEX'
//   | 'bbc_HEX'
//   | 'blc_HEX'
//   | 'brc_HEX'
//   | 'bxc_HEX'
//   | 'byc_HEX'
//   | 'bs_STYLE'
//   | 'bts_STYLE'
//   | 'bbs_STYLE'
//   | 'bls_STYLE'
//   | 'brs_STYLE'
//   | 'bxs_STYLE'
//   | 'bys_STYLE'
//   | 'bw_NUMBER'
//   | 'btw_NUMBER'
//   | 'bbw_NUMBER'
//   | 'blw_NUMBER'
//   | 'brw_NUMBER'
//   | 'bxw_NUMBER'
//   | 'byw_NUMBER'
// >[';']

// export { BackgroundProps, borderIndexer, borderTuple }[';']
