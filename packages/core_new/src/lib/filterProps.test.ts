import { filterProps } from './filterProps';

test('cssCompiler', () => {
  const [htmlProps, filteredProps] = filterProps({
    notReactHtmlProp: true,
    className: 'flex',
  });
  expect(htmlProps).toStrictEqual({
    className: 'flex',
  });
  expect(filteredProps).toStrictEqual({
    notReactHtmlProp: true,
  });
  expect(htmlProps).not.toStrictEqual({
    notReactHtmlProp: true,
    className: 'flex',
  });
  expect(filteredProps).not.toStrictEqual({
    notReactHtmlProp: true,
    className: 'flex',
  });
});
