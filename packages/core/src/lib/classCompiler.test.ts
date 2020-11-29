import { classCompiler } from './classCompiler';

test('classCompiler', () => {
  const [className, css] = classCompiler({
    css: 'display:flex;',
    xs: 'display:flex;',
    sm: 'display:flex;',
    md: 'display:flex;',
    lg: 'display:flex;',
    xl: 'display:flex;',
    active: 'display:flex;',
    after: 'display:flex;',
    before: 'display:flex;',
    checked: 'display:flex;',
    child: 'display:flex;',
    disabled: 'display:flex;',
    even: 'display:flex;',
    first: 'display:flex;',
    focus: 'display:flex;',
    hover: 'display:flex;',
    last: 'display:flex;',
    odd: 'display:flex;',
    sibling: 'display:flex;',
    visited: 'display:flex;',
    within: 'display:flex;',
    focus__within__after__before__active__checked__disabled__hover__visited__child__last__first__sibling__odd__even:
      'display:flex;',
  });
  expect(className).toBe('bl-1380966080');
  expect(css).toMatch('.bl-1380966080{display:flex;}');
  expect(css).toMatch(
    '@media(min-width: 640px){.bl-1380966080{display:flex;}}',
  );
  expect(css).toMatch(
    '@media(min-width: 640px){.bl-1380966080{display:flex;}}',
  );
  expect(css).toMatch(
    '@media(min-width: 768px){.bl-1380966080{display:flex;}}',
  );
  expect(css).toMatch(
    '@media(min-width: 1024px){.bl-1380966080{display:flex;}}',
  );
  expect(css).toMatch(
    '@media(min-width: 1440px){.bl-1380966080{display:flex;}}',
  );
  expect(css).toMatch(
    '@media(min-width: 1920px){.bl-1380966080{display:flex;}}',
  );
  expect(css).toMatch('.bl-1380966080:active{display:flex;}');
  expect(css).toMatch('.bl-1380966080:after{display:flex;}');
  expect(css).toMatch('.bl-1380966080:before{display:flex;}');
  expect(css).toMatch('.bl-1380966080:checked{display:flex;}');
  expect(css).toMatch('.bl-1380966080>*{display:flex;}');
  expect(css).toMatch('.bl-1380966080:disabled{display:flex;}');
  expect(css).toMatch('.bl-1380966080:nth-child(even){display:flex;}');
  expect(css).toMatch('.bl-1380966080:first-child{display:flex;}');
  expect(css).toMatch('.bl-1380966080:focus{display:flex;}');
  expect(css).toMatch('.bl-1380966080:hover{display:flex;}');
  expect(css).toMatch('.bl-1380966080:last-child{display:flex;}');
  expect(css).toMatch('.bl-1380966080:nth-child(odd){display:flex;}');
  expect(css).toMatch('.bl-1380966080+*{display:flex;}');
  expect(css).toMatch('.bl-1380966080:visited{display:flex;}');
  expect(css).toMatch('.bl-1380966080:focus-within{display:flex;}');
  expect(css).toMatch(
    '.bl-1380966080:focus:focus-within:after:before:active:checked:disabled:hover:visited>*:last-child:first-child+*:nth-child(odd):nth-child(even){display:flex;}',
  );
});
