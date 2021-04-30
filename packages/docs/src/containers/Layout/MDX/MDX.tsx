import modules from '@booleon/modules';
import { booleon } from '@booleon/react';
import { KeyValue } from '@booleon/ui';

import { MDXProvider } from '@mdx-js/react';

const Heading = (As: any) => ({ children, ...props }: any) => (
  <As id={children} {...props} style={{ paddingTop: 100, marginTop: -100 }}>
    {children}
  </As>
);

const __Div = booleon.div(modules);
const __Pre = booleon.pre(modules);
const __Hr = booleon.hr(modules);
const __Anchor = booleon.a(modules);
function MDX({ children }: any) {
  return (
    <MDXProvider
      components={{
        h1: (props) => (
          <__Div
            {...props}
            as="h2"
            id={props.children}
            pt_100
            mt_neg_100
            // pb_10
            // mb_30
            // ft_color_d55901
            ft_weight_bold
            ft_size_30
            // bdb_1_solid_d55901
          />
        ),
        h2: Heading('h3'),
        h3: Heading('h4'),
        h4: Heading('h5'),
        h5: Heading('h6'),
        h6: Heading('strong'),
        table: ({ entries }) => <KeyValue entries={entries} />,
        a: (props) => (
          <__Anchor {...props} ft_color_inherit hover__ft_color_d55901 />
        ),
        hr: () => <__Hr bd_1_solid_d55901 />,
        ul: ({ children }) => (
          <ul style={{ margin: 0, padding: 0 }}>{children}</ul>
        ),
        li: ({ children }) => (
          <li style={{ margin: 0, padding: 0 }}>{children}</li>
        ),
        pre: ({ children, ...props }) => (
          <__Div sd_2 dark__sd_4 mb_20 bd_radius_10 child__bd_radius_10>
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
