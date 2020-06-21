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
  return <Field text label={text('Label', 'Label')} />;
};

export const Select = () => {
  const options = text('Options', 'One Two Three').split(/\s/);
  return (
    <Field
      select
      label={text('Label', 'Label')}
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
  return <Field checkbox label={text('Label', 'Label')} />;
};

export const Radio = () => {
  return <Field radio label={text('Label', 'Label')} />;
};

export const Color = () => {
  return <Field color label={text('Label', 'Label')} />;
};

export const Email = () => {
  return <Field email label={text('Label', 'Label')} />;
};

export const Password = () => {
  return <Field password label={text('Label', 'Label')} />;
};

export const Number = () => {
  return <Field number label={text('Label', 'Label')} />;
};

export const File = () => {
  return <Field file label={text('Label', 'Label')} />;
};

export const Range = () => {
  return <Field range label={text('Label', 'Label')} />;
};