import modules from '@booleon/modules';
import { booleon } from '@booleon/react';
import { Svg } from '@booleon/ui';

import { animated } from '../../assets';

const _Hero = booleon.section(modules);
const _Header = booleon.header(modules);
const _Title = booleon.h1(modules);
const _Div = booleon.div(modules);
const _I = booleon.i(modules);

function Hero({ children }: any) {
  return (
    <_Hero
      relative
      sd_4
      h_auto
      min_h_50vh
      bg_color_d55901
      gdb_linear_255_255_255_30
    >
      <_Div
        flex
        gap_20rxm
        main_between
        cross_center
        do_wrap
        py_60rxm
        px_20rxm
        max_w_1440rxm
        w_full
        h_full
        min_h_50vh
        m_auto
      >
        <_Header max_w_400rxm>
          <_Title
            ft_size_30rxm
            ft_border_d55901
            ft_color_fff
            dark__ft_color_22202c
          >
            Booleon is a DX focused CSS-in-JS library for, a highly typed
            declarative, styling
          </_Title>
          <_Title
            as="h2"
            ft_size_15
            ft_border_d55901
            ft_color_fff
            dark__ft_color_22202c
          >
            Using component `boolean` properties. Works by mapping a
            `pre-defined` entry of css with keys that can be static (`string`)
            or dynamic (`RegEx`).
          </_Title>
        </_Header>
        <_I
          flex
          grow
          main_center
          cross_center
          ft_color_fff
          dark__ft_color_22202c
        >
          <Svg {...animated} width="200px" defaultFill={false} />
        </_I>
        <_Div important__child__ft_size_20rxm>{children}</_Div>
      </_Div>
    </_Hero>
  );
}

export default Hero;
