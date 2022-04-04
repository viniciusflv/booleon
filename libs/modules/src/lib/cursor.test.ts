import { cursor } from './cursor';

test('cursor', () => {
  expect(Object.keys(cursor).map((key) => cursor[key]()))
    .toMatchInlineSnapshot(`
    Array [
      "cursor:auto;",
      "cursor:default;",
      "cursor:pointer;",
      "cursor:wait;",
      "cursor:text;",
      "cursor:move;",
      "cursor:not-allowed;",
      "cursor:crosshair;",
      "cursor:grabbing;",
      "cursor:help;",
      "cursor:col-resize;",
      "cursor:nesw-resize;",
      "cursor:nwse-resize;",
      "cursor:row-resize;",
      "cursor:no-drop;",
      "cursor:none;",
      "cursor:progress;",
      "cursor:zoom-in;",
      "cursor:zoom-out;",
      "pointer-events:none;",
      "pointer-events:auto;",
      "cursor:url(undefined),auto;",
    ]
  `);
});
