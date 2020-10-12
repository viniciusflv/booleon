import React, { FC } from 'react';

import { View, Text } from '../../../../../core/src';

const Box: FC<any> = ({ id, type, placeholder, children, ...props }) => {
  const FieldBox = type === 'textarea' ? View.textarea : View.input;
  return (
    <View.fieldset
      relative
      flex
      cross_center
      fc_555
      m_0
      p_4
      b_edge
      w_full
      w_max_250
      within__bc_0073E6
      within__fc_0073E6>
      {children ? (
        <Text.legend ml_12>
          <Text.label htmlFor={id} fsl_none cr_pointer fs_20 ff_sans>
            {children}
          </Text.label>
        </Text.legend>
      ) : null}
      <FieldBox
        {...props}
        id={id}
        type={type}
        placeholder={placeholder}
        noappearance
        ol_none
        bw_1
        b_none
        bg_transparent
        px_12
        py_20
        fc_555
        fs_20
        ff_sans
        w_full
      />
      {type === 'file' && placeholder ? (
        <View.div
          z_neg
          absolute
          inset
          w_full
          h_full
          px_15
          pt_20
          flex
          cross_center>
          <Text.span fsl_none cr_pointer fc_555 fs_20 ff_sans f_truncate>
            {placeholder}
          </Text.span>
        </View.div>
      ) : null}
    </View.fieldset>
  );
};

export default Box;
