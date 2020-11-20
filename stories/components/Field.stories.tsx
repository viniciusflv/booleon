import React from 'react';

import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import { Field } from '../../packages/components/src';

export default {
  title: 'Components / Field',
  component: Field,
  decorators: [withA11y, withKnobs],
};

export const File = () => {
  return (
    <Field.File
      id="File"
      placeholder="Selecione o arquivo"
      label="File"
      onChange={({ target }) => {
        console.log(target.files);
      }}
    />
  );
};

export const Textarea = () => {
  return (
    <Field.Textarea
      id="textarea"
      placeholder="Digite o texto"
      label="Textarea"
      onChange={({ target }) => {
        console.log(target.value);
      }}
    />
  );
};

export const Text = () => {
  return (
    <Field.Text
      id="text"
      placeholder="Digite o texto"
      label="Text"
      onChange={({ target }) => {
        console.log(target.value);
      }}>
      <option>option 1</option>
      <option>option 2</option>
      <option>option 3</option>
    </Field.Text>
  );
};

export const Checkbox = () => {
  return (
    <Field.Checkbox
      id="checkbox"
      label="Checkbox"
      onChange={({ target }) => {
        console.log(target.checked);
      }}
    />
  );
};

export const Radio = () => {
  return (
    <div>
      <Field.Radio
        id="radio1"
        name="radio"
        label="Radio"
        onChange={({ target }) => {
          console.log(target.checked);
        }}
      />
      <Field.Radio
        id="radio2"
        name="radio"
        label="Radio"
        onChange={({ target }) => {
          console.log(target.checked);
        }}
      />
    </div>
  );
};

export const Select = () => {
  return (
    <Field.Select
      id="select"
      label="Select"
      placeholder="Selecione a opção"
      onChange={({ target }) => {
        console.log(target.value);
      }}>
      <option>option 1</option>
      <option>option 2</option>
      <option>option 3</option>
    </Field.Select>
  );
};
