import { composeProps } from './composeProps';

test('composeProps', () => {
  const res = composeProps({
    dark__flex: true,
    xs__flex: true,
    sm__flex: true,
    md__flex: true,
    lg__flex: true,
    xl__flex: true,
    focus__flex: true,
    within__flex: true,
    after__flex: true,
    before__flex: true,
    active__flex: true,
    checked__flex: true,
    disabled__flex: true,
    hover__flex: true,
    visited__flex: true,
    child__flex: true,
    last__flex: true,
    first__flex: true,
    adjacent__flex: true,
    sibling__flex: true,
    odd__flex: true,
    even__flex: true,
    kf__flex: true,
  });
  expect(res).toMatchInlineSnapshot(`
      Object {
        "active": Object {
          "css": Object {
            "flex": true,
          },
        },
        "adjacent": Object {
          "css": Object {
            "flex": true,
          },
        },
        "after": Object {
          "css": Object {
            "flex": true,
          },
        },
        "before": Object {
          "css": Object {
            "flex": true,
          },
        },
        "checked": Object {
          "css": Object {
            "flex": true,
          },
        },
        "child": Object {
          "css": Object {
            "flex": true,
          },
        },
        "dark": Object {
          "css": Object {
            "flex": true,
          },
        },
        "disabled": Object {
          "css": Object {
            "flex": true,
          },
        },
        "even": Object {
          "css": Object {
            "flex": true,
          },
        },
        "first": Object {
          "css": Object {
            "flex": true,
          },
        },
        "focus": Object {
          "css": Object {
            "flex": true,
          },
        },
        "hover": Object {
          "css": Object {
            "flex": true,
          },
        },
        "kf": Object {
          "css": Object {
            "flex": true,
          },
        },
        "last": Object {
          "css": Object {
            "flex": true,
          },
        },
        "lg": Object {
          "css": Object {
            "flex": true,
          },
        },
        "md": Object {
          "css": Object {
            "flex": true,
          },
        },
        "odd": Object {
          "css": Object {
            "flex": true,
          },
        },
        "sibling": Object {
          "css": Object {
            "flex": true,
          },
        },
        "sm": Object {
          "css": Object {
            "flex": true,
          },
        },
        "visited": Object {
          "css": Object {
            "flex": true,
          },
        },
        "within": Object {
          "css": Object {
            "flex": true,
          },
        },
        "xl": Object {
          "css": Object {
            "flex": true,
          },
        },
        "xs": Object {
          "css": Object {
            "flex": true,
          },
        },
      }
    `);
});
