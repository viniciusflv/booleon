import React, { useState } from 'react';

import { withA11y } from '@storybook/addon-a11y';
import { withKnobs } from '@storybook/addon-knobs';

import { Button } from '../../packages/components/src';

export default {
  title: 'Components / Button',
  component: Button,
  decorators: [withA11y, withKnobs],
};

export const Default = () => {
  const [state, setState] = useState(undefined);
  const toggle = () => setState(!state);
  return (
    <Button blue={state} onClick={toggle}>
      Default
    </Button>
  );
};

export const Blue = () => {
  return (
    <Button blue onClick={console.log}>
      Blue
    </Button>
  );
};

export const Red = () => {
  return (
    <Button red onClick={console.log}>
      Red
    </Button>
  );
};

export const Green = () => {
  return (
    <Button green onClick={console.log}>
      Green
    </Button>
  );
};

export const White = () => {
  return (
    <Button white onClick={console.log}>
      White
    </Button>
  );
};

export const Disabled = () => {
  return (
    <Button disabled onClick={console.log}>
      Disabled
    </Button>
  );
};

export const Outlined = () => {
  return (
    <Button outlined onClick={console.log}>
      Outlined
    </Button>
  );
};
