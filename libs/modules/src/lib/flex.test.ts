import { flex } from './flex';

describe('flex', () => {
  test('col', () =>
    expect(flex.col()).toMatchInlineSnapshot(`"flex-direction:column;"`));
  test('col_reverse', () =>
    expect(flex.col_reverse()).toMatchInlineSnapshot(
      `"flex-direction:column-reverse;"`,
    ));
  test('cross_center', () =>
    expect(flex.cross_center()).toMatchInlineSnapshot(`"align-items:center;"`));
  test('cross_end', () =>
    expect(flex.cross_end()).toMatchInlineSnapshot(`"align-items:flex-end;"`));
  test('cross_start', () =>
    expect(flex.cross_start()).toMatchInlineSnapshot(
      `"align-items:flex-start;"`,
    ));
  test('cross_stretch', () =>
    expect(flex.cross_stretch()).toMatchInlineSnapshot(
      `"align-items:stretch;"`,
    ));
  test('do_wrap', () =>
    expect(flex.do_wrap()).toMatchInlineSnapshot(`"flex-wrap:wrap;"`));
  test('flex', () =>
    expect(flex.flex()).toMatchInlineSnapshot(`"display:flex;"`));
  test('gap_auto', () =>
    expect(flex.gap_auto()).toMatchInlineSnapshot(`"gap:auto;"`));
  test('gap_lg', () =>
    expect(flex.gap_lg()).toMatchInlineSnapshot(`"gap:0.5rem;"`));
  test('gap_md', () =>
    expect(flex.gap_md()).toMatchInlineSnapshot(`"gap:0.375rem;"`));
  test('gap_none', () =>
    expect(flex.gap_none()).toMatchInlineSnapshot(`"gap:0rem;"`));
  test('gap_px', () =>
    expect(flex.gap_px()).toMatchInlineSnapshot(`"gap:0.0625rem;"`));
  test('gap_sm', () =>
    expect(flex.gap_sm()).toMatchInlineSnapshot(`"gap:0.25rem;"`));
  test('gap_xl', () =>
    expect(flex.gap_xl()).toMatchInlineSnapshot(`"gap:0.75rem;"`));
  test('gap_xs', () =>
    expect(flex.gap_xs()).toMatchInlineSnapshot(`"gap:0.125rem;"`));
  test('grow', () =>
    expect(flex.grow()).toMatchInlineSnapshot(`"flex-grow:1;"`));
  test('main_around', () =>
    expect(flex.main_around()).toMatchInlineSnapshot(
      `"justify-content:space-around;"`,
    ));
  test('main_between', () =>
    expect(flex.main_between()).toMatchInlineSnapshot(
      `"justify-content:space-between;"`,
    ));
  test('main_center', () =>
    expect(flex.main_center()).toMatchInlineSnapshot(
      `"justify-content:center;"`,
    ));
  test('main_end', () =>
    expect(flex.main_end()).toMatchInlineSnapshot(
      `"justify-content:flex-end;"`,
    ));
  test('main_evenly', () =>
    expect(flex.main_evenly()).toMatchInlineSnapshot(
      `"justify-content:space-evenly;"`,
    ));
  test('main_start', () =>
    expect(flex.main_start()).toMatchInlineSnapshot(
      `"justify-content:flex-start;"`,
    ));
  test('main_stretch', () =>
    expect(flex.main_stretch()).toMatchInlineSnapshot(
      `"justify-content:stretch;"`,
    ));
  test('no_wrap', () =>
    expect(flex.no_wrap()).toMatchInlineSnapshot(`"flex-wrap:nowrap;"`));
  test('reverse_wrap', () =>
    expect(flex.reverse_wrap()).toMatchInlineSnapshot(
      `"flex-wrap:wrap-reverse;"`,
    ));
  test('row', () =>
    expect(flex.row()).toMatchInlineSnapshot(`"flex-direction:row;"`));
  test('row_reverse', () =>
    expect(flex.row_reverse()).toMatchInlineSnapshot(
      `"flex-direction:row-reverse;"`,
    ));
});
