import { Base } from '../../packages/core/src';
import React, { FC } from 'react';

export default {
  title: 'Core | Base',
  component: Base,
};

export const NoProps: FC<typeof Base> = () => <Base />;
