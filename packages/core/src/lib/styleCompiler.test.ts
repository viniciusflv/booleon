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

  test('important', () => {
    const res = styleCompiler(
      'className',
      {
        important: {
          checked: {
            css: {
              flex: true,
              grid: true,
            },
          },
        },
      },
      { flex: () => 'display:flex;', grid: () => 'display:grid;' },
    );

    expect(res).toMatchInlineSnapshot(
      '".className:checked{display:flex !important;display:-ms-grid !important;display:grid !important;}"',
    );
  });

  test('pseudo', () => {
    const res = styleCompiler(
      'className',
      {
        focus_within_after_before_active_checked_disabled_hover_visited_child_last_first_adjacent_sibling_odd_even:
          {
            css: { flex: true },
          },
      },
      { flex: () => 'display:flex;' },
    );

    expect(res).toMatchInlineSnapshot(
      '".className:focus:focus-within:after:before:active:checked:disabled:hover:visited>*>:last-child>:first-child~*+*:nth-child(odd):nth-child(even){display:flex;}"',
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

  test('custom attachment', () => {
    const res = styleCompiler(
      'className',
      { att: { css: { flex: true } } },
      { flex: () => 'display:flex;' },
      { att: () => 'display: grid;' },
    );

    expect(res).toMatchInlineSnapshot('"display: grid;"');
  });

  test('integration', () => {
    const res = styleCompiler(
      'bl-className',
      {
        dark: {
          important: {
            xs: {
              sm: {
                md: {
                  lg: {
                    xl: {
                      focus_within_after_before_active_checked_disabled_hover_visited_child_last_first_adjacent_sibling_odd_even:
                        {
                          css: {
                            flex: true,
                          },
                        },
                    },
                  },
                },
              },
            },
          },
        },
      },
      { flex: () => 'display:flex;' },
    );

    expect(res).toMatchInlineSnapshot(
      '"@media (min-width: 640px){@media (min-width: 768px){@media (min-width: 1024px){@media (min-width: 1440px){@media (min-width: 1920px){body[data-theme=\\"dark\\"] .bl-className:focus:focus-within:after:before:active:checked:disabled:hover:visited>*>:last-child>:first-child~*+*:nth-child(odd):nth-child(even){display:flex !important;}}}}}}"',
    );
  });
});
