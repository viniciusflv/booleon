import React from 'react';

import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import { Field } from '../../packages/components/src';

export default {
  title: 'Components / Field',
  component: Field.Checkbox,
  decorators: [withA11y, withKnobs],
};

export const Textarea = () => {
  return (
    <Field.Textarea
      id="textarea"
      onChange={({ target }) => {
        console.log(target.value);
      }}>
      Textarea
    </Field.Textarea>
  );
};

export const Text = () => {
  return (
    <Field.Text
      id="text"
      onChange={({ target }) => {
        console.log(target.value);
      }}>
      Text
    </Field.Text>
  );
};

export const Checkbox = () => {
  return (
    <Field.Checkbox
      id="checkbox"
      onChange={({ target }) => {
        console.log(target.checked);
      }}>
      Checkbox
    </Field.Checkbox>
  );
};

export const Radio = () => {
  return (
    <div>
      <Field.Radio
        id="radio1"
        name="radio"
        onChange={({ target }) => {
          console.log(target.checked);
        }}>
        Radio
      </Field.Radio>
      <Field.Radio
        id="radio2"
        name="radio"
        onChange={({ target }) => {
          console.log(target.checked);
        }}>
        Radio
      </Field.Radio>
    </div>
  );
};
