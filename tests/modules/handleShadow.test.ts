import { handleShadow } from '../../packages/modules/src/utils';

describe('handleShadow', () => {
  test('default shadow', () => {
    const sd_1 = handleShadow(1);
    const sd_2 = handleShadow(2);
    const sd_3 = handleShadow(3);
    const sd_4 = handleShadow(4);
    const sd_6 = handleShadow(6);
    const sd_8 = handleShadow(8);
    const sd_9 = handleShadow(9);
    const sd_12 = handleShadow(12);
    const sd_16 = handleShadow(16);
    const sd_24 = handleShadow(24);

    expect(sd_1).toBe(
      '0 1px 1px 0 rgba(0,0,0,0.14),0 2px 1px -1px rgba(0,0,0,0.12),0 1px 3px 0 rgba(0,0,0,0.20)',
    );
    expect(sd_2).toBe(
      '0 2px 2px 0 rgba(0,0,0,0.14),0 3px 1px -2px rgba(0,0,0,0.12),0 1px 5px 0 rgba(0,0,0,0.20)',
    );
    expect(sd_3).toBe(
      '0 3px 4px 0 rgba(0,0,0,0.14),0 3px 3px -2px rgba(0,0,0,0.12),0 1px 8px 0 rgba(0,0,0,0.20)',
    );
    expect(sd_4).toBe(
      '0 4px 5px 0 rgba(0,0,0,0.14),0 1px 10px 0 rgba(0,0,0,0.12),0 2px 4px -1px rgba(0,0,0,0.20)',
    );
    expect(sd_6).toBe(
      '0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12),0 3px 5px -1px rgba(0,0,0,0.20)',
    );
    expect(sd_8).toBe(
      '0 8px 10px  1px rgba(0,0,0,0.14),0 3px 14px  2px rgba(0,0,0,0.12),0 5px 5px -3px rgba(0,0,0,0.20)',
    );
    expect(sd_9).toBe(
      '0 9px 12px 1px rgba(0,0,0,0.14),0 3px 16px 2px rgba(0,0,0,0.12),0 5px 6px -3px rgba(0,0,0,0.20)',
    );
    expect(sd_12).toBe(
      '0 12px 17px 2px rgba(0,0,0,0.14),0 5px 22px 4px rgba(0,0,0,0.12),0 7px 8px -4px rgba(0,0,0,0.20)',
    );
    expect(sd_16).toBe(
      '0 16px 24px 2px rgba(0,0,0,0.14),0 6px 30px 5px rgba(0,0,0,0.12),0 8px 10px -5px rgba(0,0,0,0.20)',
    );
    expect(sd_24).toBe(
      '0 24px 38px 3px rgba(0,0,0,0.14),0 9px 46px 8px rgba(0,0,0,0.12),0 11px 15px -7px rgba(0,0,0,0.20)',
    );
  });

  test('inset shadow', () => {
    const sdi_1 = handleShadow(1, true);
    const sdi_2 = handleShadow(2, true);
    const sdi_3 = handleShadow(3, true);
    const sdi_4 = handleShadow(4, true);
    const sdi_6 = handleShadow(6, true);
    const sdi_8 = handleShadow(8, true);
    const sdi_9 = handleShadow(9, true);
    const sdi_12 = handleShadow(12, true);
    const sdi_16 = handleShadow(16, true);
    const sdi_24 = handleShadow(24, true);

    expect(sdi_1).toBe(
      '0 1px 1px 0 rgba(0,0,0,0.14) inset,0 2px 1px -1px rgba(0,0,0,0.12) inset,0 1px 3px 0 rgba(0,0,0,0.20) inset',
    );
    expect(sdi_2).toBe(
      '0 2px 2px 0 rgba(0,0,0,0.14) inset,0 3px 1px -2px rgba(0,0,0,0.12) inset,0 1px 5px 0 rgba(0,0,0,0.20) inset',
    );
    expect(sdi_3).toBe(
      '0 3px 4px 0 rgba(0,0,0,0.14) inset,0 3px 3px -2px rgba(0,0,0,0.12) inset,0 1px 8px 0 rgba(0,0,0,0.20) inset',
    );
    expect(sdi_4).toBe(
      '0 4px 5px 0 rgba(0,0,0,0.14) inset,0 1px 10px 0 rgba(0,0,0,0.12) inset,0 2px 4px -1px rgba(0,0,0,0.20) inset',
    );
    expect(sdi_6).toBe(
      '0 6px 10px 0 rgba(0,0,0,0.14) inset,0 1px 18px 0 rgba(0,0,0,0.12) inset,0 3px 5px -1px rgba(0,0,0,0.20) inset',
    );
    expect(sdi_8).toBe(
      '0 8px 10px  1px rgba(0,0,0,0.14) inset,0 3px 14px  2px rgba(0,0,0,0.12) inset,0 5px 5px -3px rgba(0,0,0,0.20) inset',
    );
    expect(sdi_9).toBe(
      '0 9px 12px 1px rgba(0,0,0,0.14) inset,0 3px 16px 2px rgba(0,0,0,0.12) inset,0 5px 6px -3px rgba(0,0,0,0.20) inset',
    );
    expect(sdi_12).toBe(
      '0 12px 17px 2px rgba(0,0,0,0.14) inset,0 5px 22px 4px rgba(0,0,0,0.12) inset,0 7px 8px -4px rgba(0,0,0,0.20) inset',
    );
    expect(sdi_16).toBe(
      '0 16px 24px 2px rgba(0,0,0,0.14) inset,0 6px 30px 5px rgba(0,0,0,0.12) inset,0 8px 10px -5px rgba(0,0,0,0.20) inset',
    );
    expect(sdi_24).toBe(
      '0 24px 38px 3px rgba(0,0,0,0.14) inset,0 9px 46px 8px rgba(0,0,0,0.12) inset,0 11px 15px -7px rgba(0,0,0,0.20) inset',
    );
  });

  test('drop shadow', () => {
    const sd_1 = handleShadow(1, false, true);
    const sd_2 = handleShadow(2, false, true);
    const sd_3 = handleShadow(3, false, true);
    const sd_4 = handleShadow(4, false, true);
    const sd_6 = handleShadow(6, false, true);
    const sd_8 = handleShadow(8, false, true);
    const sd_9 = handleShadow(9, false, true);
    const sd_12 = handleShadow(12, false, true);
    const sd_16 = handleShadow(16, false, true);
    const sd_24 = handleShadow(24, false, true);

    expect(sd_1).toBe(
      'drop-shadow(0 1px 1px rgba(0,0,0,0.14))drop-shadow(0 2px 1px rgba(0,0,0,0.12))drop-shadow(0 1px 3px rgba(0,0,0,0.20))',
    );
    expect(sd_2).toBe(
      'drop-shadow(0 2px 2px rgba(0,0,0,0.14))drop-shadow(0 3px 1px rgba(0,0,0,0.12))drop-shadow(0 1px 5px rgba(0,0,0,0.20))',
    );
    expect(sd_3).toBe(
      'drop-shadow(0 3px 4px rgba(0,0,0,0.14))drop-shadow(0 3px 3px rgba(0,0,0,0.12))drop-shadow(0 1px 8px rgba(0,0,0,0.20))',
    );
    expect(sd_4).toBe(
      'drop-shadow(0 4px 5px rgba(0,0,0,0.14))drop-shadow(0 1px 10px rgba(0,0,0,0.12))drop-shadow(0 2px 4px rgba(0,0,0,0.20))',
    );
    expect(sd_6).toBe(
      'drop-shadow(0 6px 10px rgba(0,0,0,0.14))drop-shadow(0 1px 18px rgba(0,0,0,0.12))drop-shadow(0 3px 5px rgba(0,0,0,0.20))',
    );
    expect(sd_8).toBe(
      'drop-shadow(0 8px 10px rgba(0,0,0,0.14))drop-shadow(0 3px 14px rgba(0,0,0,0.12))drop-shadow(0 5px 5px rgba(0,0,0,0.20))',
    );
    expect(sd_9).toBe(
      'drop-shadow(0 9px 12px rgba(0,0,0,0.14))drop-shadow(0 3px 16px rgba(0,0,0,0.12))drop-shadow(0 5px 6px rgba(0,0,0,0.20))',
    );
    expect(sd_12).toBe(
      'drop-shadow(0 12px 17px rgba(0,0,0,0.14))drop-shadow(0 5px 22px rgba(0,0,0,0.12))drop-shadow(0 7px 8px rgba(0,0,0,0.20))',
    );
    expect(sd_16).toBe(
      'drop-shadow(0 16px 24px rgba(0,0,0,0.14))drop-shadow(0 6px 30px rgba(0,0,0,0.12))drop-shadow(0 8px 10px rgba(0,0,0,0.20))',
    );
    expect(sd_24).toBe(
      'drop-shadow(0 24px 38px rgba(0,0,0,0.14))drop-shadow(0 9px 46px rgba(0,0,0,0.12))drop-shadow(0 11px 15px rgba(0,0,0,0.20))',
    );
  });

  test('inset drop shadow', () => {
    const sdi_1 = handleShadow(1, true, true);
    const sdi_2 = handleShadow(2, true, true);
    const sdi_3 = handleShadow(3, true, true);
    const sdi_4 = handleShadow(4, true, true);
    const sdi_6 = handleShadow(6, true, true);
    const sdi_8 = handleShadow(8, true, true);
    const sdi_9 = handleShadow(9, true, true);
    const sdi_12 = handleShadow(12, true, true);
    const sdi_16 = handleShadow(16, true, true);
    const sdi_24 = handleShadow(24, true, true);

    expect(sdi_1).toBe(
      'drop-shadow(0 1px 1px rgba(0,0,0,0.14) inset)drop-shadow(0 2px 1px rgba(0,0,0,0.12) inset)drop-shadow(0 1px 3px rgba(0,0,0,0.20) inset)',
    );
    expect(sdi_2).toBe(
      'drop-shadow(0 2px 2px rgba(0,0,0,0.14) inset)drop-shadow(0 3px 1px rgba(0,0,0,0.12) inset)drop-shadow(0 1px 5px rgba(0,0,0,0.20) inset)',
    );
    expect(sdi_3).toBe(
      'drop-shadow(0 3px 4px rgba(0,0,0,0.14) inset)drop-shadow(0 3px 3px rgba(0,0,0,0.12) inset)drop-shadow(0 1px 8px rgba(0,0,0,0.20) inset)',
    );
    expect(sdi_4).toBe(
      'drop-shadow(0 4px 5px rgba(0,0,0,0.14) inset)drop-shadow(0 1px 10px rgba(0,0,0,0.12) inset)drop-shadow(0 2px 4px rgba(0,0,0,0.20) inset)',
    );
    expect(sdi_6).toBe(
      'drop-shadow(0 6px 10px rgba(0,0,0,0.14) inset)drop-shadow(0 1px 18px rgba(0,0,0,0.12) inset)drop-shadow(0 3px 5px rgba(0,0,0,0.20) inset)',
    );
    expect(sdi_8).toBe(
      'drop-shadow(0 8px 10px rgba(0,0,0,0.14) inset)drop-shadow(0 3px 14px rgba(0,0,0,0.12) inset)drop-shadow(0 5px 5px rgba(0,0,0,0.20) inset)',
    );
    expect(sdi_9).toBe(
      'drop-shadow(0 9px 12px rgba(0,0,0,0.14) inset)drop-shadow(0 3px 16px rgba(0,0,0,0.12) inset)drop-shadow(0 5px 6px rgba(0,0,0,0.20) inset)',
    );
    expect(sdi_12).toBe(
      'drop-shadow(0 12px 17px rgba(0,0,0,0.14) inset)drop-shadow(0 5px 22px rgba(0,0,0,0.12) inset)drop-shadow(0 7px 8px rgba(0,0,0,0.20) inset)',
    );
    expect(sdi_16).toBe(
      'drop-shadow(0 16px 24px rgba(0,0,0,0.14) inset)drop-shadow(0 6px 30px rgba(0,0,0,0.12) inset)drop-shadow(0 8px 10px rgba(0,0,0,0.20) inset)',
    );
    expect(sdi_24).toBe(
      'drop-shadow(0 24px 38px rgba(0,0,0,0.14) inset)drop-shadow(0 9px 46px rgba(0,0,0,0.12) inset)drop-shadow(0 11px 15px rgba(0,0,0,0.20) inset)',
    );
  });
});
