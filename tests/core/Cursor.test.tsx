import 'jest-styled-components';
import { View } from '../../packages/core/src';
import React from 'react';
import renderer from 'react-test-renderer';

describe('Cursor', () => {
  test('cr_auto', () => {
    const component = renderer.create(<View cr_auto />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'auto');
  });

  test('cr_default', () => {
    const component = renderer.create(<View cr_default />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'default');
  });

  test('cr_pointer', () => {
    const component = renderer.create(<View cr_pointer />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'pointer');
  });

  test('cr_wait', () => {
    const component = renderer.create(<View cr_wait />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'wait');
  });

  test('cr_text', () => {
    const component = renderer.create(<View cr_text />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'text');
  });

  test('cr_move', () => {
    const component = renderer.create(<View cr_move />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'move');
  });

  test('cr_disallowed', () => {
    const component = renderer.create(<View cr_disallowed />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'not-allowed');
  });

  test('cr_cross', () => {
    const component = renderer.create(<View cr_cross />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'crosshair');
  });

  test('cr_grabbing', () => {
    const component = renderer.create(<View cr_grabbing />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'grabbing');
  });

  test('cr_help', () => {
    const component = renderer.create(<View cr_help />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'help');
  });

  test('cry_resize', () => {
    const component = renderer.create(<View cry_resize />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'col-resize');
  });

  test('cra_resize', () => {
    const component = renderer.create(<View cra_resize />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'nesw-resize');
  });

  test('crb_resize', () => {
    const component = renderer.create(<View crb_resize />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'nwse-resize');
  });

  test('crx_resize', () => {
    const component = renderer.create(<View crx_resize />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'row-resize');
  });

  test('cr_no_drop', () => {
    const component = renderer.create(<View cr_no_drop />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'no-drop');
  });

  test('cr_none', () => {
    const component = renderer.create(<View cr_none />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'none');
  });

  test('cr_progress', () => {
    const component = renderer.create(<View cr_progress />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'progress');
  });

  test('cr_zoom_in', () => {
    const component = renderer.create(<View cr_zoom_in />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'zoom-in');
  });

  test('cr_zoom_out', () => {
    const component = renderer.create(<View cr_zoom_out />).toJSON();
    expect(component).toHaveStyleRule('cursor', 'zoom-out');
  });

  test('cr_noevents', () => {
    const component = renderer.create(<View cr_noevents />).toJSON();
    expect(component).toHaveStyleRule('pointer-events', 'none');
  });

  test('cr_events', () => {
    const component = renderer.create(<View cr_events />).toJSON();
    expect(component).toHaveStyleRule('pointer-events', 'auto');
  });

  test('cr_url', () => {
    const url = 'http://www.javascriptkit.com/dhtmltutors/cursor-hand.gif';
    const component = renderer.create(<View cr_url={url} />).toJSON();
    expect(component).toHaveStyleRule('cursor', `url(${url}),auto`);
  });
});
