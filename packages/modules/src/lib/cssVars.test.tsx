/**
 * @jest-environment node
 */
import React from 'react';
import ReactDOM from 'react-dom/server';

import modules from '.';
import { booleon } from '../../../react/src';

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
      '"<style data-booleon=\\"bl-944705319\\">.bl-944705319{background-color:var(--colors-primary);}</style><div class=\\"bl-944705319\\" data-testid=\\"bg_color_var_primary\\"></div>"',
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
      '"<style data-booleon=\\"bl--2024063288\\">.bl--2024063288{border:1px solid var(--colors-primary);}</style><div class=\\"bl--2024063288\\" data-testid=\\"bd_1px_solid_var_primary\\"></div>"',
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
      '"<style data-booleon=\\"bl-2005712689\\">.bl-2005712689{border-color:var(--colors-dark-primary);}</style><div class=\\"bl-2005712689\\" data-testid=\\"bd_color_var_dark_primary\\"></div>"',
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
      '"<style data-booleon=\\"bl--1799776633\\">.bl--1799776633{border-width:var(--sizes-primary);}</style><div class=\\"bl--1799776633\\" data-testid=\\"bd_width_var_primary\\"></div>"',
    );
  });
});