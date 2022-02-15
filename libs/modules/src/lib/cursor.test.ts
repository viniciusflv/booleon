import { cursor } from './cursor';

describe('cursor', () => {
  test('cr_auto', () =>
    expect(cursor.cr_auto()).toMatchInlineSnapshot(`"cursor:auto;"`));
  test('cr_default', () =>
    expect(cursor.cr_default()).toMatchInlineSnapshot(`"cursor:default;"`));
  test('cr_pointer', () =>
    expect(cursor.cr_pointer()).toMatchInlineSnapshot(`"cursor:pointer;"`));
  test('cr_wait', () =>
    expect(cursor.cr_wait()).toMatchInlineSnapshot(`"cursor:wait;"`));
  test('cr_text', () =>
    expect(cursor.cr_text()).toMatchInlineSnapshot(`"cursor:text;"`));
  test('cr_move', () =>
    expect(cursor.cr_move()).toMatchInlineSnapshot(`"cursor:move;"`));
  test('cr_disallowed', () =>
    expect(cursor.cr_disallowed()).toMatchInlineSnapshot(
      `"cursor:not-allowed;"`,
    ));
  test('cr_cross', () =>
    expect(cursor.cr_cross()).toMatchInlineSnapshot(`"cursor:crosshair;"`));
  test('cr_grabbing', () =>
    expect(cursor.cr_grabbing()).toMatchInlineSnapshot(`"cursor:grabbing;"`));
  test('cr_help', () =>
    expect(cursor.cr_help()).toMatchInlineSnapshot(`"cursor:help;"`));
  test('cry_resize', () =>
    expect(cursor.cry_resize()).toMatchInlineSnapshot(`"cursor:col-resize;"`));
  test('cra_resize', () =>
    expect(cursor.cra_resize()).toMatchInlineSnapshot(`"cursor:nesw-resize;"`));
  test('crb_resize', () =>
    expect(cursor.crb_resize()).toMatchInlineSnapshot(`"cursor:nwse-resize;"`));
  test('crx_resize', () =>
    expect(cursor.crx_resize()).toMatchInlineSnapshot(`"cursor:row-resize;"`));
  test('cr_no_drop', () =>
    expect(cursor.cr_no_drop()).toMatchInlineSnapshot(`"cursor:no-drop;"`));
  test('cr_none', () =>
    expect(cursor.cr_none()).toMatchInlineSnapshot(`"cursor:none;"`));
  test('cr_progress', () =>
    expect(cursor.cr_progress()).toMatchInlineSnapshot(`"cursor:progress;"`));
  test('cr_zoom_in', () =>
    expect(cursor.cr_zoom_in()).toMatchInlineSnapshot(`"cursor:zoom-in;"`));
  test('cr_zoom_out', () =>
    expect(cursor.cr_zoom_out()).toMatchInlineSnapshot(`"cursor:zoom-out;"`));
  test('cr_noevents', () =>
    expect(cursor.cr_noevents()).toMatchInlineSnapshot(
      `"pointer-events:none;"`,
    ));
  test('cr_events', () =>
    expect(cursor.cr_events()).toMatchInlineSnapshot(`"pointer-events:auto;"`));
  test('cr_url', () =>
    expect(cursor.cr_url('/img.png')).toMatchInlineSnapshot(
      `"cursor:url(/img.png),auto;"`,
    ));
});
