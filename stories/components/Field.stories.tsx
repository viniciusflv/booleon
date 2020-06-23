import { Drop, Field } from '../../packages/components/src';
import { Text as TextComponent } from '../../packages/core/src';
import { text, withKnobs } from '@storybook/addon-knobs';
import React from 'react';

export default {
  title: 'Components | Field',
  component: Drop,
  decorators: [withKnobs],
};

export const Text = () => {
  return <Field text label={text('Label', 'Text')} />;
};

export const TextArea = () => {
  return <Field textarea label={text('Label', 'Text Area')} />;
};

export const Select = () => {
  const options = text('Options', 'One Two Three').split(/\s/);
  return (
    <Field
      select
      label={text('Label', 'Select')}
      onChange={(e: any) => console.log(e?.target?.value)}>
      {options.map((option) => (
        <TextComponent key={option} option>
          {option}
        </TextComponent>
      ))}
    </Field>
  );
};

export const Checkbox = () => {
  return <Field checkbox label={text('Label', 'Checkbox')} />;
};

export const Radio = () => {
  return <Field radio label={text('Label', 'Radio')} />;
};

export const Color = () => {
  return <Field color label={text('Label', 'Color')} />;
};

export const Email = () => {
  return <Field email label={text('Label', 'Email')} />;
};

export const Password = () => {
  return <Field password label={text('Label', 'Password')} />;
};

export const Number = () => {
  return <Field number label={text('Label', 'Number')} />;
};

export const File = () => {
  return <Field file label={text('Label', 'File')} />;
};
