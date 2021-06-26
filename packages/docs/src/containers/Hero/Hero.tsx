import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

const _Hero = booleon.section(modules);
const _Header = booleon.header(modules);
const _Title = booleon.h1(modules);
const _Div = booleon.div(modules);
function Hero({ children }) {
  return (
    <_Hero relative sd_4 h_auto h_min_50vh bg_color_d55901 gt_255_255_255_30>
      <_Div
        flex
        main_between
        cross_center
        do_wrap
        py_60
        px_20
        w_max_1440
        w_full
        h_full
        h_min_50vh
        m_auto>
        <_Header w_max_400>
          <_Title
            ft_size_30
            ft_border_d55901
            ft_color_fff
            dark__ft_color_22202c>
            Booleon is a DX focused CSS-in-JS library for, a highly typed
            declarative, styling
          </_Title>
          <_Title
            as="h2"
            ft_size_15
            ft_border_d55901
            ft_color_fff
            dark__ft_color_22202c>
            Using component `boolean` properties. Works by mapping a
            `pre-defined` entry of css with keys that can be static (`string`)
            or dynamic (`RegEx`).
          </_Title>
        </_Header>
        <_Div important__child__ft_size_20>{children}</_Div>
      </_Div>
    </_Hero>
  );
}

export default Hero;
