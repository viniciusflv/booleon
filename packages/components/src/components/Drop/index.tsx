import { Card } from '../Card/index';
import { Field } from '../Field';
import { View, ViewProps } from '../../../../core/src';
import React, { FC } from 'react';

export const Drop: FC<ViewProps | any> = ({ hover, children, ...props }) => {
  const Trigger = children[0];
  const Content = children[1];

  return (
    <View w_max_screen_40 {...props}>
      <Field checkbox label={'aaaa'} />
      {Trigger}
      <Card absolute invisible w_full>
        {Content}
      </Card>
    </View>
  );
};
