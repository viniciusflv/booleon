import { css } from 'styled-components';
import ShadowProps from './interfaces';

export default css<ShadowProps>`
  ${({ sd_1 }) => sd_1 && `
    box-shadow:
    0 1px 1px 0 rgba(0,0,0,0.14),
    0 2px 1px -1px rgba(0,0,0,0.12),
    0 1px 3px 0 rgba(0,0,0,0.20);
  `}
  ${({ sd_2 }) => sd_2 && `
    box-shadow:
    0 2px 2px 0 rgba(0,0,0,0.14),
    0 3px 1px -2px rgba(0,0,0,0.12),
    0 1px 5px 0 rgba(0,0,0,0.20);
  `}
  ${({ sd_3 }) => sd_3 && `
    box-shadow:
    0 3px 4px 0 rgba(0,0,0,0.14),
    0 3px 3px -2px rgba(0,0,0,0.12),
    0 1px 8px 0 rgba(0,0,0,0.20);
  `}
  ${({ sd_4 }) => sd_4 && `
    box-shadow:
    0 4px 5px 0 rgba(0,0,0,0.14),
    0 1px 10px 0 rgba(0,0,0,0.12),
    0 2px 4px -1px rgba(0,0,0,0.20);
  `}
  ${({ sd_6 }) => sd_6 && `
    box-shadow:
    0 6px 10px 0 rgba(0,0,0,0.14),
    0 1px 18px 0 rgba(0,0,0,0.12),
    0 3px 5px -1px rgba(0,0,0,0.20);
  `}
  ${({ sd_8 }) => sd_8 && `
    box-shadow:
    0 8px 10px 1px rgba(0,0,0,0.14),
    0 3px 14px 2px rgba(0,0,0,0.12),
    0 5px 5px -3px rgba(0,0,0,0.20);
  `}
  ${({ sd_9 }) => sd_9 && `
    box-shadow:
    0 9px 12px 1px rgba(0,0,0,0.14),
    0 3px 16px 2px rgba(0,0,0,0.12),
    0 5px 6px -3px rgba(0,0,0,0.20);
  `}
  ${({ sd_12 }) => sd_12 && `
    box-shadow:
    0 12px 17px 2px rgba(0,0,0,0.14),
    0 5px 22px 4px rgba(0,0,0,0.12),
    0 7px 8px -4px rgba(0,0,0,0.20);
  `}
  ${({ sd_16 }) => sd_16 && `
    box-shadow:
    0 16px 24px 2px rgba(0,0,0,0.14),
    0 6px 30px 5px rgba(0,0,0,0.12),
    0 8px 10px -5px rgba(0,0,0,0.20);
  `}
  ${({ sd_24 }) => sd_24 && `
    box-shadow:
    0 24px 38px 3px rgba(0,0,0,0.14),
    0 9px 46px 8px rgba(0,0,0,0.12),
    0 11px 15px -7px rgba(0,0,0,0.20);
  `}
  ${({ sdi_1 }) => sdi_1 && `
    box-shadow:
    0 1px 1px 0 rgba(0,0,0,0.14) inset,
    0 2px 1px -1px rgba(0,0,0,0.12) inset,
    0 1px 3px 0 rgba(0,0,0,0.20) inset;
  `}
  ${({ sdi_2 }) => sdi_2 && `
    box-shadow:
    0 2px 2px 0 rgba(0,0,0,0.14) inset,
    0 3px 1px -2px rgba(0,0,0,0.12) inset,
    0 1px 5px 0 rgba(0,0,0,0.20) inset;
  `}
  ${({ sdi_3 }) => sdi_3 && `
    box-shadow:
    0 3px 4px 0 rgba(0,0,0,0.14) inset,
    0 3px 3px -2px rgba(0,0,0,0.12) inset,
    0 1px 8px 0 rgba(0,0,0,0.20) inset;
  `}
  ${({ sdi_4 }) => sdi_4 && `
    box-shadow:
    0 4px 5px 0 rgba(0,0,0,0.14) inset,
    0 1px 10px 0 rgba(0,0,0,0.12) inset,
    0 2px 4px -1px rgba(0,0,0,0.20) inset;
  `}
  ${({ sdi_6 }) => sdi_6 && `
    box-shadow:
    0 6px 10px 0 rgba(0,0,0,0.14) inset,
    0 1px 18px 0 rgba(0,0,0,0.12) inset,
    0 3px 5px -1px rgba(0,0,0,0.20) inset;
  `}
  ${({ sdi_8 }) => sdi_8 && `
    box-shadow:
    0 8px 10px 1px rgba(0,0,0,0.14) inset,
    0 3px 14px 2px rgba(0,0,0,0.12) inset,
    0 5px 5px -3px rgba(0,0,0,0.20) inset;
  `}
  ${({ sdi_9 }) => sdi_9 && `
    box-shadow:
    0 9px 12px 1px rgba(0,0,0,0.14) inset,
    0 3px 16px 2px rgba(0,0,0,0.12) inset,
    0 5px 6px -3px rgba(0,0,0,0.20) inset;
  `}
  ${({ sdi_12 }) => sdi_12 && `
    box-shadow:
    0 12px 17px 2px rgba(0,0,0,0.14) inset,
    0 5px 22px 4px rgba(0,0,0,0.12) inset,
    0 7px 8px -4px rgba(0,0,0,0.20) inset;
  `}
  ${({ sdi_16 }) => sdi_16 && `
    box-shadow:
    0 16px 24px 2px rgba(0,0,0,0.14) inset,
    0 6px 30px 5px rgba(0,0,0,0.12) inset,
    0 8px 10px -5px rgba(0,0,0,0.20) inset;
  `}
  ${({ sdi_24 }) => sdi_24 && `
    box-shadow:
    0 24px 38px 3px rgba(0,0,0,0.14) inset,
    0 9px 46px 8px rgba(0,0,0,0.12) inset,
    0 11px 15px -7px rgba(0,0,0,0.20) inset;
  `}
`;
