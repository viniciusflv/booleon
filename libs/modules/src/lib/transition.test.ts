import { transition } from './transition';

describe('transition', () => {
  test('ts', () =>
    expect(transition.ts()).toMatchInlineSnapshot(
      `"transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;"`,
    ));
  test('ts_all', () =>
    expect(transition.ts_all()).toMatchInlineSnapshot(
      `"transition-property:all;"`,
    ));
  test('ts_colors', () =>
    expect(transition.ts_colors()).toMatchInlineSnapshot(
      `"transition-property:background-color,border-color,color,fill,stroke;"`,
    ));
  test('ts_delay_lg', () =>
    expect(transition.ts_delay_lg()).toMatchInlineSnapshot(
      `"transition-delay:0.15s;"`,
    ));
  test('ts_delay_md', () =>
    expect(transition.ts_delay_md()).toMatchInlineSnapshot(
      `"transition-delay:0.075s;"`,
    ));
  test('ts_delay_sm', () =>
    expect(transition.ts_delay_sm()).toMatchInlineSnapshot(
      `"transition-delay:0.045s;"`,
    ));
  test('ts_delay_xl', () =>
    expect(transition.ts_delay_xl()).toMatchInlineSnapshot(
      `"transition-delay:0.3s;"`,
    ));
  test('ts_delay_xs', () =>
    expect(transition.ts_delay_xs()).toMatchInlineSnapshot(
      `"transition-delay:0.015s;"`,
    ));
  test('ts_duration_2xl', () =>
    expect(transition.ts_duration_2xl()).toMatchInlineSnapshot(
      `"transition-duration:1.2s;"`,
    ));
  test('ts_duration_3xl', () =>
    expect(transition.ts_duration_3xl()).toMatchInlineSnapshot(
      `"transition-duration:1.8s;"`,
    ));
  test('ts_duration_4xl', () =>
    expect(transition.ts_duration_4xl()).toMatchInlineSnapshot(
      `"transition-duration:2.4s;"`,
    ));
  test('ts_duration_5xl', () =>
    expect(transition.ts_duration_5xl()).toMatchInlineSnapshot(
      `"transition-duration:3s;"`,
    ));
  test('ts_duration_immediately', () =>
    expect(transition.ts_duration_immediately()).toMatchInlineSnapshot(
      `"transition-duration:0s;"`,
    ));
  test('ts_duration_lg', () =>
    expect(transition.ts_duration_lg()).toMatchInlineSnapshot(
      `"transition-duration:0.45s;"`,
    ));
  test('ts_duration_md', () =>
    expect(transition.ts_duration_md()).toMatchInlineSnapshot(
      `"transition-duration:0.3s;"`,
    ));
  test('ts_duration_quickly', () =>
    expect(transition.ts_duration_quickly()).toMatchInlineSnapshot(
      `"transition-duration:0.2s;"`,
    ));
  test('ts_duration_slowly', () =>
    expect(transition.ts_duration_slowly()).toMatchInlineSnapshot(
      `"transition-duration:0.4s;"`,
    ));
  test('ts_duration_sm', () =>
    expect(transition.ts_duration_sm()).toMatchInlineSnapshot(
      `"transition-duration:0.15s;"`,
    ));
  test('ts_duration_xl', () =>
    expect(transition.ts_duration_xl()).toMatchInlineSnapshot(
      `"transition-duration:0.6s;"`,
    ));
  test('ts_ease_in', () =>
    expect(transition.ts_ease_in()).toMatchInlineSnapshot(
      `"transition-timing-function:cubic-bezier(0.4,0,1,1);"`,
    ));
  test('ts_ease_in_out', () =>
    expect(transition.ts_ease_in_out()).toMatchInlineSnapshot(
      `"transition-timing-function:cubic-bezier(0.4,0,0.2,1);"`,
    ));
  test('ts_ease_linear', () =>
    expect(transition.ts_ease_linear()).toMatchInlineSnapshot(
      `"transition-timing-function:linear;"`,
    ));
  test('ts_ease_out', () =>
    expect(transition.ts_ease_out()).toMatchInlineSnapshot(
      `"transition-timing-function:cubic-bezier(0,0,0.2,1);"`,
    ));
  test('ts_none', () =>
    expect(transition.ts_none()).toMatchInlineSnapshot(
      `"transition-property:none;"`,
    ));
  test('ts_opacity', () =>
    expect(transition.ts_opacity()).toMatchInlineSnapshot(
      `"transition-property:opacity;"`,
    ));
  test('ts_shadow', () =>
    expect(transition.ts_shadow()).toMatchInlineSnapshot(
      `"transition-property:box-shadow;"`,
    ));
  test('ts_transform', () =>
    expect(transition.ts_transform()).toMatchInlineSnapshot(
      `"transition-property:transform;"`,
    ));
});
