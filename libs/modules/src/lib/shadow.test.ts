import { shadow } from './shadow';

describe('shadow', () => {
  test('sd_1', () =>
    expect(shadow.sd_1()).toMatchInlineSnapshot(
      `"box-shadow:0px 1px 3px rgba(0, 0, 0, 0.2),0px 1px 1px rgba(0, 0, 0, 0.14),0px 2px 1px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_10', () =>
    expect(shadow.sd_10()).toMatchInlineSnapshot(
      `"box-shadow:0px 6px 6px rgba(0, 0, 0, 0.2),0px 10px 14px rgba(0, 0, 0, 0.14),0px 4px 18px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_11', () =>
    expect(shadow.sd_11()).toMatchInlineSnapshot(
      `"box-shadow:0px 6px 7px rgba(0, 0, 0, 0.2),0px 11px 15px rgba(0, 0, 0, 0.14),0px 4px 20px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_12', () =>
    expect(shadow.sd_12()).toMatchInlineSnapshot(
      `"box-shadow:0px 7px 8px rgba(0, 0, 0, 0.2),0px 12px 17px rgba(0, 0, 0, 0.14),0px 5px 22px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_13', () =>
    expect(shadow.sd_13()).toMatchInlineSnapshot(
      `"box-shadow:0px 7px 8px rgba(0, 0, 0, 0.2),0px 13px 19px rgba(0, 0, 0, 0.14),0px 5px 24px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_14', () =>
    expect(shadow.sd_14()).toMatchInlineSnapshot(
      `"box-shadow:0px 7px 9px rgba(0, 0, 0, 0.2),0px 14px 21px rgba(0, 0, 0, 0.14),0px 5px 26px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_15', () =>
    expect(shadow.sd_15()).toMatchInlineSnapshot(
      `"box-shadow:0px 8px 9px rgba(0, 0, 0, 0.2),0px 15px 22px rgba(0, 0, 0, 0.14),0px 6px 28px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_16', () =>
    expect(shadow.sd_16()).toMatchInlineSnapshot(
      `"box-shadow:0px 8px 10px rgba(0, 0, 0, 0.2),0px 16px 24px rgba(0, 0, 0, 0.14),0px 6px 30px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_17', () =>
    expect(shadow.sd_17()).toMatchInlineSnapshot(
      `"box-shadow:0px 8px 11px rgba(0, 0, 0, 0.2),0px 17px 26px rgba(0, 0, 0, 0.14),0px 6px 32px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_18', () =>
    expect(shadow.sd_18()).toMatchInlineSnapshot(
      `"box-shadow:0px 9px 11px rgba(0, 0, 0, 0.2),0px 18px 28px rgba(0, 0, 0, 0.14),0px 7px 34px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_19', () =>
    expect(shadow.sd_19()).toMatchInlineSnapshot(
      `"box-shadow:0px 9px 12px rgba(0, 0, 0, 0.2),0px 19px 29px rgba(0, 0, 0, 0.14),0px 7px 36px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_2', () =>
    expect(shadow.sd_2()).toMatchInlineSnapshot(
      `"box-shadow:0px 1px 5px rgba(0, 0, 0, 0.2),0px 2px 2px rgba(0, 0, 0, 0.14),0px 3px 1px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_20', () =>
    expect(shadow.sd_20()).toMatchInlineSnapshot(
      `"box-shadow:0px 10px 13px rgba(0, 0, 0, 0.2),0px 20px 31px rgba(0, 0, 0, 0.14),0px 8px 38px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_21', () =>
    expect(shadow.sd_21()).toMatchInlineSnapshot(
      `"box-shadow:0px 10px 13px rgba(0, 0, 0, 0.2),0px 21px 33px rgba(0, 0, 0, 0.14),0px 8px 40px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_22', () =>
    expect(shadow.sd_22()).toMatchInlineSnapshot(
      `"box-shadow:0px 10px 14px rgba(0, 0, 0, 0.2),0px 22px 35px rgba(0, 0, 0, 0.14),0px 8px 42px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_23', () =>
    expect(shadow.sd_23()).toMatchInlineSnapshot(
      `"box-shadow:0px 11px 14px rgba(0, 0, 0, 0.2),0px 23px 36px rgba(0, 0, 0, 0.14),0px 9px 44px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_24', () =>
    expect(shadow.sd_24()).toMatchInlineSnapshot(
      `"box-shadow:0px 11px 15px rgba(0, 0, 0, 0.2),0px 24px 38px rgba(0, 0, 0, 0.14),0px 9px 46px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_3', () =>
    expect(shadow.sd_3()).toMatchInlineSnapshot(
      `"box-shadow:0px 1px 8px rgba(0, 0, 0, 0.2),0px 3px 4px rgba(0, 0, 0, 0.14),0px 3px 3px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_4', () =>
    expect(shadow.sd_4()).toMatchInlineSnapshot(
      `"box-shadow:0px 2px 4px rgba(0, 0, 0, 0.2),0px 4px 5px rgba(0, 0, 0, 0.14),0px 1px 10px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_5', () =>
    expect(shadow.sd_5()).toMatchInlineSnapshot(
      `"box-shadow:0px 3px 5px rgba(0, 0, 0, 0.2),0px 5px 8px rgba(0, 0, 0, 0.14),0px 1px 14px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_6', () =>
    expect(shadow.sd_6()).toMatchInlineSnapshot(
      `"box-shadow:0px 3px 5px rgba(0, 0, 0, 0.2),0px 6px 10px rgba(0, 0, 0, 0.14),0px 1px 18px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_7', () =>
    expect(shadow.sd_7()).toMatchInlineSnapshot(
      `"box-shadow:0px 4px 5px rgba(0, 0, 0, 0.2),0px 7px 10px rgba(0, 0, 0, 0.14),0px 2px 16px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_8', () =>
    expect(shadow.sd_8()).toMatchInlineSnapshot(
      `"box-shadow:0px 5px 5px rgba(0, 0, 0, 0.2),0px 8px 10px rgba(0, 0, 0, 0.14),0px 3px 14px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sd_9', () =>
    expect(shadow.sd_9()).toMatchInlineSnapshot(
      `"box-shadow:0px 5px 6px rgba(0, 0, 0, 0.2),0px 9px 12px rgba(0, 0, 0, 0.14),0px 3px 16px rgba(0, 0, 0, 0.12);"`,
    ));
  test('sdi_1', () =>
    expect(shadow.sdi_1()).toMatchInlineSnapshot(
      `"box-shadow:0px 1px 3px rgba(0, 0, 0, 0.2) inset,0px 1px 1px rgba(0, 0, 0, 0.14) inset,0px 2px 1px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_10', () =>
    expect(shadow.sdi_10()).toMatchInlineSnapshot(
      `"box-shadow:0px 6px 6px rgba(0, 0, 0, 0.2) inset,0px 10px 14px rgba(0, 0, 0, 0.14) inset,0px 4px 18px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_11', () =>
    expect(shadow.sdi_11()).toMatchInlineSnapshot(
      `"box-shadow:0px 6px 7px rgba(0, 0, 0, 0.2) inset,0px 11px 15px rgba(0, 0, 0, 0.14) inset,0px 4px 20px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_12', () =>
    expect(shadow.sdi_12()).toMatchInlineSnapshot(
      `"box-shadow:0px 7px 8px rgba(0, 0, 0, 0.2) inset,0px 12px 17px rgba(0, 0, 0, 0.14) inset,0px 5px 22px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_13', () =>
    expect(shadow.sdi_13()).toMatchInlineSnapshot(
      `"box-shadow:0px 7px 8px rgba(0, 0, 0, 0.2) inset,0px 13px 19px rgba(0, 0, 0, 0.14) inset,0px 5px 24px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_14', () =>
    expect(shadow.sdi_14()).toMatchInlineSnapshot(
      `"box-shadow:0px 7px 9px rgba(0, 0, 0, 0.2) inset,0px 14px 21px rgba(0, 0, 0, 0.14) inset,0px 5px 26px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_15', () =>
    expect(shadow.sdi_15()).toMatchInlineSnapshot(
      `"box-shadow:0px 8px 9px rgba(0, 0, 0, 0.2) inset,0px 15px 22px rgba(0, 0, 0, 0.14) inset,0px 6px 28px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_16', () =>
    expect(shadow.sdi_16()).toMatchInlineSnapshot(
      `"box-shadow:0px 8px 10px rgba(0, 0, 0, 0.2) inset,0px 16px 24px rgba(0, 0, 0, 0.14) inset,0px 6px 30px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_17', () =>
    expect(shadow.sdi_17()).toMatchInlineSnapshot(
      `"box-shadow:0px 8px 11px rgba(0, 0, 0, 0.2) inset,0px 17px 26px rgba(0, 0, 0, 0.14) inset,0px 6px 32px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_18', () =>
    expect(shadow.sdi_18()).toMatchInlineSnapshot(
      `"box-shadow:0px 9px 11px rgba(0, 0, 0, 0.2) inset,0px 18px 28px rgba(0, 0, 0, 0.14) inset,0px 7px 34px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_19', () =>
    expect(shadow.sdi_19()).toMatchInlineSnapshot(
      `"box-shadow:0px 9px 12px rgba(0, 0, 0, 0.2) inset,0px 19px 29px rgba(0, 0, 0, 0.14) inset,0px 7px 36px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_2', () =>
    expect(shadow.sdi_2()).toMatchInlineSnapshot(
      `"box-shadow:0px 1px 5px rgba(0, 0, 0, 0.2) inset,0px 2px 2px rgba(0, 0, 0, 0.14) inset,0px 3px 1px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_20', () =>
    expect(shadow.sdi_20()).toMatchInlineSnapshot(
      `"box-shadow:0px 10px 13px rgba(0, 0, 0, 0.2) inset,0px 20px 31px rgba(0, 0, 0, 0.14) inset,0px 8px 38px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_21', () =>
    expect(shadow.sdi_21()).toMatchInlineSnapshot(
      `"box-shadow:0px 10px 13px rgba(0, 0, 0, 0.2) inset,0px 21px 33px rgba(0, 0, 0, 0.14) inset,0px 8px 40px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_22', () =>
    expect(shadow.sdi_22()).toMatchInlineSnapshot(
      `"box-shadow:0px 10px 14px rgba(0, 0, 0, 0.2) inset,0px 22px 35px rgba(0, 0, 0, 0.14) inset,0px 8px 42px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_23', () =>
    expect(shadow.sdi_23()).toMatchInlineSnapshot(
      `"box-shadow:0px 11px 14px rgba(0, 0, 0, 0.2) inset,0px 23px 36px rgba(0, 0, 0, 0.14) inset,0px 9px 44px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_24', () =>
    expect(shadow.sdi_24()).toMatchInlineSnapshot(
      `"box-shadow:0px 11px 15px rgba(0, 0, 0, 0.2) inset,0px 24px 38px rgba(0, 0, 0, 0.14) inset,0px 9px 46px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_3', () =>
    expect(shadow.sdi_3()).toMatchInlineSnapshot(
      `"box-shadow:0px 1px 8px rgba(0, 0, 0, 0.2) inset,0px 3px 4px rgba(0, 0, 0, 0.14) inset,0px 3px 3px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_4', () =>
    expect(shadow.sdi_4()).toMatchInlineSnapshot(
      `"box-shadow:0px 2px 4px rgba(0, 0, 0, 0.2) inset,0px 4px 5px rgba(0, 0, 0, 0.14) inset,0px 1px 10px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_5', () =>
    expect(shadow.sdi_5()).toMatchInlineSnapshot(
      `"box-shadow:0px 3px 5px rgba(0, 0, 0, 0.2) inset,0px 5px 8px rgba(0, 0, 0, 0.14) inset,0px 1px 14px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_6', () =>
    expect(shadow.sdi_6()).toMatchInlineSnapshot(
      `"box-shadow:0px 3px 5px rgba(0, 0, 0, 0.2) inset,0px 6px 10px rgba(0, 0, 0, 0.14) inset,0px 1px 18px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_7', () =>
    expect(shadow.sdi_7()).toMatchInlineSnapshot(
      `"box-shadow:0px 4px 5px rgba(0, 0, 0, 0.2) inset,0px 7px 10px rgba(0, 0, 0, 0.14) inset,0px 2px 16px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_8', () =>
    expect(shadow.sdi_8()).toMatchInlineSnapshot(
      `"box-shadow:0px 5px 5px rgba(0, 0, 0, 0.2) inset,0px 8px 10px rgba(0, 0, 0, 0.14) inset,0px 3px 14px rgba(0, 0, 0, 0.12) inset;"`,
    ));
  test('sdi_9', () =>
    expect(shadow.sdi_9()).toMatchInlineSnapshot(
      `"box-shadow:0px 5px 6px rgba(0, 0, 0, 0.2) inset,0px 9px 12px rgba(0, 0, 0, 0.14) inset,0px 3px 16px rgba(0, 0, 0, 0.12) inset;"`,
    ));
});
