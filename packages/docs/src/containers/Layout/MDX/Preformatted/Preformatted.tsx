import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

const _Pre = booleon.pre(modules);

function Preformatted({ children, ...props }: any) {
  return (
    <_Pre
      relative
      mb_20rxm
      bd_radius_8rxm
      child__bd_radius_8rxm
      dark__bd_1_solid_000
      bd_1_solid_d5d5d5
      ft_size_12rxm
      important__pr_50rxm
      {...props}
    >
      {children}
    </_Pre>
  );
}

export default Preformatted;
