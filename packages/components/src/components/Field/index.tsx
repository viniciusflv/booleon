import { Text, View } from '../../../../core/src';
import React, { FC } from 'react';

export const Field: FC<any> = ({ label, pure, children, ...props }) => {
  // const changeOrientation = props?.checkbox || props?.radio;
  // const shouldDecorate = pure || isInline;
  if (props?.checkbox || props?.radio) {
    return (
      <View flex cross_center w_max_16>
        <View h_2 w_2 h_min_2 w_min_2 mr_sm>
          <View
            id={label}
            w_full
            h_full
            p_md
            outline_none
            cursor_pointer
            {...props}
          />
        </View>
        {label && (
          <Text label for={label}>
            {label}
          </Text>
        )}
      </View>
    );
  }

  return (
    <View
      fieldset
      flex
      col
      b_edge
      bc_000
      b_thin
      main_between
      w_min_16
      pr_md={props?.select}>
      {label && (
        <View ml_sm px_sm legend>
          <Text label for={label}>
            {label}
          </Text>
        </View>
      )}
      <View
        id={label}
        p_md
        outline_none
        h_4
        w_full
        cursor_pointer={props?.select}
        {...props}>
        {props?.select && children}
      </View>
    </View>
  );
};
