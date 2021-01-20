import { filterProps } from '../../packages/core/src';

test('cssCompiler', () => {
  const { htmlProps, booleonProps } = filterProps({
    notReactHtmlProp: true,
    className: 'flex',
  });
  expect(htmlProps).toStrictEqual({
    className: 'flex',
  });
  expect(booleonProps).toStrictEqual({
    notReactHtmlProp: true,
  });
  expect(htmlProps).not.toStrictEqual({
    notReactHtmlProp: true,
    className: 'flex',
  });
  expect(booleonProps).not.toStrictEqual({
    notReactHtmlProp: true,
    className: 'flex',
  });
});
