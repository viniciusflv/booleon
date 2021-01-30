import { filterProps } from '../../packages/core/src';

test('filterProps', () => {
  const [booleonProps, forwardProps] = filterProps({
    red: true,
    id: true,
  });

  expect(booleonProps).toStrictEqual({
    red: true,
  });

  expect(forwardProps).toStrictEqual({
    id: true,
  });

  expect(booleonProps).not.toStrictEqual({
    id: true,
  });

  expect(forwardProps).not.toStrictEqual({
    red: true,
  });
});
