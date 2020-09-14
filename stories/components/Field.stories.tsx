import React from 'react';
import { Field } from '../../packages/components/src';
import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

export default {
  title: 'Components / Field',
  component: Field.Checkbox,
  decorators: [withA11y, withKnobs],
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
