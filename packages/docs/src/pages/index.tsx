import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

import { Hero } from '../containers/Hero';

const _Div = booleon.div(modules);
function Home() {
  return (
    <>
      <Hero />
      <_Div
        relative
        top_neg_80
        flex
        do_wrap
        main_between
        py_60
        px_20
        w_max_1440
        w_full
        m_auto>
        <_Div
          flex
          do_wrap
          sd_4
          bg_color_fff
          dark__bg_color_282a36
          bd_radius_8
          h_150
          w_300>
          <pre>
            <code>const x = 2</code>
          </pre>
        </_Div>
        <_Div
          flex
          do_wrap
          sd_4
          bg_color_fff
          dark__bg_color_282a36
          bd_radius_8
          h_150
          w_300>
          <pre>
            <code>const x = 2</code>
          </pre>
        </_Div>
        <_Div
          flex
          do_wrap
          sd_4
          bg_color_fff
          dark__bg_color_282a36
          bd_radius_8
          h_150
          w_300>
          <pre>
            <code>const x = 2</code>
          </pre>
        </_Div>
        <_Div
          flex
          do_wrap
          sd_4
          bg_color_fff
          dark__bg_color_282a36
          bd_radius_8
          h_150
          w_300>
          <pre>
            <code>const x = 2</code>
          </pre>
        </_Div>
      </_Div>
    </>
  );
}

export default Home;
