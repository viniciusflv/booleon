import { classCompiler } from './classCompiler';

test('classCompiler', () => {
  const [className, css] = classCompiler({
    kf: '0% {display:flex;}100% {display:flex;}',
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
  console.log(css);
  expect(className).toBe('bl-679505189');
  expect(css).toMatch(
    '@keyframes bl-679505189 {0% {display:flex;}100% {display:flex;}}.bl-679505189{animation-name:bl-679505189;}',
  );
  expect(css).toMatch('.bl-679505189{display:flex;}');
  expect(css).toMatch('@media(min-width: 640px){.bl-679505189{display:flex;}}');
  expect(css).toMatch('@media(min-width: 640px){.bl-679505189{display:flex;}}');
  expect(css).toMatch('@media(min-width: 768px){.bl-679505189{display:flex;}}');
  expect(css).toMatch(
    '@media(min-width: 1024px){.bl-679505189{display:flex;}}',
  );
  expect(css).toMatch(
    '@media(min-width: 1440px){.bl-679505189{display:flex;}}',
  );
  expect(css).toMatch(
    '@media(min-width: 1920px){.bl-679505189{display:flex;}}',
  );
  expect(css).toMatch('.bl-679505189:active{display:flex;}');
  expect(css).toMatch('.bl-679505189:after{display:flex;}');
  expect(css).toMatch('.bl-679505189:before{display:flex;}');
  expect(css).toMatch('.bl-679505189:checked{display:flex;}');
  expect(css).toMatch('.bl-679505189>*{display:flex;}');
  expect(css).toMatch('.bl-679505189:disabled{display:flex;}');
  expect(css).toMatch('.bl-679505189:nth-child(even){display:flex;}');
  expect(css).toMatch('.bl-679505189:first-child{display:flex;}');
  expect(css).toMatch('.bl-679505189:focus{display:flex;}');
  expect(css).toMatch('.bl-679505189:hover{display:flex;}');
  expect(css).toMatch('.bl-679505189:last-child{display:flex;}');
  expect(css).toMatch('.bl-679505189:nth-child(odd){display:flex;}');
  expect(css).toMatch('.bl-679505189+*{display:flex;}');
  expect(css).toMatch('.bl-679505189:visited{display:flex;}');
  expect(css).toMatch('.bl-679505189:focus-within{display:flex;}');
  expect(css).toMatch(
    '.bl-679505189:focus:focus-within:after:before:active:checked:disabled:hover:visited>*:last-child:first-child+*:nth-child(odd):nth-child(even){display:flex;}',
  );
});
