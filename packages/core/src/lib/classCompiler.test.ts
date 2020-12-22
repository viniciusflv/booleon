import { classCompiler } from './classCompiler';

test('classCompiler', () => {
  const [className, css] = classCompiler({
    css: 'display:flex;',
    keyframe: {
      '0%': 'display:flex;',
      '100%': 'display:flex;',
      '25%': 'display:flex;',
      '33%': 'display:flex;',
      '50%': 'display:flex;',
      '66%': 'display:flex;',
      '75%': 'display:flex;',
    },
    medias: {
      '(min-width: 1024px)': 'display:flex;',
      '(min-width: 1440px)': 'display:flex;',
      '(min-width: 1920px)': 'display:flex;',
      '(min-width: 640px)': 'display:flex;',
      '(min-width: 768px)': 'display:flex;',
    },
    pseudo: {
      '+*': 'display:flex;',
      ':active': 'display:flex;',
      ':after': 'display:flex;',
      ':before': 'display:flex;',
      ':checked': 'display:flex;',
      ':disabled': 'display:flex;',
      ':first-child': 'display:flex;',
      ':focus': 'display:flex;',
      ':focus-within': 'display:flex;',
      ':focus:focus-within:after:before:active:checked:disabled:hover:visited>*:last-child:first-child+*:nth-child(odd):nth-child(even)':
        'display:flex;',
      ':hover': 'display:flex;',
      ':last-child': 'display:flex;',
      ':nth-child(even)': 'display:flex;',
      ':nth-child(odd)': 'display:flex;',
      ':visited': 'display:flex;',
      '>*': 'display:flex;',
    },
  });
  expect(className).toBe('bl-1247526574');
  expect(css).toMatch(
    '@keyframes bl-1247526574{0%{display:flex;}100%{display:flex;}25%{display:flex;}33%{display:flex;}50%{display:flex;}66%{display:flex;}75%{display:flex;}}@media(min-width: 1024px){.bl-1247526574{display:flex;}}@media(min-width: 1440px){.bl-1247526574{display:flex;}}@media(min-width: 1920px){.bl-1247526574{display:flex;}}@media(min-width: 640px){.bl-1247526574{display:flex;}}@media(min-width: 768px){.bl-1247526574{display:flex;}}.bl-1247526574+*{display:flex;}.bl-1247526574:active{display:flex;}.bl-1247526574:after{display:flex;}.bl-1247526574:before{display:flex;}.bl-1247526574:checked{display:flex;}.bl-1247526574:disabled{display:flex;}.bl-1247526574:first-child{display:flex;}.bl-1247526574:focus{display:flex;}.bl-1247526574:focus-within{display:flex;}.bl-1247526574:focus:focus-within:after:before:active:checked:disabled:hover:visited>*:last-child:first-child+*:nth-child(odd):nth-child(even){display:flex;}.bl-1247526574:hover{display:flex;}.bl-1247526574:last-child{display:flex;}.bl-1247526574:nth-child(even){display:flex;}.bl-1247526574:nth-child(odd){display:flex;}.bl-1247526574:visited{display:flex;}.bl-1247526574>*{display:flex;}.bl-1247526574{display:flex;}',
  );
  expect(css).toMatch('.bl-1247526574{display:flex;}');
  expect(css).toMatch(
    '@media(min-width: 640px){.bl-1247526574{display:flex;}}',
  );
  expect(css).toMatch(
    '@media(min-width: 640px){.bl-1247526574{display:flex;}}',
  );
  expect(css).toMatch(
    '@media(min-width: 768px){.bl-1247526574{display:flex;}}',
  );
  expect(css).toMatch(
    '@media(min-width: 1024px){.bl-1247526574{display:flex;}}',
  );
  expect(css).toMatch(
    '@media(min-width: 1440px){.bl-1247526574{display:flex;}}',
  );
  expect(css).toMatch(
    '@media(min-width: 1920px){.bl-1247526574{display:flex;}}',
  );
  expect(css).toMatch('.bl-1247526574:active{display:flex;}');
  expect(css).toMatch('.bl-1247526574:after{display:flex;}');
  expect(css).toMatch('.bl-1247526574:before{display:flex;}');
  expect(css).toMatch('.bl-1247526574:checked{display:flex;}');
  expect(css).toMatch('.bl-1247526574>*{display:flex;}');
  expect(css).toMatch('.bl-1247526574:disabled{display:flex;}');
  expect(css).toMatch('.bl-1247526574:nth-child(even){display:flex;}');
  expect(css).toMatch('.bl-1247526574:first-child{display:flex;}');
  expect(css).toMatch('.bl-1247526574:focus{display:flex;}');
  expect(css).toMatch('.bl-1247526574:hover{display:flex;}');
  expect(css).toMatch('.bl-1247526574:last-child{display:flex;}');
  expect(css).toMatch('.bl-1247526574:nth-child(odd){display:flex;}');
  expect(css).toMatch('.bl-1247526574+*{display:flex;}');
  expect(css).toMatch('.bl-1247526574:visited{display:flex;}');
  expect(css).toMatch('.bl-1247526574:focus-within{display:flex;}');
  expect(css).toMatch(
    '.bl-1247526574:focus:focus-within:after:before:active:checked:disabled:hover:visited>*:last-child:first-child+*:nth-child(odd):nth-child(even){display:flex;}',
  );
});
