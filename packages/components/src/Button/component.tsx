import React, { FC } from 'react';
import { View, Text } from '../../../core/src';
import { ButtonProps } from './interfaces';

const Button: FC<ButtonProps> = ({ children, blue = true, green, red, ...props }) => {
  return (
    <View.button
      bg_1e88e5={blue && !green && !red}
      bg_8bc34a={green}
      bg_f44336={red}
      b_none
      b_rounded
      sd_1
      py_10
      px_25
      cr_pointer
      hover__sd_2
      active__sdi_6
      focus__ol_none
      disabled__bg_e1e2e1
      disabled__cr_disallowed
      disabled__sd_1
      {...props}>
      <Text.span fa_center ls_10 fs_10 fc_fff fw_bold ff_sans>
        {children}
      </Text.span>
    </View.button>
  );
}

export default Button;
