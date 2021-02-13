/**
 * @jest-environment node
 */
import React from 'react';
import ReactDOM from 'react-dom/server';

import modules from '../../packages/modules/src';
import { booleon } from '../../packages/react/src';

import '@testing-library/jest-dom';

const BooleonComponent = booleon.div(modules);
describe('Booleon', () => {
  test('bg_color_var_primary', () => {
    const string = ReactDOM.renderToString(
      <BooleonComponent
        data-testid="bg_color_var_primary"
        bg_color_var_primary
      />,
    );
    expect(string).toMatchInlineSnapshot(
      '"<style data-booleon=\\"bl--1926553380\\">.bl--1926553380{background-color:var(--colors-primary);}</style><div class=\\"bl--1926553380\\" data-testid=\\"bg_color_var_primary\\"></div>"',
    );
  });

  test('bd_1px_solid_var_primary', () => {
    const string = ReactDOM.renderToString(
      <BooleonComponent
        data-testid="bd_1px_solid_var_primary"
        bd_1px_solid_var_primary
      />,
    );
    expect(string).toMatchInlineSnapshot(
      '"<style data-booleon=\\"bl-30668733\\">.bl-30668733{border:1px solid var(--colors-primary);}</style><div class=\\"bl-30668733\\" data-testid=\\"bd_1px_solid_var_primary\\"></div>"',
    );
  });

  test('bd_color_var_primary', () => {
    const string = ReactDOM.renderToString(
      <BooleonComponent
        data-testid="bd_color_var_dark_primary"
        bd_color_var_dark_primary
      />,
    );
    expect(string).toMatchInlineSnapshot(
      '"<style data-booleon=\\"bl-864117972\\">.bl-864117972{border-color:var(--colors-dark-primary);}</style><div class=\\"bl-864117972\\" data-testid=\\"bd_color_var_dark_primary\\"></div>"',
    );
  });

  test('bd_width_var_primary', () => {
    const string = ReactDOM.renderToString(
      <BooleonComponent
        data-testid="bd_width_var_primary"
        bd_width_var_primary
      />,
    );

    expect(string).toMatchInlineSnapshot(
      '"<style data-booleon=\\"bl-2031177788\\">.bl-2031177788{border-width:var(--sizes-primary);}</style><div class=\\"bl-2031177788\\" data-testid=\\"bd_width_var_primary\\"></div>"',
    );
  });
});
