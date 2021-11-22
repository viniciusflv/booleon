import modules from '@booleon/modules';
import { booleon } from '@booleon/react';
import { KeyValue } from '@booleon/ui';

import { MDXProvider } from '@mdx-js/react';

import { Anchor } from './Anchor';
import { Heading } from './Heading';
import { Paragraph } from './Paragraph';
import { Preformatted } from './Preformatted';

const _Hr = booleon.hr(modules);
const _Li = booleon.li(modules);

function MDX({ children }: any) {
  return (
    <MDXProvider
      components={{
        h1: Heading('h2'),
        h2: Heading('h3'),
        h3: Heading('h4'),
        h4: Heading('h5'),
        h5: Heading('h6'),
        h6: Heading('strong'),
        a: Anchor,
        p: Paragraph,
        table: KeyValue,
        pre: Preformatted,
        hr: () => (
          <_Hr
            bd_none
            my_20rxm
            bdt_width_1rxm
            bdt_style_solid
            bdt_color_8795a1
          />
        ),
        ul: ({ children }) => <ul style={{ padding: 0 }}>{children}</ul>,
        li: ({ children }) => (
          <_Li m_0 p_0 li_inside ft_color_8795a1 ft_size_12rxm>
            {children}
          </_Li>
        ),
      }}
    >
      {children}
    </MDXProvider>
  );
}

export default MDX;
