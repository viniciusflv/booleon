import { Text, View } from '../../../../core/src';
import React, { FC, ReactElement } from 'react';

export const Field: FC<any> = ({ label, pure, ...props }) => {
  const isHorizontal = props?.checkbox || props?.radio;
  const dontDecorate = pure || isHorizontal;

  function handleDecoration(input: ReactElement) {
    return (
      <View
        fieldset={!dontDecorate}
        flex
        b_edge
        bc_000
        b_thin
        main_between
        cross_center={isHorizontal}
        col={!isHorizontal}
        row_reverse={isHorizontal}>
        {label && (
          <View ml_sm px_sm legend>
            <Text label>{label}</Text>
          </View>
        )}
        {input}
      </View>
    );
  }

  return handleDecoration(<View p_md outline_none {...props} />);
};
