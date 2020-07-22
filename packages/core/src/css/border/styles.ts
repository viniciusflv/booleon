import { css } from 'styled-components';
import { reducerCss } from '../../helpers/reducer';
import BorderProps from './interfaces';

const replicateForPseudo = (style: string) =>
  `${style} ::before, ::after { ${style} }`;

const borderCss = css<BorderProps>`
  ${reducerCss([
    [/^(bc_)([A-z0-9]+)/, (value: string) => `border-color: #${value};`],
    [/^(btc_)([A-z0-9]+)/, (value: string) => `border-top-color: #${value};`],
    [/^(bbc_)([A-z0-9]+)/, (value: string) => `border-bottom-color: #${value};`],
    [/^(blc_)([A-z0-9]+)/, (value: string) => `border-left-color: #${value};`],
    [/^(brc_)([A-z0-9]+)/, (value: string) => `border-right-color: #${value};`],
    [/^(bxc_)([A-z0-9]+)/, (value: string) => `
      border-right-color: #${value};
      border-left-color: #${value};
    `],
    [/^(byc_)([A-z0-9]+)/, (value: string) => `
      border-top-color: #${value};
      border-bottom-color: #${value};
    `],
  ])}
  border: 0 solid #000;
  ${({ b_collapse }) => b_collapse && 'border-collapse: collapse;'}
  ${({ b_separate }) => b_separate && 'border-collapse: separate;'}
  ${({ b_none }) => b_none && 'border: none;'}
  ${({ b_solid }) => b_solid && 'border-style: solid;'}
  ${({ b_dashed }) => b_dashed && 'border-style: dashed;'}
  ${({ b_dotted }) => b_dotted && 'border-style: dotted;'}
  ${({ b_double }) => b_double && 'border-style: double;'}
  ${({ b_circular }) =>
    b_circular && replicateForPseudo('border-radius: 100px;')}
  ${({ b_rounded }) => b_rounded && replicateForPseudo('border-radius: 2rem;')}
  ${({ b_edge }) => b_edge && replicateForPseudo('border-radius: .5rem;')}
  ${({ b_thick }) => b_thick && 'border-width: .5rem;'}
  ${({ b_thin }) => b_thin && 'border-width: .05rem;'}
  ${({ bx_none }) => bx_none && 'border-right: none;border-left:none;'}
  ${({ bx_solid }) =>
    bx_solid && 'border-right-style: solid;border-left-style: solid;'}
  ${({ bx_dashed }) =>
    bx_dashed && 'border-right-style: dashed;border-left-style: dashed;'}
  ${({ bx_dotted }) =>
    bx_dotted && 'border-right-style: dotted;border-left-style: dotted;'}
  ${({ bx_double }) =>
    bx_double && 'border-right-style: double;border-left-style: double;'}
  ${({ bx_thick }) =>
    bx_thick && 'border-right-width: .5rem;border-left-width: .5rem;'}
  ${({ bx_thin }) =>
    bx_thin && 'border-right-width: .05rem;border-left-width: .05rem;'}
  ${({ by_none }) => by_none && 'border-top: none;border-bottom:none;'}
  ${({ by_solid }) =>
    by_solid && 'border-top-style: solid;border-bottom-style: solid;'}
  ${({ by_dashed }) =>
    by_dashed && 'border-top-style: dashed;border-bottom-style: dashed;'}
  ${({ by_dotted }) =>
    by_dotted && 'border-top-style: dotted;border-bottom-style: dotted;'}
  ${({ by_double }) =>
    by_double && 'border-top-style: double;border-bottom-style: double;'}
  ${({ by_thick }) =>
    by_thick && 'border-top-width: .5rem;border-bottom-width: .5rem;'}
  ${({ by_thin }) =>
    by_thin && 'border-top-width: .05rem;border-bottom-width: .05rem;'}
  ${({ bt_none }) => bt_none && 'border-top: none;'}
  ${({ bt_solid }) => bt_solid && 'border-top-style: solid;'}
  ${({ bt_dashed }) => bt_dashed && 'border-top-style: dashed;'}
  ${({ bt_dotted }) => bt_dotted && 'border-top-style: dotted;'}
  ${({ bt_double }) => bt_double && 'border-top-style: double;'}
  ${({ bt_circular }) =>
    bt_circular &&
    replicateForPseudo(
      'border-top-right-radius: 100px;border-top-left-radius: 100px;',
    )}
  ${({ bt_rounded }) =>
    bt_rounded &&
    replicateForPseudo(
      'border-top-right-radius: 2rem;border-top-left-radius: 2rem;',
    )}
  ${({ bt_edge }) =>
    bt_edge &&
    replicateForPseudo(
      'border-top-right-radius: .5rem;border-top-left-radius: .5rem;',
    )}
  ${({ bt_thick }) => bt_thick && 'border-top-width: .5rem;'}
  ${({ bt_thin }) => bt_thin && 'border-top-width: .05rem;'}
  ${({ bb_none }) => bb_none && 'border-bottom:none;'}
  ${({ bb_solid }) => bb_solid && 'border-bottom-style: solid;'}
  ${({ bb_dashed }) => bb_dashed && 'border-bottom-style: dashed;'}
  ${({ bb_dotted }) => bb_dotted && 'border-bottom-style: dotted;'}
  ${({ bb_double }) => bb_double && 'border-bottom-style: double;'}
  ${({ bb_circular }) =>
    bb_circular &&
    replicateForPseudo(
      'border-bottom-right-radius: 100px;border-bottom-left-radius: 100px;',
    )}
  ${({ bb_rounded }) =>
    bb_rounded &&
    replicateForPseudo(
      'border-bottom-right-radius: 2rem;border-bottom-left-radius: 2rem;',
    )}
  ${({ bb_edge }) =>
    bb_edge &&
    replicateForPseudo(
      'border-bottom-right-radius: .5rem;border-bottom-left-radius: .5rem;',
    )}
  ${({ bb_thick }) => bb_thick && 'border-bottom-width: .5rem;'}
  ${({ bb_thin }) => bb_thin && 'border-bottom-width: .05rem;'}
  ${({ bl_none }) => bl_none && 'border-left:none;'}
  ${({ bl_solid }) => bl_solid && 'border-left-style: solid;'}
  ${({ bl_dashed }) => bl_dashed && 'border-left-style: dashed;'}
  ${({ bl_dotted }) => bl_dotted && 'border-left-style: dotted;'}
  ${({ bl_double }) => bl_double && 'border-left-style: double;'}
  ${({ bl_circular }) =>
    bl_circular &&
    replicateForPseudo(
      'border-top-left-radius: 100px;border-bottom-left-radius: 100px;',
    )}
  ${({ bl_rounded }) =>
    bl_rounded &&
    replicateForPseudo(
      'border-top-left-radius: 2rem;border-bottom-left-radius: 2rem;',
    )}
  ${({ bl_edge }) =>
    bl_edge &&
    replicateForPseudo(
      'border-top-left-radius: .5rem;border-bottom-left-radius: .5rem;',
    )}
  ${({ bl_thick }) => bl_thick && 'border-left-width: .5rem;'}
  ${({ bl_thin }) => bl_thin && 'border-left-width: .05rem;'}
  ${({ br_none }) => br_none && 'border-right:none;'}
  ${({ br_solid }) => br_solid && 'border-right-style: solid;'}
  ${({ br_dashed }) => br_dashed && 'border-right-style: dashed;'}
  ${({ br_dotted }) => br_dotted && 'border-right-style: dotted;'}
  ${({ br_double }) => br_double && 'border-right-style: double;'}
  ${({ br_circular }) =>
    br_circular &&
    replicateForPseudo(
      'border-top-right-radius: 100px;border-bottom-right-radius: 100px;',
    )}
  ${({ br_rounded }) =>
    br_rounded &&
    replicateForPseudo(
      'border-top-right-radius: 2rem;border-bottom-right-radius: 2rem;',
    )}
  ${({ br_edge }) =>
    br_edge &&
    replicateForPseudo(
      'border-top-right-radius: .5rem;border-bottom-right-radius: .5rem;',
    )}
  ${({ br_thick }) => br_thick && 'border-right-width: .5rem;'}
  ${({ br_thin }) => br_thin && 'border-right-width: .05rem;'}
  ${({ btr_circular }) =>
    btr_circular && replicateForPseudo('border-top-right-radius: 100px;')}
  ${({ btr_rounded }) =>
    btr_rounded && replicateForPseudo('border-top-right-radius: 2rem;')}
  ${({ btr_edge }) =>
    btr_edge && replicateForPseudo('border-top-right-radius: .5rem;')}
  ${({ btl_circular }) =>
    btl_circular && replicateForPseudo('border-top-left-radius: 100px;')}
  ${({ btl_rounded }) =>
    btl_rounded && replicateForPseudo('border-top-left-radius: 2rem;')}
  ${({ btl_edge }) =>
    btl_edge && replicateForPseudo('border-top-left-radius: .5rem;')}
  ${({ bbr_circular }) =>
    bbr_circular && replicateForPseudo('border-bottom-right-radius: 100px;')}
  ${({ bbr_rounded }) =>
    bbr_rounded && replicateForPseudo('border-bottom-right-radius: 2rem;')}
  ${({ bbr_edge }) =>
    bbr_edge && replicateForPseudo('border-bottom-right-radius: .5rem;')}
  ${({ bbl_circular }) =>
    bbl_circular && replicateForPseudo('border-bottom-left-radius: 100px;')}
  ${({ bbl_rounded }) =>
    bbl_rounded && replicateForPseudo('border-bottom-left-radius: 2rem;')}
  ${({ bbl_edge }) =>
    bbl_edge && replicateForPseudo('border-bottom-left-radius: .5rem;')}
`;

export default borderCss;