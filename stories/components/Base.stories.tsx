import { Base } from '../../packages/components/src';
import React, { FC } from 'react';

export default {
  title: 'Components | Base',
  component: Base,
};

export const NoProps: FC<typeof Base> = () => <Base />;
