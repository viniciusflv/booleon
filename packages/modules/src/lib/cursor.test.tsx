import React from 'react';
import '@testing-library/jest-dom';

import { render } from '@testing-library/react';

import { booleon } from '../../../react/src';
import { cursor } from './cursor';

const BooleonComponent = booleon.div(cursor);
describe('Cursor', () => {
  test('cr_auto', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cr_auto" cr_auto />,
    );
    expect(getByTestId('cr_auto')).toHaveStyle('cursor: auto;');
  });

  test('cr_default', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cr_default" cr_default />,
    );
    expect(getByTestId('cr_default')).toHaveStyle('cursor: default;');
  });

  test('cr_pointer', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cr_pointer" cr_pointer />,
    );
    expect(getByTestId('cr_pointer')).toHaveStyle('cursor: pointer;');
  });

  test('cr_wait', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cr_wait" cr_wait />,
    );
    expect(getByTestId('cr_wait')).toHaveStyle('cursor: wait;');
  });

  test('cr_text', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cr_text" cr_text />,
    );
    expect(getByTestId('cr_text')).toHaveStyle('cursor: text;');
  });

  test('cr_move', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cr_move" cr_move />,
    );
    expect(getByTestId('cr_move')).toHaveStyle('cursor: move;');
  });

  test('cr_disallowed', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cr_disallowed" cr_disallowed />,
    );
    expect(getByTestId('cr_disallowed')).toHaveStyle('cursor: not-allowed;');
  });

  test('cr_cross', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cr_cross" cr_cross />,
    );
    expect(getByTestId('cr_cross')).toHaveStyle('cursor: crosshair;');
  });

  test('cr_grabbing', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cr_grabbing" cr_grabbing />,
    );
    expect(getByTestId('cr_grabbing')).toHaveStyle('cursor: grabbing;');
  });

  test('cr_help', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cr_help" cr_help />,
    );
    expect(getByTestId('cr_help')).toHaveStyle('cursor: help;');
  });

  test('cry_resize', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cry_resize" cry_resize />,
    );
    expect(getByTestId('cry_resize')).toHaveStyle('cursor: col-resize;');
  });

  test('cra_resize', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cra_resize" cra_resize />,
    );
    expect(getByTestId('cra_resize')).toHaveStyle('cursor: nesw-resize;');
  });

  test('crb_resize', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="crb_resize" crb_resize />,
    );
    expect(getByTestId('crb_resize')).toHaveStyle('cursor: nwse-resize;');
  });

  test('crx_resize', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="crx_resize" crx_resize />,
    );
    expect(getByTestId('crx_resize')).toHaveStyle('cursor: row-resize;');
  });

  test('cr_no_drop', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cr_no_drop" cr_no_drop />,
    );
    expect(getByTestId('cr_no_drop')).toHaveStyle('cursor: no-drop;');
  });

  test('cr_none', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cr_none" cr_none />,
    );
    expect(getByTestId('cr_none')).toHaveStyle('cursor: none;');
  });

  test('cr_progress', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cr_progress" cr_progress />,
    );
    expect(getByTestId('cr_progress')).toHaveStyle('cursor: progress;');
  });

  test('cr_zoom_in', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cr_zoom_in" cr_zoom_in />,
    );
    expect(getByTestId('cr_zoom_in')).toHaveStyle('cursor: zoom-in;');
  });

  test('cr_zoom_out', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cr_zoom_out" cr_zoom_out />,
    );
    expect(getByTestId('cr_zoom_out')).toHaveStyle('cursor: zoom-out;');
  });

  test('cr_noevents', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cr_noevents" cr_noevents />,
    );
    expect(getByTestId('cr_noevents')).toHaveStyle('pointer-events: none;');
  });

  test('cr_events', () => {
    const { getByTestId } = render(
      <BooleonComponent data-testid="cr_events" cr_events />,
    );
    expect(getByTestId('cr_events')).toHaveStyle('pointer-events: auto;');
  });

  test('cr_url', () => {
    const cr_url =
      'data:image/gif;base64,R0lGODdhBQAFAPABAP////8AACwAAAAABQAFAAACCARihhe9q0wBADs=';
    const { getByTestId } = render(
      <BooleonComponent data-testid="cr_url" cr_url={cr_url} />,
    );
    expect(getByTestId('cr_url')).toHaveStyle(`cursor: url(${cr_url}),auto;`);
  });
});
