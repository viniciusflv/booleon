import { styleCompiler } from './styleCompiler';

describe('styleCompiler', () => {
  test('css', () => {
    const res = styleCompiler(
      'className',
      { flex: true },
      { flex: () => 'display:flex;' },
    );

    expect(res).toMatchInlineSnapshot('"display:flex;"');
  });

  test('class', () => {
    const res = styleCompiler(
      'className',
      { css: { flex: true } },
      { flex: () => 'display:flex;' },
    );

    expect(res).toMatchInlineSnapshot('".className{display:flex;}"');
  });

  test('pseudo', () => {
    const res = styleCompiler(
      'className',
      {
        focus_within_after_before_active_checked_disabled_hover_visited_child_last_first_adjacent_sibling_odd_even: {
          css: { flex: true },
        },
      },
      { flex: () => 'display:flex;' },
    );

    expect(res).toMatchInlineSnapshot(
      '".className:focus:focus-within:after:before:active:checked:disabled:hover:visited>* :last-child :first-child~*+*:nth-child(odd):nth-child(even){display:flex;}"',
    );
  });

  test('keyframe', () => {
    const res = styleCompiler(
      'className',
      {
        kf_aniname: {
          from: {
            css: { flex: true },
          },
          quarter: {
            css: { flex: true },
          },
          third: {
            css: { flex: true },
          },
          half: {
            css: { flex: true },
          },
          x2third: {
            css: { flex: true },
          },
          x3quarter: {
            css: { flex: true },
          },
          to: {
            css: { flex: true },
          },
        },
      },
      { flex: () => 'display:flex;' },
    );

    expect(res).toMatchInlineSnapshot(
      '"@keyframes aniname{0%{display:flex;}25%{display:flex;}33%{display:flex;}50%{display:flex;}66%{display:flex;}75%{display:flex;}100%{display:flex;}}"',
    );
  });
});
