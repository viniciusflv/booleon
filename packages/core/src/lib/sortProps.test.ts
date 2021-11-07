import { sortProps } from './sortProps';

describe('sortProps', () => {
  test('string key', () => {
    const res = sortProps(
      {
        flex: true,
        onClick: () => '',
        children: 'aaa',
      },
      {
        flex: () => 'display:flex;',
      },
      {},
    );

    expect(res).toMatchInlineSnapshot(`
      Array [
        Object {
          "flex": true,
        },
        Object {
          "children": "aaa",
          "onClick": [Function],
        },
      ]
    `);
  });

  test('symbol key', () => {
    const res = sortProps(
      {
        display_flex: true,
        onClick: () => '',
      },
      {
        [Symbol('display_$')]: ($) => `display:${$};`,
      },
      {},
    );

    expect(res).toMatchInlineSnapshot(`
      Array [
        Object {
          "display_flex": true,
        },
        Object {
          "onClick": [Function],
        },
      ]
    `);
  });

  test('attachment key', () => {
    const res = sortProps(
      {
        hover__display_flex: true,
        onClick: () => '',
      },
      {
        [Symbol('display_$')]: ($) => `display:${$};`,
      },
      {},
    );

    expect(res).toMatchInlineSnapshot(`
      Array [
        Object {
          "hover__display_flex": true,
        },
        Object {
          "onClick": [Function],
        },
      ]
    `);
  });

  test('custom attachment key', () => {
    const res = sortProps(
      {
        customAttachment__display_flex: true,
        onClick: () => '',
      },
      {
        [Symbol('display_$')]: ($) => `display:${$};`,
      },
      {
        customAttachment: () => '',
      },
    );

    expect(res).toMatchInlineSnapshot(`
      Array [
        Object {
          "customAttachment__display_flex": true,
        },
        Object {
          "onClick": [Function],
        },
      ]
    `);
  });
});
