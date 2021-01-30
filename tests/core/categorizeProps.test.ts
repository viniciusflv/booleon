import { categorizeProps } from '../../packages/core/src/lib/categorizeProps';

test('cssCompiler', () => {
  const [lightProps, darkProps] = categorizeProps({
    notReactHtmlProp: true,
    dark__prop: true,
  });
  expect(darkProps).toStrictEqual({
    prop: true,
  });
  expect(lightProps).toStrictEqual({
    notReactHtmlProp: true,
  });
  expect(darkProps).not.toStrictEqual({
    notReactHtmlProp: true,
  });
  expect(lightProps).not.toStrictEqual({
    prop: true,
  });
});
