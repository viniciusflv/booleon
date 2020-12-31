import React, { FC, ReactNode } from 'react';

import { PaperStyled, InputStyled, WrapperStyle } from './styles';

const Drop: FC<any & { trigger: ReactNode; click?: boolean }> = ({
  children,
  trigger,
  click,
  ...props
}: any) => {
  return (
    <WrapperStyle
      relative
      cr_pointer
      child__cr_pointer
      focus__child__visible={!click}
      focus__child__ani_name_drop={!click}
      within__child__visible={!click}
      within__child__ani_name_drop={!click}
      hover__child__visible={!click}
      hover__child__ani_name_drop={!click}>
      {trigger}
      {click ? (
        <InputStyled
          type="checkbox"
          op_0
          absolute
          inset
          w_full
          h_full
          checked__sibling__visible
          checked__sibling__ani_name_drop
        />
      ) : null}
      <PaperStyled
        {...props}
        flex
        col
        absolute
        invisible
        kf__drop
        from__top
        to__top_full
        ani_forwards
        ani_duration_300ms
        ani_iteration_1
        ani_ease_in_out>
        {children}
      </PaperStyled>
    </WrapperStyle>
  );
};

export default Drop;
