import { transition } from './transition';

test('transition', () => {
  expect(Object.keys(transition).map((key) => transition[key]()))
    .toMatchInlineSnapshot(`
    Array [
      "transition-delay:0.015s;",
      "transition-delay:0.045s;",
      "transition-delay:0.075s;",
      "transition-delay:0.15s;",
      "transition-delay:0.3s;",
      "transition-duration:0s;",
      "transition-duration:0.2s;",
      "transition-duration:0.4s;",
      "transition-duration:0.15s;",
      "transition-duration:0.3s;",
      "transition-duration:0.45s;",
      "transition-duration:0.6s;",
      "transition-duration:1.2s;",
      "transition-duration:1.8s;",
      "transition-duration:2.4s;",
      "transition-duration:3s;",
      "transition-property:background-color,border-color,color,fill,stroke,opacity,box-shadow,transform;",
      "transition-property:none;",
      "transition-property:all;",
      "transition-property:background-color,border-color,color,fill,stroke;",
      "transition-property:opacity;",
      "transition-property:box-shadow;",
      "transition-property:transform;",
      "transition-timing-function:linear;",
      "transition-timing-function:cubic-bezier(0.4,0,1,1);",
      "transition-timing-function:cubic-bezier(0,0,0.2,1);",
      "transition-timing-function:cubic-bezier(0.4,0,0.2,1);",
    ]
  `);
});
