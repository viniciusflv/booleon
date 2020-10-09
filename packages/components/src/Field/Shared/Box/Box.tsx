import React, { FC } from 'react';

import { View, Text } from '@booleon/core';

const Box: FC<any> = ({ id, type, children, ...props }) => {
  const FieldBox = type === 'textarea' ? View.textarea : View.input;
  return (
    <View.fieldset flex cross_center fc_555 m_0 p_4 b_edge w_full w_max_250>
      {children ? (
        <View.legend ml_12>
          <Text.label htmlFor={id} fsl_none cr_pointer fs_20 ff_sans>
            {children}
          </Text.label>
        </View.legend>
      ) : null}
      <FieldBox
        {...props}
        id={id}
        type={type}
        noappearance
        ol_none
        bw_1
        b_none
        bg_transparent
        px_12
        py_20
        fc_555
        fs_20
        w_full
      />
    </View.fieldset>
  );
};

export default Box;
