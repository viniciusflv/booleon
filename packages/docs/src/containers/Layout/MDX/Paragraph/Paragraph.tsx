import modules from '@booleon/modules';
import { booleon } from '@booleon/react';

const _Paragraph = booleon.p(modules);

function Paragraph(props: any) {
  return (
    <_Paragraph
      {...props}
      ft_size_12rxm
      dark__ft_color_8795a1
      ft_color_3d4852
    />
  );
}

export default Paragraph;
