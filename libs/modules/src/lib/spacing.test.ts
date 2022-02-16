import { spacing } from './spacing';

describe('spacing', () => {
  test('m_auto', () =>
    expect(spacing.m_auto()).toMatchInlineSnapshot(`"margin:auto;"`));
  test('m_lg', () =>
    expect(spacing.m_lg()).toMatchInlineSnapshot(`"margin:0.5rem;"`));
  test('m_md', () =>
    expect(spacing.m_md()).toMatchInlineSnapshot(`"margin:0.375rem;"`));
  test('m_none', () =>
    expect(spacing.m_none()).toMatchInlineSnapshot(`"margin:0rem;"`));
  test('m_px', () =>
    expect(spacing.m_px()).toMatchInlineSnapshot(`"margin:0.0625rem;"`));
  test('m_sm', () =>
    expect(spacing.m_sm()).toMatchInlineSnapshot(`"margin:0.25rem;"`));
  test('m_xl', () =>
    expect(spacing.m_xl()).toMatchInlineSnapshot(`"margin:0.75rem;"`));
  test('m_xs', () =>
    expect(spacing.m_xs()).toMatchInlineSnapshot(`"margin:0.125rem;"`));
  test('mb_auto', () =>
    expect(spacing.mb_auto()).toMatchInlineSnapshot(`"margin-bottom:auto;"`));
  test('mb_lg', () =>
    expect(spacing.mb_lg()).toMatchInlineSnapshot(`"margin-bottom:0.5rem;"`));
  test('mb_md', () =>
    expect(spacing.mb_md()).toMatchInlineSnapshot(`"margin-bottom:0.375rem;"`));
  test('mb_none', () =>
    expect(spacing.mb_none()).toMatchInlineSnapshot(`"margin-bottom:0rem;"`));
  test('mb_px', () =>
    expect(spacing.mb_px()).toMatchInlineSnapshot(
      `"margin-bottom:0.0625rem;"`,
    ));
  test('mb_sm', () =>
    expect(spacing.mb_sm()).toMatchInlineSnapshot(`"margin-bottom:0.25rem;"`));
  test('mb_xl', () =>
    expect(spacing.mb_xl()).toMatchInlineSnapshot(`"margin-bottom:0.75rem;"`));
  test('mb_xs', () =>
    expect(spacing.mb_xs()).toMatchInlineSnapshot(`"margin-bottom:0.125rem;"`));
  test('ml_auto', () =>
    expect(spacing.ml_auto()).toMatchInlineSnapshot(`"margin-left:auto;"`));
  test('ml_lg', () =>
    expect(spacing.ml_lg()).toMatchInlineSnapshot(`"margin-left:0.5rem;"`));
  test('ml_md', () =>
    expect(spacing.ml_md()).toMatchInlineSnapshot(`"margin-left:0.375rem;"`));
  test('ml_none', () =>
    expect(spacing.ml_none()).toMatchInlineSnapshot(`"margin-left:0rem;"`));
  test('ml_px', () =>
    expect(spacing.ml_px()).toMatchInlineSnapshot(`"margin-left:0.0625rem;"`));
  test('ml_sm', () =>
    expect(spacing.ml_sm()).toMatchInlineSnapshot(`"margin-left:0.25rem;"`));
  test('ml_xl', () =>
    expect(spacing.ml_xl()).toMatchInlineSnapshot(`"margin-left:0.75rem;"`));
  test('ml_xs', () =>
    expect(spacing.ml_xs()).toMatchInlineSnapshot(`"margin-left:0.125rem;"`));
  test('mr_auto', () =>
    expect(spacing.mr_auto()).toMatchInlineSnapshot(`"margin-right:auto;"`));
  test('mr_lg', () =>
    expect(spacing.mr_lg()).toMatchInlineSnapshot(`"margin-right:0.5rem;"`));
  test('mr_md', () =>
    expect(spacing.mr_md()).toMatchInlineSnapshot(`"margin-right:0.375rem;"`));
  test('mr_none', () =>
    expect(spacing.mr_none()).toMatchInlineSnapshot(`"margin-right:0rem;"`));
  test('mr_px', () =>
    expect(spacing.mr_px()).toMatchInlineSnapshot(`"margin-right:0.0625rem;"`));
  test('mr_sm', () =>
    expect(spacing.mr_sm()).toMatchInlineSnapshot(`"margin-right:0.25rem;"`));
  test('mr_xl', () =>
    expect(spacing.mr_xl()).toMatchInlineSnapshot(`"margin-right:0.75rem;"`));
  test('mr_xs', () =>
    expect(spacing.mr_xs()).toMatchInlineSnapshot(`"margin-right:0.125rem;"`));
  test('mt_auto', () =>
    expect(spacing.mt_auto()).toMatchInlineSnapshot(`"margin-top:auto;"`));
  test('mt_lg', () =>
    expect(spacing.mt_lg()).toMatchInlineSnapshot(`"margin-top:0.5rem;"`));
  test('mt_md', () =>
    expect(spacing.mt_md()).toMatchInlineSnapshot(`"margin-top:0.375rem;"`));
  test('mt_none', () =>
    expect(spacing.mt_none()).toMatchInlineSnapshot(`"margin-top:0rem;"`));
  test('mt_px', () =>
    expect(spacing.mt_px()).toMatchInlineSnapshot(`"margin-top:0.0625rem;"`));
  test('mt_sm', () =>
    expect(spacing.mt_sm()).toMatchInlineSnapshot(`"margin-top:0.25rem;"`));
  test('mt_xl', () =>
    expect(spacing.mt_xl()).toMatchInlineSnapshot(`"margin-top:0.75rem;"`));
  test('mt_xs', () =>
    expect(spacing.mt_xs()).toMatchInlineSnapshot(`"margin-top:0.125rem;"`));
  test('mx_auto', () =>
    expect(spacing.mx_auto()).toMatchInlineSnapshot(
      `"margin-right:auto;margin-left:auto;"`,
    ));
  test('mx_lg', () =>
    expect(spacing.mx_lg()).toMatchInlineSnapshot(
      `"margin-right:0.5rem;margin-left:0.5rem;"`,
    ));
  test('mx_md', () =>
    expect(spacing.mx_md()).toMatchInlineSnapshot(
      `"margin-right:0.375rem;margin-left:0.375rem;"`,
    ));
  test('mx_none', () =>
    expect(spacing.mx_none()).toMatchInlineSnapshot(
      `"margin-right:0rem;margin-left:0rem;"`,
    ));
  test('mx_px', () =>
    expect(spacing.mx_px()).toMatchInlineSnapshot(
      `"margin-right:0.0625rem;margin-left:0.0625rem;"`,
    ));
  test('mx_sm', () =>
    expect(spacing.mx_sm()).toMatchInlineSnapshot(
      `"margin-right:0.25rem;margin-left:0.25rem;"`,
    ));
  test('mx_xl', () =>
    expect(spacing.mx_xl()).toMatchInlineSnapshot(
      `"margin-right:0.75rem;margin-left:0.75rem;"`,
    ));
  test('mx_xs', () =>
    expect(spacing.mx_xs()).toMatchInlineSnapshot(
      `"margin-right:0.125rem;margin-left:0.125rem;"`,
    ));
  test('my_auto', () =>
    expect(spacing.my_auto()).toMatchInlineSnapshot(
      `"margin-top:auto;margin-bottom:auto;"`,
    ));
  test('my_lg', () =>
    expect(spacing.my_lg()).toMatchInlineSnapshot(
      `"margin-top:0.5rem;margin-bottom:0.5rem;"`,
    ));
  test('my_md', () =>
    expect(spacing.my_md()).toMatchInlineSnapshot(
      `"margin-top:0.375rem;margin-bottom:0.375rem;"`,
    ));
  test('my_none', () =>
    expect(spacing.my_none()).toMatchInlineSnapshot(
      `"margin-top:0rem;margin-bottom:0rem;"`,
    ));
  test('my_px', () =>
    expect(spacing.my_px()).toMatchInlineSnapshot(
      `"margin-top:0.0625rem;margin-bottom:0.0625rem;"`,
    ));
  test('my_sm', () =>
    expect(spacing.my_sm()).toMatchInlineSnapshot(
      `"margin-top:0.25rem;margin-bottom:0.25rem;"`,
    ));
  test('my_xl', () =>
    expect(spacing.my_xl()).toMatchInlineSnapshot(
      `"margin-top:0.75rem;margin-bottom:0.75rem;"`,
    ));
  test('my_xs', () =>
    expect(spacing.my_xs()).toMatchInlineSnapshot(
      `"margin-top:0.125rem;margin-bottom:0.125rem;"`,
    ));
  test('p_auto', () =>
    expect(spacing.p_auto()).toMatchInlineSnapshot(`"padding:auto;"`));
  test('p_lg', () =>
    expect(spacing.p_lg()).toMatchInlineSnapshot(`"padding:0.5rem;"`));
  test('p_md', () =>
    expect(spacing.p_md()).toMatchInlineSnapshot(`"padding:0.375rem;"`));
  test('p_none', () =>
    expect(spacing.p_none()).toMatchInlineSnapshot(`"padding:0rem;"`));
  test('p_px', () =>
    expect(spacing.p_px()).toMatchInlineSnapshot(`"padding:0.0625rem;"`));
  test('p_sm', () =>
    expect(spacing.p_sm()).toMatchInlineSnapshot(`"padding:0.25rem;"`));
  test('p_xl', () =>
    expect(spacing.p_xl()).toMatchInlineSnapshot(`"padding:0.75rem;"`));
  test('p_xs', () =>
    expect(spacing.p_xs()).toMatchInlineSnapshot(`"padding:0.125rem;"`));
  test('pb_auto', () =>
    expect(spacing.pb_auto()).toMatchInlineSnapshot(`"padding-bottom:auto;"`));
  test('pb_lg', () =>
    expect(spacing.pb_lg()).toMatchInlineSnapshot(`"padding-bottom:0.5rem;"`));
  test('pb_md', () =>
    expect(spacing.pb_md()).toMatchInlineSnapshot(
      `"padding-bottom:0.375rem;"`,
    ));
  test('pb_none', () =>
    expect(spacing.pb_none()).toMatchInlineSnapshot(`"padding-bottom:0rem;"`));
  test('pb_px', () =>
    expect(spacing.pb_px()).toMatchInlineSnapshot(
      `"padding-bottom:0.0625rem;"`,
    ));
  test('pb_sm', () =>
    expect(spacing.pb_sm()).toMatchInlineSnapshot(`"padding-bottom:0.25rem;"`));
  test('pb_xl', () =>
    expect(spacing.pb_xl()).toMatchInlineSnapshot(`"padding-bottom:0.75rem;"`));
  test('pb_xs', () =>
    expect(spacing.pb_xs()).toMatchInlineSnapshot(
      `"padding-bottom:0.125rem;"`,
    ));
  test('pl_auto', () =>
    expect(spacing.pl_auto()).toMatchInlineSnapshot(`"padding-left:auto;"`));
  test('pl_lg', () =>
    expect(spacing.pl_lg()).toMatchInlineSnapshot(`"padding-left:0.5rem;"`));
  test('pl_md', () =>
    expect(spacing.pl_md()).toMatchInlineSnapshot(`"padding-left:0.375rem;"`));
  test('pl_none', () =>
    expect(spacing.pl_none()).toMatchInlineSnapshot(`"padding-left:0rem;"`));
  test('pl_px', () =>
    expect(spacing.pl_px()).toMatchInlineSnapshot(`"padding-left:0.0625rem;"`));
  test('pl_sm', () =>
    expect(spacing.pl_sm()).toMatchInlineSnapshot(`"padding-left:0.25rem;"`));
  test('pl_xl', () =>
    expect(spacing.pl_xl()).toMatchInlineSnapshot(`"padding-left:0.75rem;"`));
  test('pl_xs', () =>
    expect(spacing.pl_xs()).toMatchInlineSnapshot(`"padding-left:0.125rem;"`));
  test('pr_auto', () =>
    expect(spacing.pr_auto()).toMatchInlineSnapshot(`"padding-right:auto;"`));
  test('pr_lg', () =>
    expect(spacing.pr_lg()).toMatchInlineSnapshot(`"padding-right:0.5rem;"`));
  test('pr_md', () =>
    expect(spacing.pr_md()).toMatchInlineSnapshot(`"padding-right:0.375rem;"`));
  test('pr_none', () =>
    expect(spacing.pr_none()).toMatchInlineSnapshot(`"padding-right:0rem;"`));
  test('pr_px', () =>
    expect(spacing.pr_px()).toMatchInlineSnapshot(
      `"padding-right:0.0625rem;"`,
    ));
  test('pr_sm', () =>
    expect(spacing.pr_sm()).toMatchInlineSnapshot(`"padding-right:0.25rem;"`));
  test('pr_xl', () =>
    expect(spacing.pr_xl()).toMatchInlineSnapshot(`"padding-right:0.75rem;"`));
  test('pr_xs', () =>
    expect(spacing.pr_xs()).toMatchInlineSnapshot(`"padding-right:0.125rem;"`));
  test('pt_auto', () =>
    expect(spacing.pt_auto()).toMatchInlineSnapshot(`"padding-top:auto;"`));
  test('pt_lg', () =>
    expect(spacing.pt_lg()).toMatchInlineSnapshot(`"padding-top:0.5rem;"`));
  test('pt_md', () =>
    expect(spacing.pt_md()).toMatchInlineSnapshot(`"padding-top:0.375rem;"`));
  test('pt_none', () =>
    expect(spacing.pt_none()).toMatchInlineSnapshot(`"padding-top:0rem;"`));
  test('pt_px', () =>
    expect(spacing.pt_px()).toMatchInlineSnapshot(`"padding-top:0.0625rem;"`));
  test('pt_sm', () =>
    expect(spacing.pt_sm()).toMatchInlineSnapshot(`"padding-top:0.25rem;"`));
  test('pt_xl', () =>
    expect(spacing.pt_xl()).toMatchInlineSnapshot(`"padding-top:0.75rem;"`));
  test('pt_xs', () =>
    expect(spacing.pt_xs()).toMatchInlineSnapshot(`"padding-top:0.125rem;"`));
  test('px_auto', () =>
    expect(spacing.px_auto()).toMatchInlineSnapshot(
      `"padding-right:auto;padding-left:auto;"`,
    ));
  test('px_lg', () =>
    expect(spacing.px_lg()).toMatchInlineSnapshot(
      `"padding-right:0.5rem;padding-left:0.5rem;"`,
    ));
  test('px_md', () =>
    expect(spacing.px_md()).toMatchInlineSnapshot(
      `"padding-right:0.375rem;padding-left:0.375rem;"`,
    ));
  test('px_none', () =>
    expect(spacing.px_none()).toMatchInlineSnapshot(
      `"padding-right:0rem;padding-left:0rem;"`,
    ));
  test('px_px', () =>
    expect(spacing.px_px()).toMatchInlineSnapshot(
      `"padding-right:0.0625rem;padding-left:0.0625rem;"`,
    ));
  test('px_sm', () =>
    expect(spacing.px_sm()).toMatchInlineSnapshot(
      `"padding-right:0.25rem;padding-left:0.25rem;"`,
    ));
  test('px_xl', () =>
    expect(spacing.px_xl()).toMatchInlineSnapshot(
      `"padding-right:0.75rem;padding-left:0.75rem;"`,
    ));
  test('px_xs', () =>
    expect(spacing.px_xs()).toMatchInlineSnapshot(
      `"padding-right:0.125rem;padding-left:0.125rem;"`,
    ));
  test('py_auto', () =>
    expect(spacing.py_auto()).toMatchInlineSnapshot(
      `"padding-top:auto;padding-bottom:auto;"`,
    ));
  test('py_lg', () =>
    expect(spacing.py_lg()).toMatchInlineSnapshot(
      `"padding-top:0.5rem;padding-bottom:0.5rem;"`,
    ));
  test('py_md', () =>
    expect(spacing.py_md()).toMatchInlineSnapshot(
      `"padding-top:0.375rem;padding-bottom:0.375rem;"`,
    ));
  test('py_none', () =>
    expect(spacing.py_none()).toMatchInlineSnapshot(
      `"padding-top:0rem;padding-bottom:0rem;"`,
    ));
  test('py_px', () =>
    expect(spacing.py_px()).toMatchInlineSnapshot(
      `"padding-top:0.0625rem;padding-bottom:0.0625rem;"`,
    ));
  test('py_sm', () =>
    expect(spacing.py_sm()).toMatchInlineSnapshot(
      `"padding-top:0.25rem;padding-bottom:0.25rem;"`,
    ));
  test('py_xl', () =>
    expect(spacing.py_xl()).toMatchInlineSnapshot(
      `"padding-top:0.75rem;padding-bottom:0.75rem;"`,
    ));
  test('py_xs', () =>
    expect(spacing.py_xs()).toMatchInlineSnapshot(
      `"padding-top:0.125rem;padding-bottom:0.125rem;"`,
    ));
});
