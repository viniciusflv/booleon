import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

const _Hero = booleon.section(modules);
const _Div = booleon.div(modules);
function Hero() {
  return (
    <_Hero sd_4 h_min_50vh>
      <_Div py_60 px_20 w_max_1440 w_full m_auto>
        Hero
      </_Div>
    </_Hero>
  );
}

export default Hero;
