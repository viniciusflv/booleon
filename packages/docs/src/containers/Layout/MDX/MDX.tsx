import modules from '@booleon/modules';
import { booleon } from '@booleon/react';
import { KeyValue } from '@booleon/ui';

import { MDXProvider } from '@mdx-js/react';

const __As = booleon.span(modules);
const Heading = (as: any) => ({ children }: any) => (
  <__As id={children} as={as} pt_120 mt_neg_100 dark__ft_color_fff>
    {children}
  </__As>
);

const __Div = booleon.div(modules);
const __Pre = booleon.pre(modules);
const __Hr = booleon.hr(modules);
const __Anchor = booleon.a(modules);
const __Li = booleon.li(modules);
const __Paragraph = booleon.p(modules);
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
        table: ({ entries }) => <KeyValue entries={entries} />,
        p: (props) => (
          <__Paragraph
            {...props}
            ft_size_12
            dark__ft_color_8795a1
            ft_color_3d4852
          />
        ),
        a: (props) => (
          <__Anchor
            {...props}
            ol_none
            ft_color_inherit
            focus__ft_color_d55901
            hover__ft_color_d55901
          />
        ),
        hr: () => <__Hr bd_none bdt_1_solid_8795a1 my_20 />,
        ul: ({ children }) => <ul style={{ padding: 0 }}>{children}</ul>,
        li: ({ children }) => (
          <__Li m_0 p_0 li_inside ft_color_8795a1 ft_size_12>
            {children}
          </__Li>
        ),
        pre: ({ children, ...props }) => (
          <__Div
            mb_20
            bd_radius_8
            child__bd_radius_8
            dark__bd_1_solid_000
            bd_1_solid_d5d5d5
            ft_size_12>
            <__Pre {...props} m_0>
              {children}
            </__Pre>
          </__Div>
        ),
      }}>
      {children}
    </MDXProvider>
  );
}

export default MDX;
