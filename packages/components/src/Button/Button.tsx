import React, { FC } from 'react';

import { Text, View } from '../../../core/src';

const Button: FC<any> = ({
  children,
  blue,
  green,
  red,
  white,
  outlined,
  ...props
}) => {
  const noColor = !blue && !green && !red && !white;
  return (
    <View.button
      bg_transparent={outlined}
      bg_555={!outlined && noColor}
      bg_0073E6={!outlined && blue}
      bg_008563={!outlined && green}
      bg_EB0000={!outlined && red}
      bg_fff={!outlined && white}
      b_none
      bs_solid={outlined}
      bw_10={outlined}
      bc_555={outlined && noColor}
      bc_0073E6={outlined && blue}
      bc_008563={outlined && green}
      bc_EB0000={outlined && red}
      bc_fff={outlined && white}
      b_rounded
      sd_1
      py_10
      px_25
      cr_pointer
      ts_all
      ease_in
      ts_duration_500ms
      hover__op_80
      hover__sd_3
      active__sdi_6
      focus__ol_none
      disabled__bg_e1e2e1
      disabled__cr_disallowed
      disabled__sd_1
      {...props}>
      <Text.span
        fa_center
        ls_10
        fs_10
        fc_fff={!outlined || (white && outlined)}
        fc_555={(!outlined && white) || (outlined && noColor)}
        fc_0073E6={outlined && blue}
        fc_008563={outlined && green}
        fc_EB0000={outlined && red}
        fw_bold
        ff_sans>
        {children}
      </Text.span>
    </View.button>
  );
};

export default Button;
